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
    updatedAt: '3 November 2026',
    readTime: '9 min read',
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
    ],
  },
];

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
