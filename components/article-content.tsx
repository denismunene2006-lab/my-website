import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ArticleBlock } from '@/data/articles';
import { ArticleCodeBlock } from '@/components/article-code-block';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

type ArticleContentProps = {
  blocks: ArticleBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="min-w-0 space-y-8 break-words">
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index} className="text-base leading-8 text-muted-foreground sm:text-lg">
              {block.text}
            </p>
          );
        }

        if (block.type === 'heading') {
          const level = block.level ?? 2;
          const HeadingTag = level === 3 ? 'h3' : 'h2';
          const classes = level === 3 ? 'text-2xl font-semibold tracking-tight sm:text-3xl' : 'text-3xl font-semibold tracking-tight sm:text-4xl';

          return (
            <HeadingTag key={index} id={slugify(block.text)} className={classes}>
              {block.text}
            </HeadingTag>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="space-y-3 rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={index}
              className="rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 text-lg leading-8 text-foreground shadow-sm"
            >
              {block.text}
            </blockquote>
          );
        }

        if (block.type === 'callout') {
          return (
            <Card key={index} className="border-primary/15 bg-primary/[0.04] p-6 shadow-sm">
              {block.title ? <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{block.title}</p> : null}
              <p className={cn('mt-2 text-base leading-8 text-foreground')}>{block.text}</p>
            </Card>
          );
        }

        if (block.type === 'cards') {
          const columnsClass = block.columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

          return (
            <div key={index} className={cn('grid gap-4 sm:grid-cols-2', columnsClass)}>
              {block.items.map((item, itemIndex) => (
                <Card key={item.title} className="h-full border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {String(itemIndex + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          );
        }

        if (block.type === 'code') {
          return <ArticleCodeBlock key={index} filename={block.filename} code={block.code} language={block.language} />;
        }

        if (block.type === 'table') {
          return (
            <div key={index} className="max-w-full overflow-x-auto rounded-2xl border border-border/70 shadow-sm">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-muted/50 text-xs uppercase tracking-wide text-foreground">
                  <tr>
                    {block.headers.map((header) => (
                      <th key={header} scope="col" className="whitespace-nowrap border-b border-border/70 px-4 py-3 font-semibold">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-card">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="min-w-32 px-4 py-3 align-top leading-6 text-muted-foreground">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (block.type === 'link') {
          return (
            <Card key={index} className="border-primary/15 bg-primary/[0.04] p-5 shadow-sm">
              <a
                href={block.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
              >
                {block.label}
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
              {block.description ? <p className="mt-2 text-sm leading-7 text-muted-foreground">{block.description}</p> : null}
            </Card>
          );
        }

        if (block.type === 'steps') {
          return (
            <ol key={index} className="space-y-4">
              {block.items.map((item, itemIndex) => (
                <li key={item.title} className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {itemIndex + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold tracking-tight text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          );
        }

        return null;
      })}
    </div>
  );
}
