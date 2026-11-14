import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const LIPI_BIZ_URL = "https://lipa-biz.dlabskenya.com/";

type LipaPromoCardProps = {
    heading: string;
    description: string;
    features: string[];
    ctaLabel?: string;
};

export function LipaPromoCard({
    heading,
    description,
    features,
    ctaLabel = "Explore Lipa Biz",
}: LipaPromoCardProps) {
    return (
        <section
            aria-label="Recommended by D-Labs"
            className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-card to-card shadow-sm transition-shadow duration-300 hover:shadow-soft"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/[0.07] blur-2xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-accent/[0.06] blur-2xl"
            />

            <div className="relative p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Recommended by D-Labs
                </p>
                <h2 className="mt-3 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {heading}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {description}
                </p>

                <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm leading-6 text-muted-foreground"
                        >
                            <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                                aria-hidden="true"
                            />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 border-t border-primary/15 pt-5">
                    <a
                        href={LIPI_BIZ_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:shadow-md"
                    >
                        {ctaLabel}
                        <ArrowUpRight
                            className="h-4 w-4 shrink-0"
                            aria-hidden="true"
                        />
                    </a>
                    <p className="mt-3 text-xs text-muted-foreground/80">
                        A D-LABS product · M-Pesa payments made simple
                    </p>
                </div>
            </div>
        </section>
    );
}
