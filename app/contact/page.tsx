import { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | D-LABS',
  description: 'Get in touch with D-LABS for your web development and design needs.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-background">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss how we can help.
          </p>
        </div>
      </section>

      <ContactForm />

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-border">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. Small projects can take 2-4 weeks, while larger projects may take 2-3 months. We provide detailed timelines after the initial consultation.',
              },
              {
                q: 'Do you offer maintenance and support after launch?',
                a: 'Yes, we offer ongoing maintenance, support, and optimization services. We can discuss support packages that fit your needs and budget.',
              },
              {
                q: 'What technologies do you use?',
                a: 'We use modern technologies including React, Next.js, TypeScript, Tailwind CSS, and various backend technologies. We choose the best tech stack for each project.',
              },
              {
                q: 'Can you help with existing websites?',
                a: 'Absolutely! We specialize in redesigning and improving existing websites. We can modernize your site, improve performance, and enhance user experience.',
              },
            ].map((faq, i) => (
              <details key={i} className="rounded-lg border border-border bg-background p-6 cursor-pointer group">
                <summary className="font-semibold flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary group-open:rotate-180 smooth-transition">▼</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
