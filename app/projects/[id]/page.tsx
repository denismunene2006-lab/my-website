import { ChevronLeft, ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  return {
    title: 'Project | D-LABS',
    description: 'Explore one of our featured projects.',
  }
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const project = {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=1200&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    client: 'E-Commerce Client',
    year: '2024',
    challenge:
      'The client needed a scalable e-commerce solution that could handle high traffic during peak seasons. Traditional platforms were too expensive and inflexible for their needs.',
    solution:
      'We built a custom e-commerce platform using React for the frontend and Node.js with MongoDB for the backend. Integrated Stripe for secure payments and implemented a comprehensive admin dashboard for inventory management.',
    results: [
      '50% reduction in transaction processing time',
      '99.9% uptime achieved',
      'Support for 10,000+ concurrent users',
      'Mobile-first responsive design',
    ],
    technologies: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      backend: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      integration: ['Stripe', 'SendGrid', 'AWS S3', 'Cloudflare'],
    },
  }

  return (
    <>
      {/* Project Header */}
      <section className="py-12 md:py-20 bg-background border-b border-border">
        <div className="container-custom">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark smooth-transition mb-6"
          >
            <ChevronLeft size={20} />
            Back to Projects
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-8 bg-background">
        <div className="container-custom">
          <div className="relative h-96 md:h-96 rounded-lg overflow-hidden border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Results Achieved</h2>
                <ul className="space-y-3">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="rounded-lg border border-border p-6 bg-primary/5">
                <h3 className="font-semibold mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Client</p>
                    <p className="font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Completed</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold mb-4">Technologies Used</h3>
                <div className="space-y-4">
                  {Object.entries(project.technologies).map(([category, techs]) => (
                    <div key={category}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-2 tracking-wider">
                        {category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full bg-primary/10 text-xs text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark smooth-transition">
                  <ExternalLink size={18} />
                  View Live Site
                </button>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 smooth-transition">
                  <Github size={18} />
                  View Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Next Project</p>
              <h3 className="text-2xl font-bold">SaaS Dashboard</h3>
            </div>
            <Link
              href="/projects/2"
              className="px-6 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 smooth-transition"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready for Your Next Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how we can help bring your ideas to life.
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
