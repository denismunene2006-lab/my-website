import Hero from '@/components/hero'
import ServicesSection from '@/components/services-section'
import ProjectsSection from '@/components/projects-section'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsSection />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-border">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how D-LABS can help your business grow online. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark smooth-transition group"
          >
            Start Your Project
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 smooth-transition" />
          </Link>
        </div>
      </section>
    </>
  )
}
