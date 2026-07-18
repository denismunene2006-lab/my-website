import { Code, Palette, Zap, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom-built, scalable websites and web applications using modern technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'Web Design & Redesign',
      description: 'Beautiful, user-centered designs that convert. We redesign outdated sites into modern powerhouses.',
    },
    {
      icon: Zap,
      title: 'Deployment & Optimization',
      description: 'Fast, secure, and reliable hosting solutions with continuous optimization for peak performance.',
    },
    {
      icon: BookOpen,
      title: 'Web Training',
      description: 'Empower your team with training in modern web development, design, and digital marketing best practices.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Services Built for Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive web services to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 smooth-transition group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark smooth-transition"
          >
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
