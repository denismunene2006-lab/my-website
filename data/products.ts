import {
  ClipboardCheck,
  CreditCard,
  MessageSquareWarning,
  Receipt,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

import type { StaticImageData } from 'next/image';

/**
 * "From D-Labs" — products D-LABS builds and owns in-house.
 *
 * This is intentionally separate from `projects` (client work showcased on the
 * Projects page). Adding a product here only requires a new entry in
 * `products` plus a thin route at `app/from-d-labs/<slug>/page.tsx`.
 */
export type Product = {
  /** URL segment, also used for the dropdown href: /from-d-labs/<slug> */
  slug: string;
  name: string;
  /** Short line used in the navigation dropdown and hero headline */
  tagline: string;
  /** Meta description used for the page metadata */
  description: string;
  /** Short card summary, also reused in the navigation dropdown */
  summary: string;
  icon: LucideIcon;
  tags: string[];
  /** The everyday pain points the product answers */
  challenges: { title: string; text: string; icon: LucideIcon }[];
  /** Introductory narrative. Extend this array as the product page grows. */
  sections: { id: string; eyebrow: string; title: string; paragraphs: string[] }[];
  /** "What you get" — feature blocks, each with a product screenshot */
  features: {
    id: string;
    number: string;
    title: string;
    text: string;
    icon: LucideIcon;
    image: StaticImageData;
    imageAlt: string;
  }[];
  /** Additional features without screenshots — displayed as icon cards */
  moreFeatures?: {
    id: string;
    title: string;
    text: string;
    icon: LucideIcon;
  }[];
  /** "How we do it" — the onboarding process, in order */
  process: { number: string; title: string; text: string }[];
  /** Pre-written contact messages used by the WhatsApp and Email actions */
  contact: { whatsappMessage: string; emailSubject: string; emailBody: string };
};

export const products: Product[] = [
  {
    slug: 'lipa',
    name: 'Lipa Biz',
    tagline: 'Business payment management for M-Pesa.',
    description:
      'Lipa Biz is a D-LABS product that helps businesses manage and monitor their M-Pesa payment activities from one platform. Built for multi-business support — no separate deployments needed.',
    summary: 'Manage and monitor M-Pesa payments across multiple businesses from one platform.',
    icon: Wallet,
    tags: ['M-Pesa', 'Payment Management', 'Multi-Business', 'Built in-house'],
    challenges: [
      {
        title: 'Fake or edited payment confirmations',
        text: 'Customers sometimes present edited M-Pesa messages as proof of payment, leaving businesses with no reliable way to verify.',
        icon: MessageSquareWarning,
      },
      {
        title: 'Manual payment checking',
        text: 'Staff spend valuable time manually checking M-Pesa messages one by one to confirm whether payments actually went through.',
        icon: ClipboardCheck,
      },
      {
        title: 'Difficulty tracking payment statuses',
        text: 'Without a centralized dashboard, it\'s hard to know at a glance which payments are paid, pending, failed, or cancelled.',
        icon: CreditCard,
      },
      {
        title: 'Repeatedly entering customer details',
        text: 'Every transaction requires re-entering customer names and phone numbers, slowing down the payment process.',
        icon: Users,
      },
      {
        title: 'Poor transaction records and receipts',
        text: 'Businesses struggle to maintain professional transaction records and generate proper receipts for customers.',
        icon: Receipt,
      },
    ],
    sections: [
      {
        id: 'introducing-lipa-biz',
        eyebrow: 'Introducing Lipa Biz',
        title: 'One platform for all your M-Pesa payment activities.',
        paragraphs: [
          'Lipa Biz gives your business a centralized platform to send M-Pesa STK Push requests, track payments in real time, and generate professional receipts — all from one place.',
          'Unlike the original Lipa which required separate deployments for each business, Lipa Biz supports multiple businesses on a single platform, making it ideal for agencies, franchises, and companies managing payments across different entities.',
        ],
      },
    ],
    features: [],
    moreFeatures: [],
    process: [],
    contact: {
      whatsappMessage: '',
      emailSubject: '',
      emailBody: '',
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductHref(product: Pick<Product, 'slug'>): string {
  return `/from-d-labs/${product.slug}`;
}

export type FromDLabsNavItem = {
  label: string;
  href: string;
  description: string;
};
