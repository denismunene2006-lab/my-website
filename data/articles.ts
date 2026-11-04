import type { StaticImageData } from 'next/image';

import article20RulesImage from '../images/article-20-unshakable-rules-modern-web-development/art.webp';
import articleBusinessMistakesImage from '../images/article-business-website-mistakes/photo1.webp';
import articleContentMarketingImage from '../images/article-content-marketing-tech-companies/d3.webp';
import articleModernWebDevelopmentImage from '../images/article-modern-web-development/photo3.webp';
import articleOnlineGrowthImage from '../images/article-online-growth-strategy/photo2.webp';
import articleSeoBasicsImage from '../images/article-seo-basics-for-small-business/photo4.webp';
import articlePerformanceImage from '../images/article-website-performance-page-speed/d2.webp';
import mpesaDarajaArticleImage from '../images/article-mpesa-daraja-api-nodejs-express-mongodb/M-Pesa Daraja API Integration Guide.png';

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
  | { type: 'steps'; items: { title: string; text: string }[] };

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
      href: 'https://www.mongodb.com/products/platform/atlas',
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
  ],
};

articles.push(mpesaDarajaArticle);

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
