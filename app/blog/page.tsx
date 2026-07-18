import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | D-LABS',
  description: 'Read our latest articles on web development, design, and digital marketing.',
}

export default function BlogPage() {
  const articles = [
    {
      id: 'modern-web-development',
      title: 'Modern Web Development in 2024',
      excerpt:
        'Explore the latest trends and technologies shaping web development in 2024. From Next.js to Tailwind CSS, learn what&apos;s making waves.',
      category: 'Web Development',
      date: 'Jul 18, 2024',
      author: 'D-LABS Team',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 'seo-basics',
      title: 'SEO Basics for Small Business Websites',
      excerpt:
        'A comprehensive guide to improving your website&apos;s search engine visibility. Learn essential SEO practices that actually work.',
      category: 'SEO',
      date: 'Jul 10, 2024',
      author: 'D-LABS Team',
      image:
        'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
    },
    {
      id: 'website-performance',
      title: 'Improving Website Performance and Speed',
      excerpt:
        'Slow websites lose users. Discover practical strategies to optimize your site&apos;s performance and boost user experience.',
      category: 'Performance',
      date: 'Jun 28, 2024',
      author: 'D-LABS Team',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
    {
      id: 'responsive-design',
      title: 'Responsive Web Design Best Practices',
      excerpt:
        'Mobile-first design is no longer optional. Learn how to create websites that look great on all devices and screen sizes.',
      category: 'Design',
      date: 'Jun 15, 2024',
      author: 'D-LABS Team',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
    {
      id: 'website-security',
      title: 'Website Security: Protecting Your Users',
      excerpt:
        'Security breaches can be devastating. Learn the essential security practices to protect your website and user data.',
      category: 'Security',
      date: 'Jun 1, 2024',
      author: 'D-LABS Team',
      image:
        'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing Strategies for Tech Companies',
      excerpt:
        'Effective content marketing can drive leads and establish thought leadership. Discover proven strategies for tech businesses.',
      category: 'Marketing',
      date: 'May 20, 2024',
      author: 'D-LABS Team',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-background">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Articles, insights, and tips on web development, design, and digital marketing.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container-custom">
          <Link
            href={`/blog/${articles[0].id}`}
            className="block group rounded-lg overflow-hidden border border-border hover:border-primary/50 smooth-transition"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image */}
              <div className="relative h-64 lg:h-full overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <div className="inline-block w-fit mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    Featured
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary smooth-transition">
                  {articles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{articles[0].excerpt}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {articles[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {articles[0].author}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group rounded-lg overflow-hidden border border-border hover:border-primary/50 smooth-transition"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="inline-block mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary smooth-transition line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10 border-y border-border">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest web development tips, design trends, and industry insights delivered to your inbox.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-input text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            <button className="px-8 py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary-dark smooth-transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
