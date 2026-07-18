import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard for data visualization and real-time reporting.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Mobile App Landing Page',
      description: 'Conversion-optimized landing page for iOS and Android app launch.',
      tags: ['React', 'Tailwind CSS', 'SEO'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcase of recent work demonstrating our expertise and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 smooth-transition"
            >
              {/* Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary smooth-transition">
                    {project.title}
                  </h3>
                  <ExternalLink size={16} className="text-primary flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full bg-primary/10 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 smooth-transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
