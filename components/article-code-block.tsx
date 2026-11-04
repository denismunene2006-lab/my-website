'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type ArticleCodeBlockProps = {
  filename: string;
  code: string;
  language?: string;
};

export function ArticleCodeBlock({ filename, code, language }: ArticleCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

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
    <div className="min-w-0 overflow-hidden rounded-2xl border border-border/70 bg-slate-950 text-slate-100 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-slate-900 px-4 py-3">
        <span className="min-w-0 truncate font-mono text-xs text-slate-300">{filename}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex min-h-8 items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Copy code from ${filename}`}
        >
          {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
          {copied ? 'Copied' : copyFailed ? 'Copy failed' : 'Copy'}
        </button>
      </div>
      <pre className="max-w-full overflow-x-auto p-4 text-xs leading-6 sm:text-sm">
        <code data-language={language}>{code}</code>
      </pre>
    </div>
  );
}
