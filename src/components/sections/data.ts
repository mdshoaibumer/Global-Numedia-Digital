import {
  Globe,
  Palette,
  Search,
  Users,
  Compass,
  Eye,
  Heart,
  Blocks,
} from "lucide-react";

import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

export { client1, client2, client3 };

export const services = [
  {
    icon: Globe,
    title: "Custom Websites & Maintenance",
    desc: "Professional websites tailored to your business with ongoing maintenance and support to keep everything running smoothly.",
    deliverables: [
      "Custom website design & development",
      "Regular updates & maintenance",
      "Performance optimization",
    ],
    to: "/services",
    gradient: "from-emerald-500/30 to-teal-500/15",
  },
  {
    icon: Palette,
    title: "Graphics Designs",
    desc: "Eye-catching visual designs for your brand — logos, marketing materials, social media graphics and more.",
    deliverables: [
      "Logo & brand identity",
      "Marketing collaterals",
      "Social media creatives",
    ],
    to: "/services",
    gradient: "from-purple-500/30 to-pink-500/15",
  },
  {
    icon: Search,
    title: "SEO Marketing & Advertising",
    desc: "Get found online with our SEO and advertising strategies that drive qualified traffic and grow your business.",
    deliverables: [
      "Search engine optimization",
      "Paid advertising campaigns",
      "Performance tracking",
    ],
    to: "/services/seo",
    gradient: "from-violet-500/30 to-indigo-500/15",
  },
  {
    icon: Users,
    title: "Personal & Business Coaching",
    desc: "Expert coaching to help you and your team grow — from personal development to business strategy and leadership.",
    deliverables: [
      "One-on-one coaching sessions",
      "Business strategy consulting",
      "Team development programs",
    ],
    to: "/services",
    gradient: "from-amber-500/30 to-orange-500/15",
  },
  {
    icon: Blocks,
    title: "Blockchain Development",
    desc: "Custom blockchain solutions — smart contracts, dApps, token development and Web3 integrations for your business.",
    deliverables: [
      "Smart contract development",
      "Decentralized applications",
      "Web3 integration",
    ],
    to: "/services/blockchain",
    gradient: "from-blue-500/30 to-cyan-500/15",
  },
];

export const testimonials = [
  {
    quote:
      "Global Numedia helped us build a stunning website and grow our online presence significantly. Highly recommend their team.",
    name: "Dr. Priya Shah",
    role: "CMO, Veritas Health Group",
    img: client1,
  },
  {
    quote:
      "Professional, creative and results-driven. They delivered exactly what we needed on time and within budget.",
    name: "Daniel Okafor",
    role: "Founder, Atrium Realty",
    img: client2,
  },
  {
    quote:
      "Their coaching and strategic guidance transformed how we approach our business. Outstanding partners.",
    name: "Lena Park",
    role: "VP Marketing, Northway",
    img: client3,
  },
];

export const values = [
  {
    icon: Compass,
    title: "Strategy first",
    desc: "We understand your goals before building solutions that deliver results.",
  },
  {
    icon: Eye,
    title: "Transparent process",
    desc: "Clear communication, honest reporting and no surprises.",
  },
  {
    icon: Heart,
    title: "Your success is ours",
    desc: "We measure our success by the growth of your business.",
  },
];

export const faqs = [
  {
    q: "How quickly will I see results?",
    a: "Paid advertising shows results within weeks. SEO and organic growth compounds over 3-6 months. You'll have regular updates from day one.",
  },
  {
    q: "Do you require long contracts?",
    a: "No. We work on flexible terms that fit your needs. Our quality work earns long-term partnerships.",
  },
  {
    q: "What services are included?",
    a: "We offer content marketing, app development, SEO, PPC management, social media marketing, web design, graphics design and coaching services.",
  },
  {
    q: "Will I have a dedicated point of contact?",
    a: "Yes. Every client gets a dedicated project manager who handles communication and ensures delivery.",
  },
  {
    q: "Can you work with existing branding?",
    a: "Absolutely. We can work within your existing brand guidelines or help develop new ones.",
  },
];
