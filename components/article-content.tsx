import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ArticleBlock } from '@/data/articles';

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
    <div className="space-y-8">
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

        return null;
      })}
    </div>
  );
}
