import type { StaticImageData } from 'next/image';

import article20RulesImage from '../images/article-20-unshakable-rules-modern-web-development/art.webp';
import articleBusinessMistakesImage from '../images/article-business-website-mistakes/photo1.webp';
import articleContentMarketingImage from '../images/article-content-marketing-tech-companies/d3.webp';
import articleModernWebDevelopmentImage from '../images/article-modern-web-development/photo3.webp';
import articleOnlineGrowthImage from '../images/article-online-growth-strategy/photo2.webp';
import articleSeoBasicsImage from '../images/article-seo-basics-for-small-business/photo4.webp';
import articlePerformanceImage from '../images/article-website-performance-page-speed/d2.webp';
import mpesaDarajaArticleImage from '../images/article-mpesa-daraja-api-nodejs-express-mongodb/M-Pesa Daraja API Integration Guide.png';
import articleMpesaTillPaybillImage from '../images/article-apply-mpesa-till-paybill-online-kenya/hero.webp';

export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level?: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'cards'; columns?: 2 | 3; items: { title: string; text: string }[] }
  | { type: 'code'; filename: string; code: string; language?: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'link'; label: string; href: string; description?: string }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'lipa-promo'; heading: string; description: string; features: string[]; ctaLabel?: string };

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
  tags?: string[];
};

export const articles: Article[] = [
  {
    slug: 'modern-web-development',
    title: 'Modern Web Development in 2026',
    subtitle: 'Building Websites That Work as Hard as You Do',
    description:
      'Speed, security, and user-focused design principles that help websites perform and convert.',
    date: 'April 18, 2026',
    updatedAt: '3 November 2026',
    readTime: '9 min read',
    category: 'Web Development',
    image: articleModernWebDevelopmentImage,
    tags: ['Web Development', 'Modern Websites', 'Website Design', 'Website Security', 'User Experience', 'Kenya Web Developer'],
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
        type: 'paragraph',
        text:
          'A modern website is a connected system, not just a collection of attractive screens. The design, content, code, hosting, analytics, and support process all affect whether a visitor becomes a customer.',
      },
      { type: 'heading', level: 2, text: 'What makes a website modern?' },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Clear information architecture',
            text:
              'Organize pages around the questions customers have. A simple navigation structure helps visitors find services, proof, pricing, and contact options without hunting.',
          },
          {
            title: 'Accessible by default',
            text:
              'Use readable contrast, keyboard-friendly controls, descriptive labels, and meaningful headings so more people can use the site confidently.',
          },
          {
            title: 'Measurable outcomes',
            text:
              'Track useful actions such as form submissions, calls, bookings, and WhatsApp conversations. A modern site should help you learn what is working.',
          },
          {
            title: 'Easy to maintain',
            text:
              'Reusable components, organized content, and documented deployment steps reduce the cost of improving the website later.',
          },
        ],
      },
      {
        type: 'list',
        items: [
          'Use responsive layouts that work comfortably on small phones, tablets, and large screens.',
          'Serve optimized images and load only the scripts and fonts the page actually needs.',
          'Use HTTPS, secure headers, validated forms, and protected environment variables.',
          'Write page titles, descriptions, clean URLs, and semantic headings for search engines.',
          'Test real user journeys: finding a service, understanding the offer, and contacting the business.',
        ],
      },
      {
        type: 'callout',
        text:
          'Do not settle for an old-fashioned site. Let us build something fast, secure, accessible, measurable, and ready for the future.',
      },
      {
        type: 'link',
        label: 'Read the 20 Unshakable Rules of Modern Web Development',
        href: '/blog/20-unshakable-rules-modern-web-development',
        description: 'The deeper mindset behind building websites that survive the real world',
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
    updatedAt: '3 November 2026',
    readTime: '11 min read',
    category: 'Performance',
    image: articlePerformanceImage,
    tags: ['Page Speed', 'Website Performance', 'Core Web Vitals', 'SEO', 'Conversions', 'Website Optimization'],
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
          'Lazy-load below-the-fold media and reserve image dimensions to reduce layout shifts.',
          'Cache reusable assets and reduce unnecessary third-party scripts and tracking tools.',
          'Test important pages with Lighthouse and PageSpeed Insights on mobile settings.',
        ],
      },
      { type: 'heading', level: 2, text: 'A practical performance improvement process' },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Measure first',
            text:
              'Record the current load experience on your homepage, service pages, and conversion pages. Look at real-user data when available instead of optimizing one device in isolation.',
          },
          {
            title: 'Fix the biggest weight',
            text:
              'Large images, video backgrounds, web fonts, analytics scripts, and unneeded JavaScript often create the biggest gains when removed or optimized.',
          },
          {
            title: 'Protect the user journey',
            text:
              'A fast homepage is not enough if the quote form, booking page, or checkout is slow. Test the complete path from landing page to action.',
          },
          {
            title: 'Keep monitoring',
            text:
              'Performance can regress when new campaigns, plugins, images, or integrations are added. Check important pages after every significant release.',
          },
        ],
      },
      {
        type: 'paragraph',
        text:
          'Performance is not about chasing a perfect score at the expense of useful features. It is about removing friction so visitors can understand your offer, trust the business, and complete the next step quickly.',
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
    updatedAt: '3 November 2026',
    readTime: '9 min read',
    category: 'Business Websites',
    image: articleBusinessMistakesImage,
    tags: ['Business Website', 'Website Mistakes', 'Website Design', 'Small Business', 'Conversions', 'Kenya'],
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
            title: 'Hiding the buy button',
            text: 'If people have to hunt for your contact info or products, they will give up. Keep your buttons bright and easy to find.',
          },
          {
            title: 'Too much tech talk',
            text: 'Your customers do not care about backend code; they care about how you solve their problems. Speak their language.',
          },
          {
            title: 'Slow loading speeds',
            text: 'A slow site feels broken to a customer. Speeding it up is often the fastest way to build trust.',
          },
          {
            title: 'Ignoring mobile users',
            text: 'Most people browse on phones. If your site looks messy on mobile, you are losing a huge part of your audience.',
          },
          {
            title: 'No clear next step',
            text: 'Every page should tell the visitor what to do next. Should they call you? WhatsApp you? Buy now?',
          },
        ],
      },
      { type: 'heading', level: 2, text: 'How to fix each mistake' },
      {
        type: 'list',
        items: [
          'Put one primary call to action in the header and repeat it naturally after important sections.',
          'Replace technical descriptions with benefits, examples, outcomes, and language your customers understand.',
          'Compress images, remove unnecessary scripts, and test the site on a real mobile connection.',
          'Check every page at a small phone width, including menus, forms, cards, buttons, and tables.',
          'Give visitors a clear next step: call, WhatsApp, request a quote, book a consultation, or visit the shop.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'These mistakes are connected. A confusing message makes a slow page feel less trustworthy, while a hidden contact option wastes the attention that good SEO and advertising worked to earn. Review the full customer journey instead of fixing isolated elements.',
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Build trust with proof',
            text:
              'Show real work, customer results, testimonials, guarantees, locations, and clear contact details. Proof answers the question, “Why should I choose you?”',
          },
          {
            title: 'Keep information current',
            text:
              'Outdated prices, broken links, old opening hours, and unavailable services create doubt. Schedule a simple monthly content check.',
          },
          {
            title: 'Make forms helpful',
            text:
              'Ask only for information you need, explain what happens next, and provide a clear success message after submission.',
          },
          {
            title: 'Review real behavior',
            text:
              'Use analytics, search data, customer questions, and support messages to find where people hesitate or leave.',
          },
        ],
      },
      {
        type: 'callout',
        text:
          'We specialize in cleaning up these mistakes to turn a quiet website into a busy marketplace.',
      },
      {
        type: 'link',
        label: 'Read the SEO Basics for Small Business guide',
        href: '/blog/seo-basics-for-small-business',
        description: 'Once the fundamentals are fixed, local SEO helps the right customers actually find you',
      },
      {
        type: 'link',
        label: 'Read the Website Performance & Page Speed guide',
        href: '/blog/website-performance-page-speed',
        description: 'A deeper look at why slow sites lose customers and how to fix them',
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
    updatedAt: '3 November 2026',
    readTime: '10 min read',
    category: 'SEO',
    image: articleSeoBasicsImage,
    tags: ['SEO', 'Local SEO', 'Small Business', 'Google Business Profile', 'Search Rankings', 'Kenya'],
    blocks: [
      {
        type: 'paragraph',
        text:
          'SEO sounds complicated, but the foundation is simple: make it easy for search engines to understand your business and easy for the right customers to trust it. The goal is not to attract everyone. It is to appear when someone is actively looking for the product or service you provide.',
      },
      { type: 'heading', level: 2, text: 'How to start winning at SEO' },
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            title: 'Be specific',
            text:
              'Instead of competing for broad global keywords, focus on specific phrases that match your service, location, and customer intent. “Web developer in Embu” is more useful than trying to rank for “web design.”',
          },
          {
            title: 'Answer questions',
            text:
              'Write useful pages and articles that answer the questions your customers ask before they buy. Clear, original answers build relevance and give people a reason to stay on your site.',
          },
          {
            title: 'Google Business Profile',
            text:
              'Claim and complete your Google Business Profile. Accurate services, opening hours, photos, reviews, and contact details help local customers find and choose you.',
          },
        ],
      },
      {
        type: 'paragraph',
        text:
          'Before changing your website, set up Google Search Console. It is a free Google tool that shows how your site appears in search, which queries bring impressions and clicks, and whether Google has found technical problems.',
      },
      { type: 'heading', level: 2, text: 'Use Google Search Console as your SEO dashboard' },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Verify your website',
            text:
              'Add your domain or URL-prefix property and complete verification. A domain property gives you the broadest view across protocols and subdomains.',
          },
          {
            title: 'Submit your sitemap',
            text:
              'Submit your sitemap.xml so Google can discover important pages faster. Check the Pages report for pages that are indexed, excluded, or blocked.',
          },
          {
            title: 'Study search performance',
            text:
              'Review clicks, impressions, click-through rate, and average position. Filter by query and page to find opportunities where a small improvement could bring more visitors.',
          },
          {
            title: 'Fix experience problems',
            text:
              'Use the indexing, HTTPS, mobile usability, and Core Web Vitals reports to find issues that can prevent pages from performing well for real users.',
          },
        ],
      },
      {
        type: 'callout',
        title: 'A practical Search Console routine',
        text:
          'Check your Performance report once a month, inspect important new pages, review indexing errors, and compare results with the previous period. SEO becomes easier when you measure what is happening instead of guessing.',
      },
      { type: 'heading', level: 2, text: 'The essential parts of small-business SEO' },
      {
        type: 'list',
        items: [
          'Create one useful, descriptive title and meta description for every important page.',
          'Use a clear URL, one meaningful H1 heading, and descriptive subheadings that match the page topic.',
          'Make every service page specific: explain who it helps, what it includes, where you serve, and what the next step is.',
          'Keep your business name, phone number, address, service area, and opening hours consistent across your website and directory listings.',
          'Ask satisfied customers for honest Google reviews and respond professionally to useful feedback.',
          'Compress images, use descriptive alt text, and keep pages fast and comfortable to use on mobile networks.',
          'Link related pages together so visitors and search engines can discover your services, articles, and contact page.',
          'Update outdated information and improve pages that already receive impressions but few clicks.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Do not treat SEO as a one-time trick. Search rankings change because competitors publish better information, customer needs change, and Google improves how it evaluates useful content. A steady process of publishing, measuring, and improving is more reliable than chasing shortcuts.',
      },
      { type: 'heading', level: 2, text: 'Avoid shortcuts that damage trust' },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Keyword stuffing',
            text:
              'Repeating a phrase unnaturally makes content harder to read. Use the language your customers use and cover the topic thoroughly instead.',
          },
          {
            title: 'Copied content',
            text:
              'Duplicating another site rarely creates lasting value. Add your own experience, examples, process, and local knowledge.',
          },
          {
            title: 'Buying reviews or links',
            text:
              'Artificial reviews and manipulative backlinks can put your reputation and visibility at risk. Earn trust through useful work and genuine relationships.',
          },
          {
            title: 'Ignoring conversions',
            text:
              'Traffic is not the final goal. Make it obvious how visitors can call, WhatsApp, request a quote, visit your location, or take the next useful step.',
          },
        ],
      },
      {
        type: 'callout',
        text:
          'Good SEO means you stop chasing every possible visitor and start becoming easier to find for the customers who already need your help. Start with one clear service page, a complete Google Business Profile, and regular Search Console checks.',
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
    updatedAt: '3 November 2026',
    readTime: '10 min read',
    category: 'Online Growth',
    image: articleOnlineGrowthImage,
    tags: ['Online Growth', 'Lead Generation', 'Digital Marketing', 'Website Strategy', 'Conversions', 'Kenya'],
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
      { type: 'heading', level: 2, text: 'Build a repeatable growth system' },
      {
        type: 'list',
        items: [
          'Choose one audience and one clear business goal before choosing channels or campaigns.',
          'Create a useful landing page that explains the problem, solution, proof, and next step.',
          'Capture questions from sales conversations and turn the best answers into content.',
          'Use email, WhatsApp, or another permission-based follow-up channel to continue helpful conversations.',
          'Review traffic, qualified enquiries, conversion rate, and cost per lead instead of celebrating visits alone.',
          'Improve the pages and campaigns that already show promise before constantly starting new ones.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'Growth becomes sustainable when each activity supports the next one. Search and social content attract attention, the website explains the offer, proof reduces uncertainty, and a simple follow-up process helps interested people make a decision.',
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Own your audience',
            text:
              'Social platforms can change their reach or rules. Use them to attract attention, but guide interested people toward your website, email list, or direct contact channel.',
          },
          {
            title: 'Make trust visible',
            text:
              'Case studies, reviews, transparent pricing guidance, clear policies, and a real business identity make visitors more comfortable taking action.',
          },
          {
            title: 'Test one change at a time',
            text:
              'Improve a headline, offer, form, or call to action and compare results. Small, measured improvements compound over time.',
          },
          {
            title: 'Follow up with value',
            text:
              'A person who is not ready today may still become a customer. Share useful reminders and answers without turning every message into pressure.',
          },
        ],
      },
      {
        type: 'quote',
        text:
          'We do not just write code; we build channels for leads and sales. If your website is not growing your business, it is time for a new strategy.',
      },
      {
        type: 'link',
        label: 'Read the SEO Basics for Small Business guide',
        href: '/blog/seo-basics-for-small-business',
        description: 'Attract is step one of the growth system, this is how to get it right',
      },
      {
        type: 'link',
        label: 'Read the Content Marketing for Tech Companies guide',
        href: '/blog/content-marketing-tech-companies',
        description: 'How sharing knowledge turns your blog into a lead-generation channel',
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
    updatedAt: '3 November 2026',
    readTime: '11 min read',
    category: 'Content Marketing',
    image: articleContentMarketingImage,
    tags: ['Content Marketing', 'B2B Marketing', 'Lead Generation', 'Tech Companies', 'Thought Leadership', 'Blog Strategy'],
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
      { type: 'heading', level: 2, text: 'A practical content marketing workflow' },
      {
        type: 'list',
        items: [
          'Interview customers and sales teams to find recurring questions, objections, and desired outcomes.',
          'Choose a clear format: guide, comparison, case study, checklist, demo, newsletter, or short video.',
          'Give each piece one audience, one problem, and one useful next step.',
          'Support claims with examples, screenshots, data, or lessons from real projects.',
          'Optimize the title, headings, links, and description so people can discover the content.',
          'Repurpose a strong article into social posts, an email, a checklist, or a sales conversation.',
        ],
      },
      {
        type: 'paragraph',
        text:
          'The best technology content is specific enough to be useful and simple enough to be understood. You do not need to reveal confidential implementation details; explain the decisions, trade-offs, and outcomes that help a potential customer make a better choice.',
      },
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            title: 'Create a point of view',
            text:
              'Explain what you recommend, what you avoid, and why. A clear perspective helps the right clients recognize that your approach fits their needs.',
          },
          {
            title: 'Show the work',
            text:
              'Behind-the-scenes notes, demos, diagrams, and before-and-after examples make technical expertise concrete and credible.',
          },
          {
            title: 'Distribute consistently',
            text:
              'A useful article that no one sees cannot create demand. Share it through search, newsletters, communities, social channels, and relevant sales conversations.',
          },
          {
            title: 'Measure business value',
            text:
              'Track qualified enquiries, assisted conversions, returning visitors, and sales conversations influenced by content, not only page views.',
          },
        ],
      },
      {
        type: 'quote',
        text:
          "We believe the best marketing does not feel like marketing. It feels like a conversation.",
      },
      {
        type: 'link',
        label: 'Read the SEO Basics for Small Business guide',
        href: '/blog/seo-basics-for-small-business',
        description: 'Content that teaches is one half of the equation, discoverability is the other',
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
    updatedAt: '30 October 2026',
    readTime: '12 min read',
    category: 'Web Development',
    image: article20RulesImage,
    tags: ['Web Development', 'Best Practices', 'Website Maintenance', 'Code Quality', 'Developer Mindset', 'Software Craftsmanship'],
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
            title: 'Mobile-first is the only way',
            text:
              'Most users are on phones. If your layout breaks on mobile, your website is already failing.',
          },
          {
            title: 'Speed over fancy design',
            text:
              'A beautiful but slow website loses users. Optimize images, fonts, API calls, and JavaScript bundles.',
          },
          {
            title: 'Never trust user input',
            text:
              'Validate and sanitize input on both frontend and backend, hash passwords, and protect your APIs.',
          },
          {
            title: 'Good UI does not equal good UX',
            text:
              'A site can look amazing and still be frustrating to use. UX means clear navigation, obvious buttons, and simple forms.',
          },
          {
            title: 'Accessibility matters',
            text:
              'Use semantic HTML, descriptive alt text, and high contrast so the site works for everyone.',
          },
          {
            title: 'Write clean, maintainable code',
            text:
              'Use clear variable names, reusable components, proper folder structures, and comments only when they add value.',
          },
          {
            title: 'Guard your secrets',
            text:
              'Never hardcode API keys, database URLs, or secret tokens into your main files. Keep them in environment variables.',
          },
          {
            title: 'Structure your site for SEO',
            text:
              'Use proper titles, descriptions, clean URLs, and structured semantic headings so search engines can understand your site.',
          },
          {
            title: 'Code for failure, not just success',
            text:
              'Handle network failures, empty states, bad passwords, and API downtime gracefully so users never see a frozen screen.',
          },
          {
            title: 'Think about scalability early',
            text:
              'Before you write a feature, ask whether the code will scale, stay understandable, and remain maintainable over time.',
          },
          {
            title: 'Version control is mandatory',
            text:
              'Use Git properly, write meaningful commit messages, branch your work, and push frequently.',
          },
          {
            title: 'Test everything',
            text:
              'Test different devices, edge cases, and bad network conditions instead of hoping the feature will work.',
          },
          {
            title: 'Set up logging and monitoring',
            text:
              'Know when something breaks in production before the client calls you. Monitoring is part of shipping responsibly.',
          },
          {
            title: 'Stop overengineering',
            text:
              'You do not need a complicated architecture or twenty libraries for a simple project. Simple systems win.',
          },
          {
            title: 'User data is a serious responsibility',
            text:
              'Store only what is necessary and protect the information users trust you with.',
          },
          {
            title: 'Master the art of deployment',
            text:
              'Understand environment variables, hosting platforms, custom domains, and HTTPS so you can bring code to the world confidently.',
          },
          {
            title: 'Documentation saves lives',
            text:
              'Write clear setup instructions and project notes so your future self and teammates can move faster.',
          },
          {
            title: 'Consistency beats motivation',
            text:
              'Build consistently, finish projects, and focus on fundamentals instead of chasing every new trend.',
          },
          {
            title: 'Learn fundamentals before tools',
            text:
              'Master HTML, CSS, JavaScript, APIs, and authentication first. If the fundamentals are strong, any framework becomes easier.',
          },
          {
            title: 'Build real projects',
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
      {
        type: 'link',
        label: 'Read Modern Web Development in 2026',
        href: '/blog/modern-web-development',
        description: 'What makes a website genuinely modern, and why it matters for your business',
      },
    ],
  },
];

export const mpesaDarajaArticle: Article = {
  slug: 'mpesa-daraja-api-nodejs-express-mongodb',
  title: 'M-Pesa Daraja API Integration with Node.js, Express and MongoDB: A Complete Step-by-Step Guide',
  subtitle: 'A practical beginner-friendly path from Daraja concepts to a reliable payment integration',
  description:
    'Learn how the Safaricom M-Pesa Daraja API works and how a Node.js, Express, and MongoDB application will integrate with it.',
  date: '3 November 2026',
  updatedAt: '3 November 2026',
  readTime: '25 min read',
  category: 'Backend Development',
  image: mpesaDarajaArticleImage,
  tags: ['M-Pesa', 'Daraja API', 'Node.js', 'Express', 'MongoDB', 'STK Push', 'Payment Integration', 'Kenya'],
  blocks: [
    {
      type: 'paragraph',
      text:
        'M-Pesa is one of the most widely used payment systems in Kenya. For a web application, the Daraja API provides the interface that lets your backend request payments, receive payment notifications, and keep your own transaction records in sync with Safaricom.',
    },
    {
      type: 'paragraph',
      text:
        'In this tutorial, we will build the integration from the ground up with Node.js and Express for the API server and MongoDB for transaction storage. The goal is not only to trigger a payment prompt, but to design the complete flow around authentication, callbacks, verification, reconciliation, and security.',
    },
    {
      type: 'callout',
      title: 'Important payment rule',
      text:
        'A successful STK Push initiation response only means that Safaricom accepted your request for processing. It is not proof that the customer entered a PIN or that money was received. Your application must process the callback and, where necessary, verify and reconcile the transaction before treating it as paid.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What is the M-Pesa Daraja API?',
    },
    {
      type: 'paragraph',
      text:
        'Daraja is Safaricom’s developer platform for integrating M-Pesa services into applications. Your server communicates with Daraja over HTTPS using JSON requests and responses. Depending on the product you use, the API can support customer-initiated payments, business-to-customer payments, business-to-business payments, transaction queries, and payment notifications.',
    },
    {
      type: 'paragraph',
      text:
        'This guide focuses on the common web checkout flow: a customer enters a phone number, your Express server requests an STK Push, the customer responds on their phone, and Safaricom calls your callback endpoint with the result. Later chapters will add C2B, persistence, verification, and reconciliation.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'The payment flow we will build',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Customer starts checkout',
          text:
            'The customer submits an order and a valid Kenyan M-Pesa phone number to your application.',
        },
        {
          title: 'Express requests an access token',
          text:
            'Your backend authenticates with Daraja using the Consumer Key and Consumer Secret stored in environment variables.',
        },
        {
          title: 'Express requests an STK Push',
          text:
            'Your backend creates the required password and timestamp, then sends the payment request to Daraja. The customer sees the payment prompt on their phone.',
        },
        {
          title: 'Safaricom sends the callback',
          text:
            'Daraja calls the configured callback URL with the result. Your server must validate the payload, record the outcome, and avoid assuming success before checking the result code.',
        },
        {
          title: 'The application reconciles the transaction',
          text:
            'Your system uses its stored identifiers and, when needed, a transaction-status query to resolve delayed, duplicated, or uncertain payment states.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Sandbox and production are different environments',
    },
    {
      type: 'table',
      headers: ['Environment', 'Purpose', 'Credentials and money'],
      rows: [
        [
          'Sandbox',
          'Build and test request formats, callbacks, and error handling.',
          'Uses sandbox app credentials and test configuration. Do not treat sandbox responses as live customer payments.',
        ],
        [
          'Production',
          'Process real customer payments after the business and integration are approved for live use.',
          'Uses production credentials and live account configuration. Protect credentials and monitor every transaction.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text:
        'The endpoints, credentials, account identifiers, callback configuration, and test behavior must be checked against the current Daraja documentation for the product you are integrating. Never copy sandbox credentials into production or commit either environment’s secrets to source control.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What we will build in the remaining chapters',
    },
    {
      type: 'list',
      items: [
        'A small Express API with clear environment configuration and error handling.',
        'OAuth token generation using the Daraja Consumer Key and Consumer Secret.',
        'STK Push password and timestamp generation without exposing secrets.',
        'Callback endpoints that distinguish accepted requests from completed payments.',
        'MongoDB transaction records that support retries, status checks, and reconciliation.',
        'Security controls for validation, HTTPS callbacks, idempotency, logging, and secret management.',
      ],
    },
    {
      type: 'link',
      label: 'Open the official Safaricom Daraja developer portal',
      href: 'https://developer.safaricom.co.ke/',
      description:
        'Use the official portal to create applications, review current API documentation, obtain environment-specific credentials, and confirm the requirements for the product you plan to use.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 2: Going live on Safaricom Daraja',
    },
    {
      type: 'paragraph',
      text:
        'Integrating M-Pesa payments into a web or mobile app is an important milestone for a Kenyan business. Moving from sandbox testing to real payments requires the correct business payment service, live credentials, and a production-ready backend. We will prepare those foundations before implementing STK Push, C2B, or callbacks in later chapters.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 1: Getting your Daraja credentials',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 1: Create a Daraja developer account',
    },
    {
      type: 'paragraph',
      text:
        'Open the official Safaricom Daraja Developer Portal and choose the registration option. Provide the information requested by the portal, verify your account if prompted, and sign in. The portal is where you create applications, view their credentials, and access the current API documentation.',
    },
    {
      type: 'link',
      label: 'Safaricom Daraja Developer Portal',
      href: 'https://developer.safaricom.co.ke/',
      description:
        'Use this official portal for registration, sign-in, application creation, sandbox credentials, and current Daraja documentation.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 2: Create a sandbox application',
    },
    {
      type: 'paragraph',
      text:
        'After signing in, create a new application from the developer dashboard. Select the M-Pesa products your application needs, such as M-Pesa Express (STK Push) and C2B where they are available. STK Push requests a customer payment prompt; C2B handles payments made to a business shortcode and sends payment notifications to your validation and confirmation endpoints.',
    },
    {
      type: 'callout',
      title: 'Follow the current dashboard',
      text:
        'The products and options shown in the portal can change. Follow the current dashboard labels and API documentation rather than assuming that every product is enabled for every application.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 3: Retrieve your API credentials',
    },
    {
      type: 'paragraph',
      text:
        'Open the credentials or application details for the sandbox app. Store the values in a password manager or a local environment file excluded from Git. Never paste real values into source code, screenshots, tutorials, or support requests.',
    },
    {
      type: 'table',
      headers: ['Value', 'What it does'],
      rows: [
        ['Consumer Key', 'Identifies your application when the backend requests an OAuth access token.'],
        ['Consumer Secret', 'Authenticates your application together with the Consumer Key. Keep it private and server-side.'],
        ['Sandbox shortcode', 'The test business shortcode used by the sandbox payment product and examples.'],
        ['Sandbox passkey', 'A sandbox secret combined with the shortcode and timestamp to create the STK Push password.'],
      ],
    },
    {
      type: 'paragraph',
      text:
        'The Access Token is generated later through OAuth using the Consumer Key and Consumer Secret. It is temporary, so your application should request it when needed rather than storing it permanently.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 4: Understand sandbox versus production',
    },
    {
      type: 'paragraph',
      text:
        'Sandbox is for testing request formats, authentication, callback handling, and error paths. Production is for real payments and requires the appropriate business M-Pesa service, live credentials, correct account configuration, and Safaricom go-live approval. Keep the two environments separate and never reuse sandbox secrets in production.',
    },
    {
      type: 'paragraph',
      text:
        'A developer does not need to personally own a live Paybill or Buy Goods Till Number to learn the integration in the sandbox. Paybill and Buy Goods Till are business payment services with different operating contexts; use the service that matches the business arrangement and Daraja product being implemented.',
    },
    {
      type: 'link',
      label: 'Safaricom M-Pesa Business Payment Solutions',
      href: 'https://www.safaricom.co.ke/business/sme/m-pesa-payment-solutions',
      description:
        'Review Safaricom’s official business payment information when deciding whether a Paybill or Buy Goods Till service fits your business.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 2: Setting up our Node.js project',
    },
    {
      type: 'paragraph',
      text:
        'We will use Node.js for the runtime, Express for HTTP routes, MongoDB for transaction data, Mongoose for the MongoDB object model, Axios for Daraja HTTP requests, and dotenv for loading local environment variables.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 5: Create the project',
    },
    {
      type: 'paragraph',
      text:
        'Create a new folder, open a terminal in it, and initialize a Node.js project.',
    },
    {
      type: 'code',
      filename: 'Terminal',
      language: 'bash',
      code: `mkdir mpesa-daraja-api
cd mpesa-daraja-api
npm init -y`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 6: Install dependencies',
    },
    {
      type: 'code',
      filename: 'Terminal',
      language: 'bash',
      code: `npm install express mongoose axios dotenv
npm install --save-dev nodemon`,
    },
    {
      type: 'table',
      headers: ['Dependency', 'Purpose'],
      rows: [
        ['express', 'Creates the HTTP server and API routes.'],
        ['mongoose', 'Connects to MongoDB and defines document models.'],
        ['axios', 'Sends HTTP requests to Daraja endpoints.'],
        ['dotenv', 'Loads local variables from .env.'],
        ['nodemon', 'Restarts the development server when files change.'],
      ],
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 7: Create the project structure',
    },
    {
      type: 'paragraph',
      text:
        'Create these folders now. We will fill them progressively as the tutorial adds OAuth, payment requests, callbacks, transaction models, and reconciliation.',
    },
    {
      type: 'code',
      filename: 'Project structure',
      language: 'text',
      code: `mpesa-daraja-api/
├── src/
│   ├── config/database.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
└── package.json`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 8: Configure environment variables',
    },
    {
      type: 'paragraph',
      text:
        'Create the example file below and copy it to .env for local development. Replace placeholders only in your private .env. DARAJA_ENV will later select sandbox or production configuration.',
    },
    {
      type: 'code',
      filename: '.env.example',
      language: 'dotenv',
      code: `PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/mpesa_daraja
DARAJA_CONSUMER_KEY=replace_with_your_consumer_key
DARAJA_CONSUMER_SECRET=replace_with_your_consumer_secret
DARAJA_SHORTCODE=replace_with_your_shortcode
DARAJA_PASSKEY=replace_with_your_passkey
DARAJA_CALLBACK_URL=https://your-domain.example/api/mpesa/callback
DARAJA_VALIDATION_URL=https://your-domain.example/api/c2b/validation
DARAJA_CONFIRMATION_URL=https://your-domain.example/api/c2b/confirmation
DARAJA_INITIATOR_NAME=replace_with_transaction_status_initiator
DARAJA_SECURITY_CREDENTIAL=replace_with_transaction_status_security_credential
DARAJA_RESULT_URL=https://your-domain.example/api/mpesa/status/result
DARAJA_TIMEOUT_URL=https://your-domain.example/api/mpesa/status/timeout
DARAJA_ENV=sandbox`,
    },
    {
      type: 'code',
      filename: '.gitignore',
      language: 'gitignore',
      code: `.env
node_modules/
logs/
npm-debug.log*`,
    },
    {
      type: 'callout',
      title: 'Keep credentials server-side',
      text:
        'Consumer secrets, passkeys, database connection strings, and access tokens must never be exposed to a browser or committed to Git. Rotate a credential immediately if it is accidentally published.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 3: Connect to MongoDB',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 9: Configure the database',
    },
    {
      type: 'paragraph',
      text:
        'Use a local MongoDB server for development or create a MongoDB Atlas deployment. Put the connection string in MONGODB_URI. This helper fails clearly when the variable is missing and rethrows connection errors instead of allowing the server to start in an unknown state.',
    },
    {
      type: 'code',
      filename: 'src/config/database.js',
      language: 'javascript',
      code: `const mongoose = require('mongoose');

async function connectToDatabase() {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not configured');
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    throw error;
  }
}

module.exports = { connectToDatabase };`,
    },
    {
      type: 'link',
      label: 'MongoDB documentation',
      href: 'https://www.mongodb.com/docs/',
      description:
        'Use the official documentation for installation, connection strings, authentication, and deployment guidance.',
    },
    {
      type: 'link',
      label: 'MongoDB Atlas',
      href: 'https://www.mongodb.com/products/platform',
      description:
        'Atlas provides a managed MongoDB deployment. Follow its current setup and network-access instructions.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 10: Verify the connection',
    },
    {
      type: 'paragraph',
      text:
        'Add a minimal Express server that loads dotenv, connects to MongoDB before accepting requests, and reports startup errors. This verifies the database before we add payment routes.',
    },
    {
      type: 'code',
      filename: 'src/server.js',
      language: 'javascript',
      code: `require('dotenv').config();

const express = require('express');
const { connectToDatabase } = require('./config/database');

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(\`API listening on port \${port}\`);
    });
  } catch (error) {
    console.error('Application startup failed:', error.message);
    process.exitCode = 1;
  }
}

startServer();`,
    },
    {
      type: 'paragraph',
      text:
        'Run node src/server.js. A successful startup prints MongoDB connected and API listening on port 3000, or the port configured in .env. In another terminal, request the health endpoint. The expected response is { "status": "ok" }. If startup fails, check MONGODB_URI, the local MongoDB service, or Atlas network access rules.',
    },
    {
      type: 'code',
      filename: 'Terminal',
      language: 'bash',
      code: `node src/server.js
curl http://localhost:3000/health`,
    },
    {
      type: 'callout',
      title: 'What comes next',
      text:
        'The project now has server-side configuration, a database connection, and a health endpoint. The next chapter will add OAuth authentication. STK Push, C2B, callback processing, and reconciliation remain separate later parts.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 3: Implement OAuth authentication',
    },
    {
      type: 'paragraph',
      text:
        'Chapter 2 stored the Consumer Key and Consumer Secret in environment variables. We will now use those values to request a temporary Daraja access token. This token is sent in the Authorization header of protected API requests; it is not the same thing as either application credential.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 4: Generate a Daraja access token',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 11: Select the Daraja environment',
    },
    {
      type: 'paragraph',
      text:
        'Use the sandbox host while learning and testing. Use the production host only after your application has the appropriate live approval and credentials. Keeping the host selection in one service prevents a sandbox request from accidentally being sent with production settings.',
    },
    {
      type: 'code',
      filename: 'src/config/daraja.js',
      language: 'javascript',
      code: `const environments = {
  sandbox: 'https://sandbox.safaricom.co.ke',
  production: 'https://api.safaricom.co.ke',
};

function getDarajaBaseUrl() {
  const environment = process.env.DARAJA_ENV || 'sandbox';
  const baseUrl = environments[environment];

  if (!baseUrl) {
    throw new Error('DARAJA_ENV must be sandbox or production');
  }

  return baseUrl;
}

module.exports = { getDarajaBaseUrl };`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 12: Request the OAuth token',
    },
    {
      type: 'paragraph',
      text:
        'Create an Axios service that sends the Consumer Key and Consumer Secret as HTTP Basic Authentication. The grant_type query parameter tells Daraja that this is a client-credentials request. The service returns only the access token and leaves token caching for a later improvement.',
    },
    {
      type: 'code',
      filename: 'src/services/daraja-auth.js',
      language: 'javascript',
      code: `const axios = require('axios');
const { getDarajaBaseUrl } = require('../config/daraja');

async function getAccessToken() {
  const consumerKey = process.env.DARAJA_CONSUMER_KEY;
  const consumerSecret = process.env.DARAJA_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) {
    throw new Error('Daraja consumer credentials are not configured');
  }

  try {
    const response = await axios.get(
      \`\${getDarajaBaseUrl()}/oauth/v1/generate\`,
      {
        params: { grant_type: 'client_credentials' },
        auth: {
          username: consumerKey,
          password: consumerSecret,
        },
        timeout: 15000,
      }
    );

    if (!response.data.access_token) {
      throw new Error('Daraja did not return an access token');
    }

    return response.data.access_token;
  } catch (error) {
    const message = error.response?.data?.errorMessage || error.message;
    throw new Error(\`Daraja OAuth request failed: \${message}\`);
  }
}

module.exports = { getAccessToken };`,
    },
    {
      type: 'paragraph',
      text:
        'Run this service only from your backend. A browser or mobile client must never receive the Consumer Secret. The OAuth response commonly contains an access_token and an expires_in value; the exact response should be checked against the current Daraja documentation for your environment.',
    },
    {
      type: 'code',
      filename: 'Terminal',
      language: 'powershell',
      code: `node -e "require('dotenv').config(); require('./src/services/daraja-auth').getAccessToken().then(token => console.log(token ? 'OAuth token received' : 'No token')).catch(error => { console.error(error.message); process.exitCode = 1; })"`,
    },
    {
      type: 'callout',
      title: 'Do not log the token',
      text:
        'The command above prints only a success message. Do not log the access token in normal application logs, send it to the frontend, or commit it to a file. If OAuth fails, inspect the HTTP status and Daraja error message without exposing credentials.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 4: Generate the STK Push password and timestamp',
    },
    {
      type: 'paragraph',
      text:
        'An STK Push request needs two values that change for every request: a timestamp and a Base64 password. The password is generated by concatenating the Business Shortcode, the Passkey, and the timestamp in that order. The passkey is never sent as a plain value in the request body.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 5: Build the request security values',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 13: Create the timestamp and password utility',
    },
    {
      type: 'code',
      filename: 'src/utils/stk-password.js',
      language: 'javascript',
      code: `function getDarajaTimestamp(date = new Date()) {
  // Daraja expects timestamps in East Africa Time (Africa/Nairobi, UTC+3).
  // Using the server's local clock can produce an invalid password when the
  // server is not in the Nairobi timezone.
  const nairobiDate = new Date(
    date.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })
  );

  const parts = [
    nairobiDate.getFullYear(),
    nairobiDate.getMonth() + 1,
    nairobiDate.getDate(),
    nairobiDate.getHours(),
    nairobiDate.getMinutes(),
    nairobiDate.getSeconds(),
  ];

  return parts
    .map((part) => String(part).padStart(2, '0'))
    .join('');
}

function createStkPassword(shortcode, passkey, timestamp) {
  if (!shortcode || !passkey || !timestamp) {
    throw new Error('Shortcode, passkey, and timestamp are required');
  }

  return Buffer.from(\`\${shortcode}\${passkey}\${timestamp}\`).toString('base64');
}

module.exports = { getDarajaTimestamp, createStkPassword };`,
    },
    {
      type: 'paragraph',
      text:
        'The timestamp format is YYYYMMDDHHmmss using the server’s local clock. In production, synchronize the server clock with a reliable time source. A clock that is significantly wrong can produce a password that Daraja rejects.',
    },
    {
      type: 'code',
      filename: 'Terminal',
      language: 'powershell',
      code: `node -e "const u = require('./src/utils/stk-password'); const t = u.getDarajaTimestamp(); console.log({ timestamp: t, password: u.createStkPassword('174379', 'SANDBOX_PASSKEY', t) })"`,
    },
    {
      type: 'callout',
      title: 'Use placeholders only',
      text:
        'The command uses the documented sandbox shortcode format and a placeholder passkey for demonstration. Replace it only in your private environment or application configuration. Never publish a real passkey or generated password.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 5: Implement STK Push with Express',
    },
    {
      type: 'paragraph',
      text:
        'We now have the three ingredients needed to submit an STK Push request: an OAuth access token, a timestamp, and a Base64 password. The next service validates the input, formats the Daraja payload, and returns Daraja’s initiation response. It does not process the payment callback yet; that belongs to a later chapter.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 6: Send the STK Push request',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 14: Normalize and validate the customer phone number',
    },
    {
      type: 'paragraph',
      text:
        'Daraja examples use the international Kenyan format beginning with 254. The helper below accepts 07XXXXXXXX, 01XXXXXXXX, or an already normalized 254XXXXXXXXX number and rejects other input before making an external request.',
    },
    {
      type: 'code',
      filename: 'src/utils/phone-number.js',
      language: 'javascript',
      code: `function normalizeKenyanPhoneNumber(value) {
  const input = String(value || '').replace(/[\\s-]/g, '');
  let normalized = input;

  if (/^07\\d{8}$/.test(input) || /^01\\d{8}$/.test(input)) {
    normalized = \`254\${input.slice(1)}\`;
  }

  if (!/^254\\d{9}$/.test(normalized)) {
    throw new Error('PhoneNumber must be a valid Kenyan number');
  }

  return normalized;
}

module.exports = { normalizeKenyanPhoneNumber };`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 15: Create the STK Push service',
    },
    {
      type: 'code',
      filename: 'src/services/stk-push.js',
      language: 'javascript',
      code: `const axios = require('axios');
const { getDarajaBaseUrl } = require('../config/daraja');
const { getAccessToken } = require('./daraja-auth');
const { getDarajaTimestamp, createStkPassword } = require('../utils/stk-password');
const { normalizeKenyanPhoneNumber } = require('../utils/phone-number');

async function initiateStkPush({ amount, phoneNumber, accountReference, description }) {
  const shortcode = process.env.DARAJA_SHORTCODE;
  const passkey = process.env.DARAJA_PASSKEY;
  const callbackUrl = process.env.DARAJA_CALLBACK_URL;

  if (!shortcode || !passkey || !callbackUrl) {
    throw new Error('Daraja shortcode, passkey, and callback URL are required');
  }

  if (!Number.isInteger(Number(amount)) || Number(amount) <= 0) {
    throw new Error('Amount must be a positive whole number');
  }

  if (!accountReference || !description) {
    throw new Error('Account reference and description are required');
  }

  const timestamp = getDarajaTimestamp();
  const normalizedPhone = normalizeKenyanPhoneNumber(phoneNumber);
  const accessToken = await getAccessToken();

  const payload = {
    BusinessShortCode: shortcode,
    Password: createStkPassword(shortcode, passkey, timestamp),
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: Number(amount),
    PartyA: normalizedPhone,
    PartyB: shortcode,
    PhoneNumber: normalizedPhone,
    CallBackURL: callbackUrl,
    AccountReference: String(accountReference).slice(0, 12),
    TransactionDesc: String(description).slice(0, 13),
  };

  try {
    const response = await axios.post(
      \`\${getDarajaBaseUrl()}/mpesa/stkpush/v1/processrequest\`,
      payload,
      {
        headers: {
          Authorization: \`Bearer \${accessToken}\`,
          'Content-Type': 'application/json',
        },
        timeout: 15000,
      }
    );

    return response.data;
  } catch (error) {
    const message = error.response?.data?.errorMessage || error.message;
    throw new Error(\`STK Push request failed: \${message}\`);
  }
}

module.exports = { initiateStkPush };`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 16: Expose the service through an Express route',
    },
    {
      type: 'code',
      filename: 'src/routes/mpesa.js',
      language: 'javascript',
      code: `const express = require('express');
const { initiateStkPush } = require('../services/stk-push');

const router = express.Router();

function isClientError(error) {
  const clientMessages = [
    'is required',
    'must be a',
    'valid Kenyan',
    'Shortcode, passkey, and callback URL are required',
  ];
  return clientMessages.some((message) => error.message.includes(message));
}

router.post('/stk-push', async (req, res) => {
  try {
    const result = await initiateStkPush(req.body);

    res.status(202).json({
      message: 'STK Push request accepted',
      data: result,
    });
  } catch (error) {
    console.error('STK Push initiation error:', error.message);

    if (isClientError(error)) {
      return res.status(400).json({ message: error.message });
    }

    // Provider or upstream failure (Daraja auth, network, timeout, etc.)
    return res.status(502).json({
      message: 'Payment provider error. Please try again later.',
    });
  }
});

module.exports = router;`,
    },
    {
      type: 'code',
      filename: 'src/server.js',
      language: 'javascript',
      code: `require('dotenv').config();

const express = require('express');
const { connectToDatabase } = require('./config/database');
const mpesaRouter = require('./routes/mpesa');

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());
app.use('/api/mpesa', mpesaRouter);

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => console.log(\`API listening on port \${port}\`));
  } catch (error) {
    console.error('Application startup failed:', error.message);
    process.exitCode = 1;
  }
}

startServer();`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 17: Test the initiation request',
    },
    {
      type: 'code',
      filename: 'Terminal',
      language: 'powershell',
      code: `curl -X POST http://localhost:3000/api/mpesa/stk-push -H "Content-Type: application/json" -d '{"amount":1,"phoneNumber":"0712345678","accountReference":"Order101","description":"Test payment"}'`,
    },
    {
      type: 'paragraph',
      text:
        'A successful initiation response normally contains a response code, a checkout request identifier, a customer message, and a merchant request identifier. The exact field values depend on the environment and current API response. Store the identifiers when the transaction model is added, but do not mark the order as paid from this response.',
    },
    {
      type: 'code',
      filename: 'Expected initiation response shape',
      language: 'json',
      code: `{
  "MerchantRequestID": "request-id-from-daraja",
  "CheckoutRequestID": "checkout-id-from-daraja",
  "ResponseCode": "0",
  "ResponseDescription": "Success. Request accepted for processing",
  "CustomerMessage": "Success. Request accepted for processing"
}`,
    },
    {
      type: 'callout',
      title: 'Accepted is not paid',
      text:
        'ResponseCode 0 means that Daraja accepted the STK Push initiation request. It does not prove that the customer completed the payment. The callback result, and later verification or reconciliation where needed, determine the final transaction status.',
    },
    {
      type: 'paragraph',
      text:
        'This request has not been tested against an external Daraja sandbox from this article build. Before using it with real customers, configure valid sandbox credentials, use the current official Daraja documentation, expose a reachable HTTPS callback URL, and test the complete callback flow in the sandbox.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 6: Configure the callback URL',
    },
    {
      type: 'paragraph',
      text:
        'An STK Push is asynchronous. Daraja accepts the initiation request first, then sends the customer result to the callback URL in DARAJA_CALLBACK_URL. This endpoint must belong to your server, accept JSON, and be reachable from outside your development machine. Localhost is not reachable by Safaricom; use a controlled HTTPS development tunnel for local testing and a real HTTPS domain in production.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 7: Receive STK Push callbacks',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 18: Add a callback route',
    },
    {
      type: 'paragraph',
      text:
        'Add a separate callback route to the same Express router used by the initiation endpoint. The handler responds quickly with HTTP 200 after checking that the expected STK callback object exists. The callback is persisted idempotently; the transaction service used below is defined in Chapter 9.',
    },
    {
      type: 'code',
      filename: 'src/routes/mpesa.js',
      language: 'javascript',
      code: `const express = require('express');
const { initiateStkPush } = require('../services/stk-push');
const { createPendingTransaction, saveStkCallback } = require('../services/transaction-service');

const router = express.Router();

function isClientError(error) {
  const clientMessages = [
    'is required',
    'must be a',
    'valid Kenyan',
    'Shortcode, passkey, and callback URL are required',
  ];
  return clientMessages.some((message) => error.message.includes(message));
}

router.post('/stk-push', async (req, res) => {
  try {
    const result = await initiateStkPush(req.body);

    // Create the pending transaction record before responding so the
    // callback (which may arrive immediately) finds a document to update.
    await createPendingTransaction({
      checkoutRequestId: result.CheckoutRequestID,
      merchantRequestId: result.MerchantRequestID,
      amount: Number(req.body.amount),
      phoneNumber: req.body.phoneNumber,
      accountReference: req.body.accountReference,
    });

    res.status(202).json({
      message: 'STK Push request accepted',
      data: result,
    });
  } catch (error) {
    console.error('STK Push initiation error:', error.message);

    if (isClientError(error)) {
      return res.status(400).json({ message: error.message });
    }

    // Provider or upstream failure (Daraja auth, network, timeout, etc.)
    return res.status(502).json({
      message: 'Payment provider error. Please try again later.',
    });
  }
});

router.post('/callback', async (req, res) => {
  const callback = req.body?.Body?.stkCallback;

  if (!callback) {
    console.error('Invalid STK callback payload');
    return res.status(400).json({ message: 'Invalid STK callback payload' });
  }

  try {
    // Durably persist before acknowledging. upsert: true acts as a safety
    // net if the callback arrives before the pending transaction record.
    await saveStkCallback(req.body);
    return res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' });
  } catch (error) {
    console.error('STK callback persistence error:', error.message);
    // Acknowledge to stop Daraja retries, but log the failure for inspection.
    return res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' });
  }
});

module.exports = router;`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 19: Understand successful and failed callbacks',
    },
    {
      type: 'paragraph',
      text:
        'Read the callback from Body.stkCallback. A ResultCode of 0 indicates a successful customer transaction. A non-zero ResultCode indicates a failure, cancellation, timeout, or another unsuccessful result. Do not treat the presence of CallbackMetadata alone as proof of payment; check the result code and later persist the identifiers and receipt details.',
    },
    {
      type: 'code',
      filename: 'Successful STK callback shape',
      language: 'json',
      code: `{
  "Body": {
    "stkCallback": {
      "MerchantRequestID": "merchant-request-id",
      "CheckoutRequestID": "checkout-request-id",
      "ResultCode": 0,
      "ResultDesc": "The service request is processed successfully.",
      "CallbackMetadata": {
        "Item": [
          { "Name": "Amount", "Value": 1 },
          { "Name": "MpesaReceiptNumber", "Value": "receipt-number" },
          { "Name": "TransactionDate", "Value": 20261104094500 },
          { "Name": "PhoneNumber", "Value": 254712345678 }
        ]
      }
    }
  }
}`,
    },
    {
      type: 'code',
      filename: 'Failed STK callback shape',
      language: 'json',
      code: `{
  "Body": {
    "stkCallback": {
      "MerchantRequestID": "merchant-request-id",
      "CheckoutRequestID": "checkout-request-id",
      "ResultCode": 1032,
      "ResultDesc": "Request cancelled by user"
    }
  }
}`,
    },
    {
      type: 'callout',
      title: 'Acknowledge, then process safely',
      text:
        'The callback endpoint should respond quickly so Daraja does not wait for database work or slow downstream services. First validate the shape and acknowledge the request; then persist and process it with idempotency in the transaction layer. Never charge or fulfil an order merely because the initiation endpoint returned ResponseCode 0.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 20: Test the callback locally',
    },
    {
      type: 'paragraph',
      text:
        'Before connecting a real sandbox callback, post a representative payload to your local route. This tests your JSON parser and result-code handling without claiming that Safaricom sent the request.',
    },
    {
      type: 'code',
      filename: 'Terminal',
      language: 'powershell',
      code: `curl -X POST http://localhost:3000/api/mpesa/callback -H "Content-Type: application/json" -d '{"Body":{"stkCallback":{"MerchantRequestID":"local-test","CheckoutRequestID":"local-checkout","ResultCode":0,"ResultDesc":"Local test"}}}'`,
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 7: Handle callbacks without false payment success',
    },
    {
      type: 'paragraph',
      text:
        'The callback is the first place where the application can evaluate the customer’s final STK result. Keep the two stages separate: initiation tells you that Daraja accepted a request, while the callback tells you what happened to that request. A later verification step is still useful for uncertain or delayed transactions.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 8: Extract callback metadata safely',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 21: Add a metadata helper',
    },
    {
      type: 'paragraph',
      text:
        'Successful callbacks contain an Item array whose fields can vary by product and response. Use a name-based lookup instead of assuming that every item is present or always at the same index.',
    },
    {
      type: 'code',
      filename: 'src/utils/callback-metadata.js',
      language: 'javascript',
      code: `function getCallbackMetadata(items = []) {
  return items.reduce((metadata, item) => {
    if (item?.Name) {
      metadata[item.Name] = item.Value;
    }

    return metadata;
  }, {});
}

function parseStkCallback(payload) {
  const callback = payload?.Body?.stkCallback;

  if (!callback?.CheckoutRequestID || callback.ResultCode === undefined) {
    throw new Error('Incomplete STK callback payload');
  }

  const metadata = getCallbackMetadata(callback.CallbackMetadata?.Item);

  return {
    merchantRequestId: callback.MerchantRequestID,
    checkoutRequestId: callback.CheckoutRequestID,
    resultCode: Number(callback.ResultCode),
    resultDescription: callback.ResultDesc || '',
    successful: Number(callback.ResultCode) === 0,
    amount: metadata.Amount,
    receiptNumber: metadata.MpesaReceiptNumber,
    transactionDate: metadata.TransactionDate,
    phoneNumber: metadata.PhoneNumber,
  };
}

module.exports = { getCallbackMetadata, parseStkCallback };`,
    },
    {
      type: 'paragraph',
      text:
        'Use receiptNumber, amount, phoneNumber, and transactionDate only after the result code confirms success. For failed callbacks, retain the result code and description so the customer-support and reconciliation workflows can explain what happened.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 8: Implement C2B validation and confirmation URLs',
    },
    {
      type: 'paragraph',
      text:
        'C2B is a different flow from STK Push. A customer pays a business shortcode, and Safaricom sends your system a validation request where external validation is enabled, followed by a confirmation notification after processing. C2B requires a suitable business shortcode and the current Daraja product configuration; it is not a replacement for STK Push checkout.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 9: Register the C2B URLs',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 22: Create validation and confirmation handlers',
    },
    {
      type: 'paragraph',
      text:
        'The validation endpoint must respond quickly with the response format required by the current Daraja C2B documentation. The example below accepts the request after basic shape checks. In a real system, validation should also check the account reference and business rules before accepting a payment.',
    },
    {
      type: 'code',
      filename: 'src/routes/c2b.js',
      language: 'javascript',
      code: `const express = require('express');
const Transaction = require('../models/transaction');

const router = express.Router();

router.post('/validation', (req, res) => {
  const { TransAmount, BillRefNumber } = req.body;

  if (!TransAmount || !BillRefNumber) {
    return res.status(400).json({
      ResultCode: 'C2B00011',
      ResultDesc: 'Invalid payment details',
    });
  }

  console.log('C2B validation request received', {
    amount: TransAmount,
    accountReference: BillRefNumber,
  });

  return res.status(200).json({
    ResultCode: 0,
    ResultDesc: 'Accepted',
  });
});

router.post('/confirmation', async (req, res) => {
  const { TransID, TransAmount, BusinessShortCode, BillRefNumber, MSISDN } = req.body;

  if (!TransID) {
    console.error('C2B confirmation missing TransID');
    return res.status(400).json({ ResultCode: 1, ResultDesc: 'Missing transaction ID' });
  }

  try {
    await Transaction.findOneAndUpdate(
      { providerReference: TransID },
      {
        $set: {
          providerReference: TransID,
          amount: Number(TransAmount || 0),
          phoneNumber: MSISDN || '',
          accountReference: BillRefNumber || '',
          merchantRequestId: BusinessShortCode || '',
          status: 'paid',
          resultCode: 0,
          resultDescription: 'C2B confirmation received',
        },
      },
      { new: true, upsert: true, runValidators: true }
    );

    console.log('C2B confirmation received', {
      transactionId: TransID,
      amount: TransAmount,
      shortcode: BusinessShortCode,
      accountReference: BillRefNumber,
      phoneNumber: MSISDN,
    });

    return res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' });
  } catch (error) {
    console.error('C2B confirmation persistence error:', error.message);
    return res.status(200).json({ ResultCode: 0, ResultDesc: 'Accepted' });
  }
});

module.exports = router;`,
    },
    {
      type: 'paragraph',
      text:
        'Mount the C2B router alongside the existing M-Pesa router. Keep validation and confirmation as separate URLs so Safaricom can call the correct stage of the payment flow.',
    },
    {
      type: 'code',
      filename: 'src/server.js',
      language: 'javascript',
      code: `const c2bRouter = require('./routes/c2b');

app.use('/api/c2b', c2bRouter);`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 23: Register the URLs with Daraja',
    },
    {
      type: 'paragraph',
      text:
        'Register the public validation and confirmation URLs using the C2B register URL endpoint. The request uses the same server-side OAuth helper from Chapter 3. Use the sandbox host and sandbox shortcode while testing; switch to production only with the approved live configuration.',
    },
    {
      type: 'code',
      filename: 'src/services/c2b.js',
      language: 'javascript',
      code: `const axios = require('axios');
const { getDarajaBaseUrl } = require('../config/daraja');
const { getAccessToken } = require('./daraja-auth');

async function registerC2bUrls() {
  const shortcode = process.env.DARAJA_SHORTCODE;
  const validationUrl = process.env.DARAJA_VALIDATION_URL;
  const confirmationUrl = process.env.DARAJA_CONFIRMATION_URL;

  if (!shortcode || !validationUrl || !confirmationUrl) {
    throw new Error('C2B shortcode and callback URLs are required');
  }

  const accessToken = await getAccessToken();

  try {
    const response = await axios.post(
      \`\${getDarajaBaseUrl()}/mpesa/c2b/v2/registerurl\`,
      {
        ShortCode: shortcode,
        ResponseType: 'Completed',
        ConfirmationURL: confirmationUrl,
        ValidationURL: validationUrl,
      },
      {
        headers: {
          Authorization: \`Bearer \${accessToken}\`,
          'Content-Type': 'application/json',
        },
        timeout: 15000,
      }
    );

    return response.data;
  } catch (error) {
    const message = error.response?.data?.errorMessage || error.message;
    throw new Error(\`C2B URL registration failed: \${message}\`);
  }
}

module.exports = { registerC2bUrls };`,
    },
    {
      type: 'code',
      filename: '.env.example',
      language: 'dotenv',
      code: `DARAJA_VALIDATION_URL=https://your-domain.example/api/c2b/validation
DARAJA_CONFIRMATION_URL=https://your-domain.example/api/c2b/confirmation`,
    },
    {
      type: 'callout',
      title: 'C2B operational notes',
      text:
        'Validation is a product and account configuration concern; confirm from the current Daraja documentation whether external validation is enabled for your setup. Confirmation processing should be fast and idempotent. Do not treat a received notification as permission to insert duplicate transactions, and do not claim C2B registration succeeded until you have tested it in your configured environment.',
    },
    {
      type: 'link',
      label: 'Official M-Pesa Express API documentation',
      href: 'https://developer.safaricom.co.ke/apis',
      description:
        'Check the current STK Push callback fields, endpoint behavior, and environment-specific requirements.',
    },
    {
      type: 'link',
      label: 'Official Daraja C2B API documentation',
      href: 'https://developer.safaricom.co.ke/apis',
      description:
        'Check the current C2B validation, confirmation, URL registration, and response requirements before production use.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 9: Save transactions in MongoDB',
    },
    {
      type: 'paragraph',
      text:
        'The callback is the source of the payment result, but it is not a database. Store every initiation and callback with a stable provider identifier so you can display status, prevent duplicate fulfilment, and investigate disputes.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 10: Create a transaction model',
    },
    {
      type: 'code',
      filename: 'src/models/transaction.js',
      language: 'javascript',
      code: `const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    checkoutRequestId: { type: String, unique: true, sparse: true },
    providerReference: { type: String, unique: true, sparse: true },
    merchantRequestId: String,
    amount: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    accountReference: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'unknown'],
      default: 'pending',
    },
    resultCode: Number,
    resultDescription: String,
    receiptNumber: String,
    transactionDate: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);`,
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 24: Save callback results idempotently',
    },
    {
      type: 'paragraph',
      text:
        'Create a pending record before responding to the STK initiation request, then use CheckoutRequestID as the idempotency key for callbacks. A repeated callback should update the existing transaction, not create a second payment. upsert: true is a safety net in case the callback arrives before the pending record exists. The callback handler awaits persistence before acknowledging so the result is durable.',
    },
    {
      type: 'code',
      filename: 'src/services/transaction-service.js',
      language: 'javascript',
      code: `const Transaction = require('../models/transaction');
const { parseStkCallback } = require('../utils/callback-metadata');

async function createPendingTransaction({ checkoutRequestId, merchantRequestId, amount, phoneNumber, accountReference }) {
  return Transaction.create({
    checkoutRequestId,
    merchantRequestId,
    amount,
    phoneNumber,
    accountReference,
    status: 'pending',
  });
}

async function saveStkCallback(payload) {
  const payment = parseStkCallback(payload);

  return Transaction.findOneAndUpdate(
    { checkoutRequestId: payment.checkoutRequestId },
    {
      $set: {
        merchantRequestId: payment.merchantRequestId,
        resultCode: payment.resultCode,
        resultDescription: payment.resultDescription,
        status: payment.successful ? 'paid' : 'failed',
        amount: payment.amount,
        receiptNumber: payment.receiptNumber,
        transactionDate: payment.transactionDate,
        phoneNumber: payment.phoneNumber,
      },
    },
    { new: true, upsert: true, runValidators: true }
  );
}

module.exports = { createPendingTransaction, saveStkCallback };`,
    },
    {
      type: 'callout',
      title: 'Fulfil only once',
      text:
        'Use the paid transition as the trigger for fulfilment, and make fulfilment idempotent too. A payment callback can be retried, delayed, or received more than once.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 10: Verify status and reconcile payments',
    },
    {
      type: 'paragraph',
      text:
        'Callbacks are normally sufficient for the first result, but networks fail and customers may close a prompt before your server receives the notification. Keep pending or unknown transactions and reconcile them with the current Daraja transaction-status API and your own records.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 11: Query an uncertain transaction',
    },
    {
      type: 'code',
      filename: 'src/services/transaction-status.js',
      language: 'javascript',
      code: `const axios = require('axios');
const { getDarajaBaseUrl } = require('../config/daraja');
const { getAccessToken } = require('./daraja-auth');

async function queryTransactionStatus({ transactionId, shortcode, identifierType = 1 }) {
  const accessToken = await getAccessToken();
  const response = await axios.post(
    \`\${getDarajaBaseUrl()}/mpesa/transactionstatus/v1/query\`,
    {
      Initiator: process.env.DARAJA_INITIATOR_NAME,
      SecurityCredential: process.env.DARAJA_SECURITY_CREDENTIAL,
      CommandID: 'TransactionStatusQuery',
      TransactionID: transactionId,
      PartyA: shortcode,
      IdentifierType: identifierType,
      ResultURL: process.env.DARAJA_RESULT_URL,
      QueueTimeOutURL: process.env.DARAJA_TIMEOUT_URL,
      Remarks: 'Payment reconciliation',
      Occasion: 'Payment status check',
    },
    {
      headers: { Authorization: \`Bearer \${accessToken}\` },
      timeout: 15000,
    }
  );

  return response.data;
}

module.exports = { queryTransactionStatus };`,
    },
    {
      type: 'paragraph',
      text:
        'The transaction-status product requires additional production credentials: DARAJA_INITIATOR_NAME (the initiator name registered with Daraja), DARAJA_SECURITY_CREDENTIAL (the encrypted security credential obtained from the Daraja developer portal), DARAJA_RESULT_URL (the endpoint where Daraja posts the query result), and DARAJA_TIMEOUT_URL (the endpoint for timed-out queries). Confirm the current official requirements before enabling it; never invent SecurityCredential values. Reconciliation should compare the provider result with your order, amount, shortcode, and stored identifiers before marking an order paid. Do not treat a successful query response alone as proof of payment; check the transaction result code.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 25: Use a reconciliation policy',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Keep pending transactions',
          text: 'Do not delete an unanswered payment. Record when it was initiated and retry status checks with a bounded schedule.',
        },
        {
          title: 'Match identifiers and amount',
          text: 'Compare the checkout or receipt identifier, expected amount, shortcode, and customer reference before fulfilment.',
        },
        {
          title: 'Resolve uncertainty explicitly',
          text: 'Use pending, paid, failed, and unknown states instead of treating a timeout as a successful payment.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 11: Secure the integration',
    },
    {
      type: 'paragraph',
      text:
        'Payment endpoints are high-value targets. Validate all client input, keep Daraja secrets server-side, use HTTPS for public callbacks, redact tokens and passkeys from logs, and restrict administrative routes. Never trust a client-submitted paid flag or amount.',
    },
    {
      type: 'table',
      headers: ['Risk', 'Protection'],
      rows: [
        ['Credential leakage', 'Use .env or a secret manager, never source control or frontend code.'],
        ['Fake payment callbacks', 'Use HTTPS, validate payloads, match identifiers, and reconcile uncertain records.'],
        ['Duplicate fulfilment', 'Use unique provider IDs and idempotent updates.'],
        ['Amount tampering', 'Load the amount from the server-side order, not directly from the browser.'],
        ['Sensitive logs', 'Redact access tokens, passkeys, full payloads, and customer data.'],
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 12: Troubleshoot common problems',
    },
    {
      type: 'table',
      headers: ['Symptom', 'First checks'],
      rows: [
        ['401 or invalid token', 'Confirm environment, Consumer Key, Consumer Secret, Basic Auth, and server time.'],
        ['Invalid password', 'Recheck shortcode, passkey, timestamp format, and Base64 concatenation order.'],
        ['Callback never arrives', 'Confirm the URL is public, reachable, correctly configured, and accepts POST JSON.'],
        ['Customer receives no prompt', 'Check phone format, amount, shortcode, sandbox configuration, and Daraja response details.'],
        ['Duplicate payment records', 'Use CheckoutRequestID or TransID as a unique key and make updates idempotent.'],
        ['MongoDB connection fails', 'Check MONGODB_URI, the local service, Atlas network access, and database credentials.'],
      ],
    },
    {
      type: 'paragraph',
      text:
        'Log correlation IDs and response codes, not secrets. When an error remains unclear, compare your request with the current official Daraja example for the exact product and environment instead of copying a sample credential or endpoint from an old tutorial.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What You Need to Go Live: Production Requirements',
    },
    {
      type: 'paragraph',
      text:
        'A sandbox developer account gives you test credentials for learning, but it does not automatically provide access to process real customer payments. Moving to production requires production credentials issued through the Daraja Go Live process, plus an eligible Safaricom business payment service. The cards below list each production requirement, what it is, where to obtain it, and what it is used for. Sandbox credentials must never be reused in production.',
    },
    {
      type: 'cards',
      columns: 3,
      items: [
        {
          title: 'Consumer Key',
          text:
            'What it is: Your production OAuth client identifier, issued by Daraja for your live application. Where to obtain it: The production Daraja application dashboard after your app is approved for live access. What it is used for: Identifies your application when your backend requests a production OAuth access token for Daraja API calls.',
        },
        {
          title: 'Consumer Secret',
          text:
            'What it is: Your production OAuth client secret, paired with the Consumer Key. Where to obtain it: The production Daraja application dashboard (typically shown only once when the credential is created). What it is used for: Authenticates your application together with the Consumer Key. Keep it server-side only and never expose it to the frontend.',
        },
        {
          title: 'Business Shortcode',
          text:
            'What it is: The eligible Paybill or Buy Goods Till number linked to your business. Where to obtain it: Safaricom business registration or your M-Pesa business service provisioning. What it is used for: Identifies the business receiving the payment in STK Push and C2B requests sent to Daraja.',
        },
        {
          title: 'Lipa Na M-Pesa Online Passkey',
          text:
            'What it is: The STK Push encryption passkey provided by Safaricom for live transactions. Where to obtain it: The Daraja production application or Safaricom business support for your approved M-Pesa Express product. What it is used for: Combined with the shortcode and timestamp to generate the Base64 STK Push password that authorizes each payment request.',
        },
        {
          title: 'Production API Access',
          text:
            'What it is: Live access to Daraja production endpoints, obtained through the Daraja Go Live application and review process. Where to obtain it: The official Safaricom Daraja developer portal, by submitting a Go Live request for your approved business service. What it is used for: Allows your integration to process real customer payments instead of sandbox test transactions.',
        },
        {
          title: 'Public HTTPS Callback URL',
          text:
            'What it is: A publicly reachable HTTPS endpoint hosted on your own server or hosting platform. Where to obtain it: You create and host it yourself; it is not issued by Safaricom. What it is used for: Receives STK Push and C2B payment result callbacks from Safaricom so your application can record the final transaction outcome.',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Security warning',
      text:
        'Never expose the Consumer Secret, passkey, or access tokens in frontend code, browser logs, or support requests. Never commit .env files or credentials to GitHub. Store secrets in environment variables or a secret manager on your server, and rotate any credential that is accidentally published.',
    },
    {
      type: 'paragraph',
      text:
        'The Go Live process is how you move from sandbox testing to real payments. In the official Daraja developer portal you create applications, view sandbox credentials, and access current API documentation. Production access is separate: you must submit a Go Live application for your approved Safaricom business service (such as Lipa Na M-Pesa Online / M-Pesa Express), and Safaricom reviews it before issuing live credentials. A developer app alone does not provide live payment access.',
    },
    {
      type: 'link',
      label: 'Open the official Safaricom Daraja developer portal',
      href: 'https://developer.safaricom.co.ke/',
      description:
        'Use the official portal to create applications, review current API documentation, obtain sandbox credentials, and submit a Go Live request for production access.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Chapter 13: Test in sandbox and prepare for production',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Part 12: Use a controlled release checklist',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Test sandbox success and failure',
          text: 'Test accepted initiation, customer cancellation, timeout, invalid input, callback retries, and database failures.',
        },
        {
          title: 'Verify observability',
          text: 'Confirm that every transaction has a correlation ID, status, timestamps, provider identifiers, and redacted logs.',
        },
        {
          title: 'Separate production configuration',
          text: 'Use production credentials, shortcode, passkey, callback URLs, and approved Daraja products only after go-live approval.',
        },
        {
          title: 'Run a small live test',
          text: 'After approval, use a controlled amount and verify the callback, receipt, database record, and reconciliation result before wider release.',
        },
      ],
    },
    {
      type: 'callout',
      title: 'Final reminder',
      text:
        'Sandbox testing is not production approval, and an STK Push initiation response is not a payment receipt. Move to production only with the correct Safaricom business service, live credentials, approved callback configuration, monitoring, and a tested reconciliation process.',
    },
    {
      type: 'link',
      label: 'MongoDB documentation',
      href: 'https://www.mongodb.com/docs/',
      description:
        'Use the official MongoDB documentation for indexes, transactions, connection security, and deployment operations.',
    },
    {
      type: 'lipa-promo',
      heading: 'Running a business? We\'ve got your payments covered.',
      description:
        'If you would rather not build and maintain your own payment system, Lipa is a ready-made D-LABS solution for accepting M-Pesa payments — collect payments with STK Push, track every transaction in real time, and generate receipts for successful payments. The integration work in this guide, already done for you.',
      features: [
        'M-Pesa collection with STK Push',
        'Real-time transaction tracking',
        'Digital receipts for successful payments',
      ],
    },
  ],
};

export const articleMpesaTillPaybill: Article = {
  slug: 'apply-mpesa-till-paybill-online-kenya',
  title: 'How to Apply for an M-PESA Till or Paybill Number Online in Kenya (2026)',
  subtitle: 'A complete step-by-step guide to getting your M-PESA Business Till or Paybill through the Safaricom Business Hub',
  description:
    'Learn how to apply for an M-PESA Till or Paybill number online in Kenya. Covers requirements, the difference between a Till and Paybill, the M-PESA Business Hub application process, settlement options and FAQs in this complete 2026 guide.',
  date: '5 November 2026',
  updatedAt: '5 November 2026',
  readTime: '8 min read',
  category: 'Business & Payments',
  image: articleMpesaTillPaybillImage,
  tags: ['M-Pesa', 'M-PESA Till', 'Paybill', 'Safaricom Business Hub', 'Kenya', 'Business Payments', 'Lipa na M-PESA', 'Buy Goods'],
  blocks: [
    {
      type: 'paragraph',
      text:
        'Accepting M-PESA payments can make it easier for customers to pay for goods and services without carrying cash. Whether you operate a retail shop, restaurant, salon, school, or service business, having a dedicated M-PESA payment option can improve how payments are received and managed.',
    },
    {
      type: 'paragraph',
      text:
        'Safaricom provides an online application process through its M-PESA Business Hub, where eligible individuals and businesses can apply for a Till (Buy Goods) or Paybill number. This guide walks you through the differences between the two products, the requirements for each business category, the step-by-step application process, and what happens after approval.',
    },
    {
      type: 'paragraph',
      text:
        'For businesses looking to take payments further or build custom payment integrations, D-LABS also provides technical resources such as our guide on M-Pesa Daraja API integration with Node.js, Express and MongoDB.',
    },
    {
      type: 'link',
      label: 'Read the M-Pesa Daraja API guide',
      href: '/blog/mpesa-daraja-api-nodejs-express-mongodb',
      description: 'A complete step-by-step guide to integrating Safaricom M-PESA payments in your Node.js application',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Understanding the Difference Between a Till and Paybill',
    },
    {
      type: 'paragraph',
      text:
        'Choosing the right product depends on how your customers pay you and whether you need to identify individual payments. Here is a clear comparison.',
    },
    {
      type: 'cards',
      columns: 2,
      items: [
        {
          title: 'M-PESA Buy Goods / Business Till',
          text:
            'Suitable for businesses receiving payments directly from customers for goods or services at a point of sale. Customers pay by entering only the Till number—no account number is needed. Common examples: retail shops, supermarkets, restaurants, hotels, salons, barbershops, hardware stores, and small service providers.',
        },
        {
          title: 'M-PESA Paybill',
          text:
            'Suitable for businesses and organizations that need to identify individual payments using customer account numbers. Customers enter the Business Number and, where required, their account number. Common examples: schools collecting fees, landlords collecting rent, utility companies, subscription businesses, and organizations receiving regular identified payments.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Feature', 'Business Till (Buy Goods)', 'Paybill'],
      rows: [
        ['Customer enters', 'Till number only', 'Business Number + Account Number (if required)'],
        ['Best for', 'Point-of-sale, walk-in payments', 'Identified recurring or individual payments'],
        ['Typical users', 'Retail, hospitality, salons, services', 'Schools, landlords, utilities, subscriptions'],
        ['Payment identification', 'By Till number and transaction time', 'By account number per payer'],
      ],
    },
    {
      type: 'callout',
      title: 'Which one should you choose?',
      text:
        'Choose a Till if your customers mainly pay at your business location or point of sale. Choose a Paybill if you need to match each payment to a specific customer account (e.g., student ID, tenant unit, invoice number).',
    },
    {
      type: 'heading',
      level: 2,
      text: 'What You Need Before Applying',
    },
    {
      type: 'paragraph',
      text:
        'Requirements depend on your business registration category and the product you select. Organize your documents into the three categories below. Note: these are general preparation guides, not a complete checklist for every applicant. Safaricom may request additional documents depending on the business category, product, and settlement arrangement. Always follow the requirements displayed during your application.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'A. Individual Applicants',
    },
    {
      type: 'paragraph',
      text:
        'Individual applicants may be asked to provide the following, depending on product eligibility:',
    },
    {
      type: 'list',
      items: [
        'National ID or passport',
        'Personal KRA PIN certificate (where required)',
        'Nominated Safaricom mobile number',
        'Additional supporting information where applicable',
      ],
    },
    {
      type: 'callout',
      title: 'Important Note for Individual (Personal) Till Applicants',
      text:
        'Safaricom\'s published requirements specifically list the Individual category for the Buy Goods (Till) product. Individual applicants should confirm which products are available to them through the official application portal. A Personal/Individual Till application should not automatically be treated as equivalent to a registered business application. The displayed Till or business name may depend on the application category and Safaricom\'s verification requirements. Individuals who want to use a registered business or trading name should check whether applying under the Sole Proprietorship category is more appropriate. Custom business-name requirements must be confirmed with Safaricom before applying. Do not assume every individual automatically qualifies for Paybill or every type of Till.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'B. Sole Proprietorship',
    },
    {
      type: 'paragraph',
      text:
        'A registered sole proprietor may need:',
    },
    {
      type: 'list',
      items: [
        'Business registration certificate or relevant business permit (depending on the application)',
        'Owner\'s National ID or passport',
        'Contact person\'s identification documents (where applicable)',
        'Personal KRA PIN certificate (where required)',
        'Bank details if applying for bank settlement',
      ],
    },
    {
      type: 'callout',
      title: 'Practical Note',
      text:
        'Ensure the business name and owner details match the submitted documents exactly. Requirements may vary depending on the selected product and settlement arrangement.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'C. Limited Liability Company',
    },
    {
      type: 'paragraph',
      text:
        'Companies may need:',
    },
    {
      type: 'list',
      items: [
        'Certificate of Incorporation',
        'Company KRA PIN certificate',
        'Directors\' and shareholders\' identification documents',
        'Directors\' KRA PIN certificates (where applicable)',
        'Current CR12 or other accepted company ownership records',
        'M-PESA authorization documents',
        'Relevant bank details where required',
      ],
    },
    {
      type: 'callout',
      title: 'Practical Note',
      text:
        'The person submitting the application should have the necessary authority to represent the company. Safaricom may request additional authorization or ownership documents.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'How to Apply for an M-PESA Till or Paybill Online',
    },
    {
      type: 'steps',
      items: [
        {
          title: 'Step 1: Open the M-PESA Business Hub',
          text:
            'Go to the official portal: https://hub.m-pesaforbusiness.co.ke/ This is Safaricom\'s platform for accessing business payment services and submitting new applications.',
        },
        {
          title: 'Step 2: Create an Account or Log In',
          text:
            'New users: select the account creation option, enter your first name, last name, email address, and phone number, then follow the registration instructions to complete setup and log in. Existing users can log in with their credentials.',
        },
        {
          title: 'Step 3: Start a New Application',
          text:
            'Navigate to the application section and select the option to apply for a Till or Paybill.',
        },
        {
          title: 'Step 4: Select Your Business Category',
          text:
            'Choose the category that matches your actual business structure (Individual, Sole Proprietorship, Limited Liability Company, etc.). This determines the documents and information you will be asked to provide.',
        },
        {
          title: 'Step 5: Select Your Preferred Payment Product',
          text:
            'Where eligible, you may see options for M-PESA Buy Goods / Business Till, M-PESA Paybill, or Short-Term Paybill. Review the product descriptions and eligibility before selecting.',
        },
        {
          title: 'Step 6: Enter Your Business Details',
          text:
            'The form may request your registered business name, business location, owner or authorized contact details, nominated Safaricom phone number, and settlement information (where required).',
        },
        {
          title: 'Step 7: Upload Your Supporting Documents',
          text:
            'Upload each requested document. Tips: use clear, readable documents; avoid blurry or incomplete photographs; upload the correct document in each section; ensure names and identification details are consistent across all documents.',
        },
        {
          title: 'Step 8: Review and Submit Your Application',
          text:
            'Before submitting, verify: business details, selected product, nominated phone number, supporting documents, and accuracy of all information.',
        },
        {
          title: 'Step 9: Track Your Application',
          text:
            'Navigate to "My Applications" in the Business Hub to monitor progress. Statuses you may see: Pending (awaiting processing or review), Rejected (check the reason provided), Approved (passed the relevant approval stage), Complete (process finished; service details or next steps should be available). Processing times vary—do not rely on a fixed approval period. Follow the instructions displayed in your account.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Important Things to Know After Approval',
    },
    {
      type: 'heading',
      level: 3,
      text: 'For a Business Till',
    },
    {
      type: 'paragraph',
      text:
        'Safaricom provides activation instructions through supported channels. The official activation route may include *234*2# (verify current instructions before proceeding). The M-PESA Business App may also be relevant. Follow the instructions associated with your approved application.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'For Paybill',
    },
    {
      type: 'paragraph',
      text:
        'The assigned Business Number and account access arrangements are important for managing payments. Follow the settlement and account-management instructions provided by Safaricom.',
    },
    {
      type: 'callout',
      title: 'Security Reminder',
      text:
        'Keep operator details and PINs secure. Never share PINs or confidential account credentials with unauthorized people.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Mistakes to Avoid When Applying',
    },
    {
      type: 'list',
      items: [
        'Selecting the wrong business category — choose the category that matches your legal structure.',
        'Entering details that do not match official documents — ensure consistency across ID, registration certificates, and KRA PIN.',
        'Uploading unclear or incomplete documents — use sharp, well-lit photos or scans; include all pages.',
        'Providing an incorrect nominated phone number — double-check the Safaricom number that will receive activation and transaction notifications.',
        'Leaving required fields incomplete — review every section before submitting.',
        'Applying for a product that does not match your business use — Till for point-of-sale, Paybill for identified payments.',
      ],
    },
    {
      type: 'heading',
      level: 2,
      text: 'Where Can You Apply?',
    },
    {
      type: 'paragraph',
      text:
        'Use Safaricom\'s official platform and follow the latest requirements displayed there.',
    },
    {
      type: 'link',
      label: 'M-PESA Business Hub',
      href: 'https://hub.m-pesaforbusiness.co.ke/',
      description: 'Main portal for business payment services and applications',
    },
    {
      type: 'link',
      label: 'Direct Self-Onboarding Page',
      href: 'https://hub.m-pesaforbusiness.co.ke/merchant-onboarding/self-onboarding',
      description: 'Direct link to start a new Till or Paybill application',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Frequently Asked Questions',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Can I apply for an M-PESA Till online?',
    },
    {
      type: 'paragraph',
      text:
        'Yes. Eligible individuals and businesses can apply through the M-PESA Business Hub at https://hub.m-pesaforbusiness.co.ke/',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Can an individual apply for a Till without registering a business?',
    },
    {
      type: 'paragraph',
      text:
        'Safaricom\'s published requirements list an Individual category for the Buy Goods (Till) product. Confirm current eligibility and available products through the official application portal.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Can an individual apply for a Paybill?',
    },
    {
      type: 'paragraph',
      text:
        'Paybill eligibility for individuals should be confirmed directly through the Business Hub or Safaricom\'s current documentation, as product availability varies by category.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'What is the difference between a Till and Paybill?',
    },
    {
      type: 'paragraph',
      text:
        'A Till (Buy Goods) is for point-of-sale payments where customers enter only the Till number. A Paybill is for identified payments where customers enter a Business Number and, where required, an account number (e.g., student ID, tenant unit, invoice number).',
    },
    {
      type: 'heading',
      level: 3,
      text: 'How long does it take to get a Till or Paybill?',
    },
    {
      type: 'paragraph',
      text:
        'Processing times vary. Safaricom does not publish a fixed approval period. Track your application status in the Business Hub and follow any instructions provided.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Can I use my personal phone number?',
    },
    {
      type: 'paragraph',
      text:
        'You must nominate a Safaricom mobile number for the application. This number will receive activation instructions and transaction notifications. Confirm whether it can be a personal number or must be dedicated to the business during the application.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'What documents does a sole proprietor need?',
    },
    {
      type: 'paragraph',
      text:
        'Typically: business registration certificate or permit, owner\'s ID/passport, contact person\'s ID (if different), personal KRA PIN (where required), and bank details for settlement. Check the portal for the exact list at the time of application.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'How can I check my application status?',
    },
    {
      type: 'paragraph',
      text:
        'Log in to the M-PESA Business Hub and go to "My Applications" to see the current status and any next steps.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'What should I do if my application is rejected?',
    },
    {
      type: 'paragraph',
      text:
        'Check the rejection reason provided in the portal. Correct any issues (e.g., mismatched details, unclear documents) and resubmit, or contact Safaricom support for clarification.',
    },
    {
      type: 'heading',
      level: 3,
      text: 'Is applying for an M-PESA Till or Paybill free?',
    },
    {
      type: 'paragraph',
      text:
        'Application fee structures can change. Confirm current fees, if any, through the official M-PESA Business Hub or Safaricom\'s published documentation before applying.',
    },
    {
      type: 'heading',
      level: 2,
      text: 'Conclusion',
    },
    {
      type: 'paragraph',
      text:
        'Having a dedicated M-PESA payment solution can make collecting payments easier and more organized. Understanding the available options, choosing the correct product for your business model, and preparing the necessary documents before applying will help the process go smoothly. The initial application can be started online through the M-PESA Business Hub without beginning at a physical Safaricom shop.',
    },
    {
      type: 'paragraph',
      text:
        'For more practical guidance on helping your business get found online, check out our SEO basics guide for small business owners.',
    },
    {
      type: 'link',
      label: 'Read the SEO Basics for Small Business guide',
      href: '/blog/seo-basics-for-small-business',
      description: 'Practical local SEO actions to help your business get found by the right customers',
    },
    {
      type: 'quote',
      text:
        'At D-Labs, we believe that understanding the right digital tools can help businesses operate more efficiently and grow.',
    },
    {
      type: 'callout',
      title: 'Need help with digital solutions for your business?',
      text:
        'Explore the services available at D-Labs.',
    },
    {
      type: 'link',
      label: 'Visit D-Labs',
      href: 'https://dlabskenya.com/',
      description: 'Web development, digital strategy, and business solutions for Kenyan businesses',
    },
    {
      type: 'lipa-promo',
      heading: 'Got your M-PESA Till or Paybill? Make it work smarter with Lipa.',
      description:
        'Once your Till or Paybill is approved, Lipa helps you get the most out of it. Send M-Pesa STK Push requests to customers, track payments in real time as they come in, generate receipts for successful payments, share payment links for remote payments, and keep your customers\' details organized in one place.',
      features: [
        'M-Pesa STK Push requests',
        'Real-time payment tracking',
        'Digital receipts for successful payments',
        'Payment links for remote payments',
        'Customer management',
        'Payment analytics',
      ],
      ctaLabel: 'Discover Lipa',
    },
  ],
};

articles.unshift(articleMpesaTillPaybill);
articles.unshift(mpesaDarajaArticle);

const duplicateSlugs = articles
  .map((article) => article.slug)
  .filter((slug, index, slugs) => slugs.indexOf(slug) !== index);

if (duplicateSlugs.length > 0) {
  throw new Error(`Duplicate article slug(s): ${[...new Set(duplicateSlugs)].join(', ')}`);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const blogPreview = articles.slice(0, 3);
