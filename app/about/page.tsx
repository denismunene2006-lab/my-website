import { Metadata } from 'next'
import { Zap, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | D-LABS',
  description: 'Learn about D-LABS, a web development and design agency based in Embu, Kenya.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that impact your business growth.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work closely with our clients to understand their vision and goals.',
    },
    {
      icon: Zap,
      title: 'Innovative',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    },
    {
      icon: Award,
      title: 'Quality-Focused',
      description: 'We maintain high standards of code quality and design excellence.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-background">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About D-LABS</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We&apos;re a team of passionate developers and designers building digital solutions for businesses in Kenya and beyond.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                D-LABS was founded with a mission to bring world-class web development and design services to businesses in Embu and throughout Kenya. We started small but have grown into a trusted partner for companies looking to establish or improve their digital presence.
              </p>
              <p>
                Over the past 5+ years, we&apos;ve helped 30+ clients transform their businesses through modern, high-performance websites and web applications. From startups to established companies, we bring the same level of dedication and expertise to every project.
              </p>
              <p>
                Today, D-LABS is known for delivering exceptional results, maintaining strong client relationships, and consistently exceeding expectations.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="rounded-lg border border-border bg-background p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years in Business' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-border">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Ready to work with us? Let&apos;s discuss your project and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark smooth-transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
