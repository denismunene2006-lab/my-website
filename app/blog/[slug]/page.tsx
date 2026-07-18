import { Calendar, User, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const article = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
  
  return {
    title: `${article} | D-LABS`,
    description: 'Read our latest article on web development, design, and digital marketing.',
  }
}

export default function BlogArticlePage() {
  const article = {
    title: 'Modern Web Development in 2024',
    date: 'Jul 18, 2024',
    author: 'D-LABS Team',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    content: `
      <p>Web development in 2024 is experiencing unprecedented transformation. The technology landscape has evolved significantly, and businesses must adapt to stay competitive.</p>

      <h2>Key Technologies Shaping the Future</h2>
      
      <p>Several technologies are leading the charge in modern web development:</p>

      <ul>
        <li><strong>Next.js 16</strong> - Server components and improved performance</li>
        <li><strong>Tailwind CSS 4</strong> - Powerful utility-first styling</li>
        <li><strong>TypeScript</strong> - Type safety for larger projects</li>
        <li><strong>React 19</strong> - Enhanced hooks and performance improvements</li>
      </ul>

      <h2>Performance is Non-Negotiable</h2>

      <p>Users expect fast, responsive websites. Lighthouse scores are higher than ever, and search engines prioritize performance. Key metrics to focus on include:</p>

      <ul>
        <li>Core Web Vitals (LCP, FID, CLS)</li>
        <li>Time to First Byte (TTFB)</li>
        <li>Cumulative Layout Shift</li>
      </ul>

      <h2>The Rise of AI-Assisted Development</h2>

      <p>AI tools are revolutionizing how developers work. From code generation to debugging, AI is becoming an essential part of the development workflow. However, human expertise remains crucial for architecture and critical decisions.</p>

      <h2>Security and Privacy Matter More</h2>

      <p>With increasing regulations like GDPR and CCPA, security and privacy are paramount. Developers must implement:</p>

      <ul>
        <li>Strong authentication mechanisms</li>
        <li>Data encryption</li>
        <li>Privacy-by-design principles</li>
        <li>Regular security audits</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Modern web development requires staying updated with the latest technologies while maintaining focus on fundamentals: performance, security, and user experience. The tools and frameworks available today make it easier than ever to build excellent web applications.</p>
    `,
  }

  return (
    <>
      {/* Article Header */}
      <section className="py-12 md:py-20 bg-background border-b border-border">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark smooth-transition mb-6"
          >
            <ChevronLeft size={20} />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                {article.author}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8 bg-background">
        <div className="container-custom">
          <div className="relative h-96 md:h-96 lg:h-96 rounded-lg overflow-hidden border border-border">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom max-w-3xl">
          <article className="prose prose-invert max-w-none">
            <div
              className="space-y-6"
              dangerouslySetInnerHTML={{
                __html: article.content,
              }}
            />
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-border">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'seo-basics',
                title: 'SEO Basics for Small Business Websites',
                date: 'Jul 10, 2024',
                image:
                  'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
              },
              {
                id: 'website-performance',
                title: 'Improving Website Performance and Speed',
                date: 'Jun 28, 2024',
                image:
                  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
              },
              {
                id: 'responsive-design',
                title: 'Responsive Web Design Best Practices',
                date: 'Jun 15, 2024',
                image:
                  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
              },
            ].map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 smooth-transition"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary smooth-transition line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2">{related.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
