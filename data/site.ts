import type { StaticImageData } from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Layers3,
  LayoutGrid,
  MapPin,
  MonitorSmartphone,
  Mail,
  MessageSquareMore,
  PenTool,
  PhoneCall,
  Rocket,
  Search,
  ShieldCheck,
  TimerReset,
  Workflow,
} from 'lucide-react';

import bookshopPreview from '../images/bookshop-website/bookshop-website-preview.jpg';
import ecommercePreview from '../images/ecommerce-website/ecommerce-website-preview.jpg';
import educationPreview from '../images/d-labs-education/d-labs-education.webp';
import founderPhoto from '../images/profile-400.jpeg';
import logoMark from '../images/logo1.webp';
import studentHustleHubPreview from '../images/student-hustle-hub/student-hustle-hub-preview.webp';
import wordmark from '../images/name-400.webp';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://d-labs.vercel.app';

export const site = {
  name: 'D-LABS',
  tagline: 'Digital Solutions & Innovation',
  description:
    'D-LABS builds fast, premium, SEO-ready websites and web apps for businesses that want to feel modern and trustworthy.',
  email: 'dlabs.ke@gmail.com',
  phone: '+254710236087',
  whatsapp: '254710236087',
  location: 'Embu, Kenya',
  serviceArea: ['Embu', 'Nairobi', 'Kenya'],
  founderName: 'Denis Munene',
  founderRole: 'Founder and Web Developer',
  aboutIntro:
    'D-LABS is a web development studio focused on building practical, polished digital experiences for small businesses, startups, and personal brands.',
  aboutMission:
    'We create websites and web applications that are simple to navigate, easy to maintain, and designed to help businesses present themselves with confidence.',
} as const;

export const brandAssets = {
  wordmark,
  logoMark,
  founderPhoto,
  heroProject: educationPreview,
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const heroHighlights = [
  'Fast, clean builds',
  'Mobile-first design',
  'SEO-ready structure',
  'Clear conversion paths',
] as const;

export const heroStats = [
  { label: 'Years of experience', value: '3+' },
  { label: 'Featured projects', value: '4' },
  { label: 'Blog articles', value: '7' },
  { label: 'Happy clients', value: '20+' },
] as const;

export const trustPills = [
  { label: 'Professional finish', icon: ShieldCheck },
  { label: 'Business-first strategy', icon: BriefcaseBusiness },
  { label: 'Speed-focused builds', icon: TimerReset },
  { label: 'Structured for SEO', icon: Search },
] as const;

export const services = [
  {
    title: 'Website Development',
    description:
      'Modern, responsive websites built to look professional, load fast, and convert visitors into clients.',
    details:
      'We design and build a clear website foundation that supports trust, performance, and long-term growth.',
    icon: Code2,
    href: '/pricing',
    cta: 'View pricing',
  },
  {
    title: 'Website Redesign',
    description:
      'Transform outdated websites into polished, modern experiences that match your brand and business goals.',
    details:
      'We keep what already works, then improve the visual hierarchy, spacing, and user flow so the site feels current.',
    icon: PenTool,
    href: '/contact',
    cta: 'Start redesign',
  },
  {
    title: 'GitHub Deployment',
    description:
      'Launch your site with reliable deployment so your business can be live, accessible, and easy to maintain.',
    details:
      'We help with simple, dependable deployment workflows that keep your site easy to update and scale.',
    icon: Rocket,
    href: '/contact',
    cta: 'Talk deployment',
  },
  {
    title: 'Beginner Web Development Training',
    description:
      'We teach beginners web development starting with HTML, CSS, and JavaScript through practical lessons at an affordable price.',
    details:
      'The training is hands-on, structured, and designed to make the learning path feel clear instead of overwhelming.',
    icon: GraduationCap,
    href: 'https://d-labs-education.vercel.app/',
    cta: 'Enroll now',
    external: true,
  },
] as const;

export const processSteps = [
  {
    title: 'Discover',
    description:
      'We align on goals, audience, and priorities so the website is built around the outcome, not just the layout.',
    icon: LayoutGrid,
  },
  {
    title: 'Design',
    description:
      'We establish the visual system, content flow, and interactions to make the brand feel premium and easy to trust.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Build and launch',
    description:
      'We ship a lightweight, responsive, SEO-friendly site and help you launch with confidence.',
    icon: Workflow,
  },
] as const;

export const results = [
  {
    title: 'Cleaner user journeys',
    description:
      'We design pages that guide visitors to the right action quickly, whether that is booking, calling, or making a purchase.',
    icon: ArrowRight,
  },
  {
    title: 'Faster page performance',
    description:
      'We keep layouts lightweight and structured so sites load smoothly on mobile connections and feel dependable to users.',
    icon: TimerReset,
  },
  {
    title: 'More professional presentation',
    description:
      'We turn rough ideas into polished websites that help a business look established, credible, and ready to work with clients.',
    icon: BriefcaseBusiness,
  },
] as const;

export const testimonials = [
  {
    quote:
      'D-LABS took our rough idea and turned it into a clean, professional website that made our business look more serious online.',
    meta: 'Small business owner, Embu',
  },
  {
    quote:
      'Communication was clear, the work was delivered on time, and the final site felt fast and easy to use on mobile.',
    meta: 'Startup founder, Kenya',
  },
  {
    quote:
      'What stood out most was the structure. Visitors now understand our services faster and contact us more easily.',
    meta: 'Service brand, Nairobi',
  },
] as const;

export const founderStory =
  'I started D-LABS after seeing many great businesses lose opportunities because their websites looked outdated, loaded slowly, or did not build trust. My goal is simple: help people and brands present their work professionally online with websites that are clear, fast, and built to support real business growth.';

export const skills = {
  frontend: ['React.js', 'HTML + CSS', 'JavaScript', 'TypeScript'],
  backend: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'],
} as const;

export const pricingPlans = [
  {
    name: 'Starter Website Package',
    price: 'KES 10,000',
    note: 'Ideal for small businesses getting online.',
    description:
      'A clean starter package for businesses that want a credible presence on the web without unnecessary complexity.',
    features: ['Up to 5 pages', 'Mobile responsive design', 'Basic SEO setup', 'Contact form + WhatsApp integration'],
    badge: null,
  },
  {
    name: 'Business Growth Package',
    price: 'KES 20,000',
    note: 'Best for businesses focused on leads and conversions.',
    description:
      'A conversion-focused package for businesses that need a stronger structure, clearer messaging, and a more polished UI.',
    features: [
      'Up to 10 pages',
      'Conversion-focused page structure',
      'Performance optimization',
      'Advanced SEO foundation',
      'Payment integration (M-Pesa, card payments)',
      'Direct WhatsApp messaging buttons throughout site',
      'Lead capture forms and email automation',
      'Analytics setup and conversion tracking',
    ],
    badge: 'Most Popular',
  },
  {
    name: 'Premium Custom Package',
    price: 'KES 35,000',
    note: 'For businesses needing custom features and scalability.',
    description:
      'A premium build for brands that need custom features, growth strategy, and room to scale over time.',
    features: [
      'Custom design and integrations',
      'Booking, payment, or dashboard features',
      'Technical support and maintenance options',
      'Growth-focused strategy consultation',
      'E-commerce functionality (products, cart, checkout)',
      'Advanced analytics and performance reports',
      'Monthly maintenance and security updates included',
      'Dedicated developer support (priority response)',
    ],
    badge: 'Best for scale',
  },
] as const;

export const pricingComparison = [
  { feature: 'Starting price', starter: 'KES 10,000', growth: 'KES 20,000', premium: 'KES 35,000' },
  { feature: 'Pages', starter: 'Up to 5', growth: 'Up to 10', premium: 'Custom scope' },
  { feature: 'Mobile responsive', starter: 'Yes', growth: 'Yes', premium: 'Yes' },
  { feature: 'SEO setup', starter: 'Basic', growth: 'Advanced foundation', premium: 'Advanced + strategy' },
  { feature: 'Payment integration', starter: 'No', growth: 'M-Pesa / Card', premium: 'Full setup' },
  { feature: 'Lead capture & automation', starter: 'No', growth: 'Included', premium: 'Included' },
  { feature: 'Maintenance support', starter: 'Optional', growth: 'Optional', premium: 'Monthly included' },
] as const;

export const faqItems = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most business websites take between 7 and 14 days, while more complex systems receive a specific timeline after consultation.',
  },
  {
    question: 'How much does a professional website cost?',
    answer:
      'We offer different packages based on your needs. Pricing is shared in Kenyan Shillings after a quick review of the project scope.',
  },
  {
    question: 'Will my website work on mobile phones?',
    answer: 'Yes. Every D-LABS website is built mobile-first to work across smartphones, tablets, and desktops.',
  },
  {
    question: 'Do you help with SEO and appearing on Google?',
    answer:
      'Yes. We build SEO fundamentals into the structure, metadata, and performance setup so search engines can understand the site.',
  },
  {
    question: 'Can I update the website myself later?',
    answer:
      'Yes. We can build simple editing flows or a lightweight content workflow so you can update copy and images without friction.',
  },
  {
    question: 'What happens if I need help after launch?',
    answer:
      'We do not just build and leave. We offer ongoing support so your site stays secure, updated, and easy to manage.',
  },
] as const;

export const projects = [
  {
    title: 'D-LABS Education',
    slug: 'd-labs-education',
    description:
      'A structured learning hub with roadmaps, lessons, and guided projects for beginners who want a clearer path into web development.',
    goal: 'Give beginners a structured place to learn web development with hands-on lessons, roadmaps, and real projects.',
    outcome:
      'A full learning hub with curated paths from HTML and CSS to deployment, plus a clear roadmap users can follow at their own pace.',
    image: educationPreview,
    href: 'https://d-labs-education.vercel.app/',
    cta: 'Open live site',
    tags: ['Learning platform', 'Roadmaps', 'Responsive', 'SEO-ready'],
  },
  {
    title: 'Student Hustle Hub',
    slug: 'student-hustle-hub',
    description:
      'A marketplace-style platform for students to promote services and connect with practical opportunities on campus.',
    goal: 'Help students promote services and connect with opportunities online.',
    outcome:
      'A full-stack platform with structured pages, clear workflows, and a practical user experience.',
    image: studentHustleHubPreview,
    href: 'https://student-hustle-hub.vercel.app/',
    cta: 'Open live site',
    tags: ['Marketplace', 'Community', 'Mobile-first', 'Workflow'],
  },
  {
    title: 'E-Commerce Website',
    slug: 'ecommerce-website',
    description:
      'A modern shopping experience that keeps browsing simple and makes the product journey feel more intuitive.',
    goal: 'Create a smoother shopping flow with clear product discovery.',
    outcome:
      'A modern e-commerce demo with clean navigation and conversion-focused UI components.',
    image: ecommercePreview,
    href: 'https://denismunene2006-lab.github.io/e-commerce-website/',
    cta: 'Open live site',
    tags: ['Commerce', 'Navigation', 'Conversion', 'Responsive'],
  },
  {
    title: 'Bookshop Website',
    slug: 'bookshop-website',
    description:
      'A responsive bookshop experience that feels easy to browse and more professional across desktop and mobile.',
    goal: 'Make the bookstore easier to browse across devices.',
    outcome:
      'A responsive website with structured navigation and a user-friendly shopping experience.',
    image: bookshopPreview,
    href: 'https://denismunene2006-lab.github.io/mary-bookshop/',
    cta: 'Open live site',
    tags: ['Catalog', 'Browse', 'Responsive', 'Trust'],
  },
] as const;

export const homeProjectPreview = projects.slice(0, 2);

export const contactMethods = [
  {
    title: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    title: 'Phone',
    value: site.phone,
    href: `tel:${site.phone}`,
    icon: PhoneCall,
  },
  {
    title: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: `https://wa.me/${site.whatsapp}`,
    icon: MessageSquareMore,
  },
  {
    title: 'Location',
    value: site.location,
    href: '#',
    icon: MapPin,
  },
] as const;

export const heroData = {
  wordmark,
  logoMark,
  founderPhoto,
  heroImage: educationPreview,
} as const;

export type SiteProject = (typeof projects)[number];
export type SiteService = (typeof services)[number];
export type SiteFaqItem = (typeof faqItems)[number];
export type SiteTestimonial = (typeof testimonials)[number];
export type SitePricingPlan = (typeof pricingPlans)[number];
export type SiteContactMethod = (typeof contactMethods)[number];
export type HeroStat = (typeof heroStats)[number];
export type TrustPill = (typeof trustPills)[number];
