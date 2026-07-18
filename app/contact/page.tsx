'use client'

import { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Contact Us | D-LABS',
  description: 'Get in touch with D-LABS for your web development and design needs.',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

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

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:dlabs.ke@gmail.com"
                      className="text-muted-foreground hover:text-foreground smooth-transition"
                    >
                      dlabs.ke@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+254710236087"
                      className="text-muted-foreground hover:text-foreground smooth-transition"
                    >
                      +254 710 236 087
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Embu, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="rounded-lg border border-border p-4 bg-primary/5">
              <p className="text-sm">
                <span className="font-semibold">Response time:</span>
                <br />
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary smooth-transition"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary smooth-transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary smooth-transition"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary smooth-transition resize-none"
                  placeholder="Describe your project, requirements, and timeline..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed smooth-transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 text-sm">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

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
