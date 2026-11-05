import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { BlogCard } from "@/components/blog-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";

function getLatestArticles(count: number) {
    return [...articles]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count);
}

export function LatestInsights() {
    const latestArticles = getLatestArticles(3);

    if (latestArticles.length === 0) return null;

    return (
        <section className="page-section overflow-hidden">
            <div className="container-shell">
                <Reveal>
                    <SectionHeading
                        eyebrow="Latest Insights"
                        title="Fresh thinking from the D-LABS blog."
                        description="Practical articles on web development, performance, SEO, and digital growth — straight from the blog."
                    />
                </Reveal>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {latestArticles.map((article, index) => (
                        <Reveal
                            key={article.slug}
                            delay={index * 70}
                            className="h-full"
                        >
                            <BlogCard post={article} />
                        </Reveal>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Reveal>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="rounded-xl"
                        >
                            <Link href="/blog">
                                View all articles
                                <ArrowUpRight className="h-4 w-4 ml-1" />
                            </Link>
                        </Button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
