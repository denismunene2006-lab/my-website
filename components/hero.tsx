import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-background">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl opacity-20" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Build Your Digital{' '}
            <span className="gradient-text">Presence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-balance">
            D-LABS creates modern, high-performance websites and digital solutions for businesses ready to stand out online. From concept to deployment, we&apos;ve got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark smooth-transition group"
            >
              Get Website
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 smooth-transition" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 smooth-transition"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats/Trust Signals */}
          <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-border">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="flex-1">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
