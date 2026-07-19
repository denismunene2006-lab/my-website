import { Metadata } from 'next'
import { Code, Palette, Zap, BookOpen, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | D-LABS - Web Development & Design',
  description: 'Comprehensive web development, design, deployment, and training services for your business.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom-built, scalable websites and web applications using modern technologies.',
      features: [
        'Responsive design for all devices',
        'SEO optimization',
        'Fast performance',
        'Secure & scalable architecture',
        'API integration',
        'E-commerce solutions',
      ],
    },
    {
      icon: Palette,
      title: 'Web Design & Redesign',
      description: 'Beautiful, user-centered designs that convert visitors into customers.',
      features: [
        'UX/UI design',
        'Brand identity',
        'Wireframing & prototyping',
        'User research',
        'A/B testing',
        'Accessibility compliance',
      ],
    },
    {
      icon: Zap,
      title: 'Deployment & Optimization',
      description: 'Fast, secure, and reliable hosting with continuous optimization.',
      features: [
        'Cloud hosting setup',
        'SSL certificates',
        'CDN configuration',
        'Performance monitoring',
        'Backup & recovery',
        'Security audits',
      ],
    },
    {
      icon: BookOpen,
      title: 'Web Training',
      description: 'Empower your team with modern web development and digital skills.',
      features: [
        'Frontend development',
        'Backend development',
        'Web design principles',
        'Digital marketing basics',
        'SEO fundamentals',
        'Custom workshops',
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-background">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive web services to help your business thrive in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div key={i} className="rounded-lg border border-border p-8 hover:border-primary/50 smooth-transition">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark smooth-transition"
                  >
                    Learn More →
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-lg text-muted-foreground">Solutions for businesses of all sizes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Starter', price: 'Custom', desc: 'Small projects & websites' },
              { name: 'Professional', price: 'Custom', desc: 'Full-featured web apps' },
              { name: 'Enterprise', price: 'Custom', desc: 'Large-scale solutions' },
            ].map((tier) => (
              <div key={tier.name} className="rounded-lg border border-border p-8 bg-background text-center hover:border-primary/50 smooth-transition">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{tier.price}</p>
                <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 smooth-transition"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today for a free consultation to discuss your project needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark smooth-transition group"
          >
            Schedule Consultation
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 smooth-transition" />
          </Link>
        </div>
      </section>
    </>
  )
}
