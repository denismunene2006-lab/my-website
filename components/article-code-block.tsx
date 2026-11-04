'use client';

import { Check, Code2, Copy } from 'lucide-react';
import { useState } from 'react';

type ArticleCodeBlockProps = {
  filename: string;
  code: string;
  language?: string;
};

type TokenType = 'comment' | 'string' | 'number' | 'keyword' | 'function' | 'variable' | 'operator' | 'plain';

const keywords = new Set([
  'async',
  'await',
  'catch',
  'const',
  'else',
  'export',
  'finally',
  'for',
  'from',
  'function',
  'if',
  'import',
  'in',
  'let',
  'new',
  'return',
  'throw',
  'try',
  'typeof',
  'var',
  'while',
]);

const builtIns = new Set([
  'Buffer',
  'JSON',
  'Number',
  'String',
  'console',
  'process',
  'require',
]);

function normalizeLanguage(language?: string) {
  const value = language?.toLowerCase();

  if (value === 'js' || value === 'javascript') return 'javascript';
  if (value === 'sh' || value === 'shell') return 'bash';
  if (value === 'env') return 'dotenv';
  return value || 'text';
}

function tokenClass(type: TokenType) {
  const classes: Record<TokenType, string> = {
    comment: 'text-emerald-400/75',
    string: 'text-amber-300',
    number: 'text-fuchsia-300',
    keyword: 'text-violet-300',
    function: 'text-sky-300',
    variable: 'text-cyan-200',
    operator: 'text-slate-300',
    plain: 'text-slate-200',
  };

  return classes[type];
}

function classifyWord(word: string, language: string, nextCharacter: string): TokenType {
  if (language === 'bash') {
    if (word.startsWith('$')) return 'variable';
    return 'plain';
  }

  if (keywords.has(word)) return 'keyword';
  if (builtIns.has(word)) return 'variable';
  if (/^\d+(?:\.\d+)?$/.test(word)) return 'number';
  if (nextCharacter === '(') return 'function';
  if (/^[A-Z][A-Za-z0-9]*$/.test(word)) return 'variable';
  return 'plain';
}

function highlightLine(line: string, language: string) {
  if (language === 'text' || language === 'gitignore') {
    return <span className={tokenClass('plain')}>{line || ' '}</span>;
  }

  const tokens: Array<{ value: string; type: TokenType }> = [];
  let index = 0;

  while (index < line.length) {
    const remaining = line.slice(index);
    const commentStart =
      (language === 'bash' || language === 'dotenv' ? remaining.indexOf('#') : remaining.indexOf('//'));

    if (commentStart === 0) {
      tokens.push({ value: remaining, type: 'comment' });
      break;
    }

    const character = line[index];
    if (character === '"' || character === "'" || character === '`') {
      let end = index + 1;
      while (end < line.length) {
        if (line[end] === character && line[end - 1] !== '\\') {
          end += 1;
          break;
        }
        end += 1;
      }
      tokens.push({ value: line.slice(index, end), type: 'string' });
      index = end;
      continue;
    }

    if (language === 'dotenv' && character === '#') {
      tokens.push({ value: line.slice(index), type: 'comment' });
      break;
    }

    if (/[A-Za-z_$]/.test(character)) {
      const match = line.slice(index).match(/^[A-Za-z_$][\w$]*/);
      const word = match?.[0] || character;
      tokens.push({
        value: word,
        type: classifyWord(word, language, line[index + word.length] || ''),
      });
      index += word.length;
      continue;
    }

    if (/\d/.test(character)) {
      const match = line.slice(index).match(/^\d+(?:\.\d+)?/);
      const number = match?.[0] || character;
      tokens.push({ value: number, type: 'number' });
      index += number.length;
      continue;
    }

    if ('=><|&!+-*/%?:'.includes(character)) {
      tokens.push({ value: character, type: 'operator' });
    } else {
      tokens.push({ value: character, type: 'plain' });
    }
    index += 1;
  }

  return tokens.map((token, tokenIndex) => (
    <span key={`${token.value}-${tokenIndex}`} className={tokenClass(token.type)}>
      {token.value}
    </span>
  ));
}

export function ArticleCodeBlock({ filename, code, language }: ArticleCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const normalizedLanguage = normalizeLanguage(language);
  const lines = code.split('\n');

  async function handleCopy() {
    setCopyFailed(false);
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-700/80 bg-[#101827] text-slate-100 shadow-lg shadow-slate-950/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 bg-[#172235] px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <Code2 className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
          <span className="min-w-0 truncate font-mono text-xs font-semibold text-slate-200">{filename}</span>
          <span className="rounded border border-slate-600/80 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-slate-400">
            {normalizedLanguage}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-slate-500/80 bg-slate-800/70 px-2.5 py-1.5 text-xs font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label={`Copy code from ${filename}`}
        >
          {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
          {copied ? 'Copied' : copyFailed ? 'Copy failed' : 'Copy'}
        </button>
      </div>
      <div className="max-w-full overflow-x-auto bg-[#0f1929]">
        <pre className="min-w-max p-4 text-xs leading-6 sm:text-sm">
          <code data-language={language}>
            {lines.map((line, index) => (
              <span key={index} className="flex min-h-6">
                <span className="mr-5 w-6 shrink-0 select-none text-right font-mono text-slate-500" aria-hidden="true">
                  {index + 1}
                </span>
                <span className="whitespace-pre">{highlightLine(line, normalizedLanguage)}</span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
