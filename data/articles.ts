import type { StaticImageData } from 'next/image';

import article20RulesImage from '../images/article-20-unshakable-rules-modern-web-development/art.webp';
import articleBusinessMistakesImage from '../images/article-business-website-mistakes/photo1.webp';
import articleContentMarketingImage from '../images/article-content-marketing-tech-companies/d3.webp';
import articleModernWebDevelopmentImage from '../images/article-modern-web-development/photo3.webp';
import articleOnlineGrowthImage from '../images/article-online-growth-strategy/photo2.webp';
import articleSeoBasicsImage from '../images/article-seo-basics-for-small-business/photo4.webp';
import articlePerformanceImage from '../images/article-website-performance-page-speed/d2.webp';

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level?: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'cards'; columns?: 2 | 3; items: { title: string; text: string }[] };

export type Article = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  updatedAt: string;
  readTime: string;
  category: string;
  image: StaticImageData;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: 'modern-web-development',
    title: 'Modern Web Development in 2026',
    subtitle: 'Building Websites That Work as Hard as You Do',
    description:
      'Speed, security, and user-focused design principles that help websites perform and convert.',
    date: 'April 18, 2026',
    updatedAt: 'May 13, 2026',
    readTime: '6 min read',
    category: 'Web Development',
    image: articleModernWebDevelopmentImage,
    blocks: [
      {
        type: 'paragraph',
        text:
          'In 2026, a website is more than just a digital business card. It is your most important employee. But what makes a modern website actually successful? It comes down to three simple things.',
      },
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'Speed',
            text:
              'If your site takes more than two seconds to load, people will leave. We use the latest tools to make sure your pages pop up instantly.',
          },
          {
            title: 'Security',
            text:
              'Customers need to know their data is safe. We build in high-level protection so you and your clients can sleep easy.',
          },
          {
            title: 'User-focus',
            text:
              'A great site is easy to use. Whether someone is on a cheap smartphone or a high-end laptop, they should find what they need in two clicks or less.',
          },
        ],
      },
      {
        type: 'callout',
        text:
          'Do not settle for an old-fashioned site. Let us build something fast, secure, and ready for the future.',
      },
    ],
  },
  {
    slug: 'website-performance-page-speed',
    title: 'Website Performance & Page Speed: Why It Matters for Conversions',
    subtitle: 'Why Every Second Counts for Your Bottom Line',
    description:
      'Discover how page speed affects user experience, SEO, and conversions.',
    date: 'April 29, 2026',
    updatedAt: 'May 13, 2026',
    readTime: '8 min read',
    category: 'Performance',
    image: articlePerformanceImage,
    blocks: [
      {
        type: 'paragraph',
        text:
          "In the digital world, speed isn't just a technical feature. It's a psychological trigger. When a website loads instantly, it feels professional, reliable, and trustworthy.",
      },
      {
        type: 'paragraph',
        text:
          'If your site is slow, you are not just losing visitors; you are losing revenue. Here is why page speed is the ultimate conversion tool.',
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'The 3-second rule',
            text:
              'Research shows that a large share of visitors will abandon a site that takes too long to load. If your CTA page lags, customers are already looking at a competitor.',
          },
          {
            title: 'Google rewards the fast',
            text:
              "Search engines want the best experience for users, and speed is a major ranking factor. Faster pages get a real advantage in search.",
          },
          {
            title: 'Mobile performance is key',
            text:
              'Most visitors browse on phones. A site that is heavy with unoptimized images or messy code might work on desktop but crawl on mobile data.',
          },
          {
            title: 'Trust and brand perception',
            text:
              'A fast site says you are efficient and professional. A slow, glitchy site silently sends the opposite message before a visitor reads a single line.',
          },
        ],
      },
      {
        type: 'list',
        items: [
          'Image compression keeps visuals sharp without bloating the page.',
          'Clean code removes unnecessary bloat that slows browsers down.',
          'Modern hosting helps serve your site quickly and reliably.',
        ],
      },
      {
        type: 'quote',
        text:
          'Go to your current website on your phone right now. Count to three. If it is not fully loaded, you are losing customers. Let us fix that today.',
      },
    ],
  },
  {
    slug: 'business-website-mistakes',
    title: '5 Business Website Mistakes to Avoid',
    subtitle: 'Small Fixes That Save Your Sales',
    description:
      'Discover five common website mistakes that hurt trust and conversions, plus practical fixes.',
    date: 'April 18, 2026',
    updatedAt: 'May 13, 2026',
    readTime: '5 min read',
    category: 'Business Websites',
    image: articleBusinessMistakesImage,
    blocks: [
      {
        type: 'paragraph',
        text:
          'Many business owners wonder why their website is not bringing in money. Usually, it is because of a few common mistakes that quietly hurt trust and action.',
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: '1. Hiding the buy button',
            text: 'If people have to hunt for your contact info or products, they will give up. Keep your buttons bright and easy to find.',
          },
          {
            title: '2. Too much tech talk',
            text: 'Your customers do not care about backend code; they care about how you solve their problems. Speak their language.',
          },
          {
            title: '3. Slow loading speeds',
            text: 'A slow site feels broken to a customer. Speeding it up is often the fastest way to build trust.',
          },
          {
            title: '4. Ignoring mobile users',
            text: 'Most people browse on phones. If your site looks messy on mobile, you are losing a huge part of your audience.',
          },
          {
            title: '5. No clear next step',
            text: 'Every page should tell the visitor what to do next. Should they call you? WhatsApp you? Buy now?',
          },
        ],
      },
      {
        type: 'callout',
        text:
          'We specialize in cleaning up these mistakes to turn a quiet website into a busy marketplace.',
      },
    ],
  },
  {
    slug: 'seo-basics-for-small-business',
    title: 'SEO Basics for Small Business Owners',
    subtitle: 'How to Get Found by the Right Customers',
    description:
      'A practical introduction to local SEO for small businesses that want to be discovered online.',
    date: 'April 18, 2026',
    updatedAt: 'May 13, 2026',
    readTime: '7 min read',
    category: 'SEO',
    image: articleSeoBasicsImage,
    blocks: [
      {
        type: 'paragraph',
        text:
          'SEO sounds complicated, but it is actually quite simple. It is the art of making sure that when someone searches for a service you offer, your name comes up first.',
      },
      { type: 'heading', level: 2, text: 'How to start winning at SEO' },
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'Be specific',
            text:
              'Instead of competing for broad global keywords, focus on local relevance and position your business as a trusted partner in your area.',
          },
          {
            title: 'Answer questions',
            text:
              'Write short articles that answer the exact questions your customers ask every day. Google loves helpful content.',
          },
          {
            title: 'Google My Business',
            text:
              'Make sure your business is on the map. This helps local customers find your location or service area instantly.',
          },
        ],
      },
      {
        type: 'callout',
        text: 'Good SEO means you stop chasing customers and start letting them find you.',
      },
    ],
  },
  {
    slug: 'online-growth-strategy',
    title: 'Online Growth Strategy That Works',
    subtitle: 'Turning Your Website into a 24/7 Sales Machine',
    description:
      'A practical framework for turning your website into a growth channel for leads and sales.',
    date: 'April 18, 2026',
    updatedAt: 'May 13, 2026',
    readTime: '6 min read',
    category: 'Online Growth',
    image: articleOnlineGrowthImage,
    blocks: [
      {
        type: 'paragraph',
        text:
          'Many businesses think that being online just means having a website. But a website without a growth strategy is like a shop in the middle of a desert. No matter how good it looks, no one is coming.',
      },
      {
        type: 'paragraph',
        text:
          'To grow in 2026, you need a practical framework that turns visitors into paying customers. Here is the D-LABS 3-step strategy for online growth.',
      },
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'Attract',
            text:
              'Show up where the people are. Use simple SEO, share social proof, and make sure your site loads fast so searchers actually stay.',
          },
          {
            title: 'Engage',
            text:
              'Once a visitor lands on your site, you have seconds to prove you are professional. Clean design, clear messaging, and mobile-first layouts do that work.',
          },
          {
            title: 'Convert',
            text:
              'Make it easy to say yes. Use one-click contact, clear calls to action, and local payment options where relevant.',
          },
        ],
      },
      {
        type: 'quote',
        text:
          'We do not just write code; we build channels for leads and sales. If your website is not growing your business, it is time for a new strategy.',
      },
    ],
  },
  {
    slug: 'content-marketing-tech-companies',
    title: 'Content Marketing for Tech Companies',
    subtitle: 'Why Teaching is the New Selling',
    description:
      'Use strategic content marketing to attract qualified leads and build authority for tech companies.',
    date: 'April 29, 2026',
    updatedAt: 'May 13, 2026',
    readTime: '8 min read',
    category: 'Content Marketing',
    image: articleContentMarketingImage,
    blocks: [
      {
        type: 'paragraph',
        text:
          "In the tech world, the old way of selling - cold calls and boring ads - is dying. Today, the most successful tech companies do not just sell products; they share knowledge.",
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Stop selling, start solving',
            text:
              'Modern clients want a solution to their problems. Write content that answers the questions they are already asking.',
          },
          {
            title: 'Humanize your tech',
            text:
              'Use simple English, show behind-the-scenes work, and tell the story behind specific features so your brand feels more human.',
          },
          {
            title: 'SEO is the gift that keeps on giving',
            text:
              'High-quality articles build assets that can bring in new leads every day for years without paid ads.',
          },
          {
            title: 'Education as a service',
            text:
              'Create checklists, how-to guides, and practical lists that help your clients grow their own businesses.',
          },
        ],
      },
      {
        type: 'quote',
        text:
          "We believe the best marketing does not feel like marketing. It feels like a conversation.",
      },
    ],
  },
  {
    slug: '20-unshakable-rules-modern-web-development',
    title: '20 Unshakable Rules of Modern Web Development',
    subtitle: 'The Mindset Shift That Separates Serious Developers From the Rest',
    description:
      'A practical guide to building modern websites that are fast, secure, accessible, and easy to maintain.',
    date: 'May 19, 2026',
    updatedAt: 'May 19, 2026',
    readTime: '12 min read',
    category: 'Web Development',
    image: article20RulesImage,
    blocks: [
      {
        type: 'paragraph',
        text:
          'Here is the hard reality of web development: most beginners focus entirely on making a website look good. Strong developers, however, focus on making it usable, secure, fast, scalable, and maintainable.',
      },
      {
        type: 'paragraph',
        text:
          'If you want to build websites that survive the real world, these are the essentials you must remember every time you write a line of code.',
      },
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: '1. Mobile-first is the only way',
            text:
              'Most users are on phones. If your layout breaks on mobile, your website is already failing.',
          },
          {
            title: '2. Speed over fancy design',
            text:
              'A beautiful but slow website loses users. Optimize images, fonts, API calls, and JavaScript bundles.',
          },
          {
            title: '3. Never trust user input',
            text:
              'Validate and sanitize input on both frontend and backend, hash passwords, and protect your APIs.',
          },
          {
            title: '4. Good UI does not equal good UX',
            text:
              'A site can look amazing and still be frustrating to use. UX means clear navigation, obvious buttons, and simple forms.',
          },
          {
            title: '5. Accessibility matters',
            text:
              'Use semantic HTML, descriptive alt text, and high contrast so the site works for everyone.',
          },
          {
            title: '6. Write clean, maintainable code',
            text:
              'Use clear variable names, reusable components, proper folder structures, and comments only when they add value.',
          },
          {
            title: '7. Guard your secrets',
            text:
              'Never hardcode API keys, database URLs, or secret tokens into your main files. Keep them in environment variables.',
          },
          {
            title: '8. Structure your site for SEO',
            text:
              'Use proper titles, descriptions, clean URLs, and structured semantic headings so search engines can understand your site.',
          },
          {
            title: '9. Code for failure, not just success',
            text:
              'Handle network failures, empty states, bad passwords, and API downtime gracefully so users never see a frozen screen.',
          },
          {
            title: '10. Think about scalability early',
            text:
              'Before you write a feature, ask whether the code will scale, stay understandable, and remain maintainable over time.',
          },
          {
            title: '11. Version control is mandatory',
            text:
              'Use Git properly, write meaningful commit messages, branch your work, and push frequently.',
          },
          {
            title: '12. Test everything',
            text:
              'Test different devices, edge cases, and bad network conditions instead of hoping the feature will work.',
          },
          {
            title: '13. Set up logging and monitoring',
            text:
              'Know when something breaks in production before the client calls you. Monitoring is part of shipping responsibly.',
          },
          {
            title: '14. Stop overengineering',
            text:
              'You do not need a complicated architecture or twenty libraries for a simple project. Simple systems win.',
          },
          {
            title: '15. User data is a serious responsibility',
            text:
              'Store only what is necessary and protect the information users trust you with.',
          },
          {
            title: '16. Master the art of deployment',
            text:
              'Understand environment variables, hosting platforms, custom domains, and HTTPS so you can bring code to the world confidently.',
          },
          {
            title: '17. Documentation saves lives',
            text:
              'Write clear setup instructions and project notes so your future self and teammates can move faster.',
          },
          {
            title: '18. Consistency beats motivation',
            text:
              'Build consistently, finish projects, and focus on fundamentals instead of chasing every new trend.',
          },
          {
            title: '19. Learn fundamentals before tools',
            text:
              'Master HTML, CSS, JavaScript, APIs, and authentication first. If the fundamentals are strong, any framework becomes easier.',
          },
          {
            title: '20. Build real projects',
            text:
              'Force yourself to build authentication systems, dashboards, payments, and APIs. That is where real learning starts.',
          },
        ],
      },
      {
        type: 'quote',
        text:
          'Every time you sit down to code, ask yourself: will this still work perfectly when real users start hitting the server?',
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const blogPreview = articles.slice(0, 3);
