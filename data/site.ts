import type { LucideIcon } from "lucide-react";
import {
  Compass,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Video,
  Waypoints
} from "lucide-react";

export const site = {
  name: "Pathfinder Therapy",
  domain: "pathfindertherapy.com",
  url: "https://pathfindertherapy.com",
  description:
    "Private therapy in Lisbon and online for English-speaking clients seeking greater clarity, connection, and meaningful change.",
  email: "hello@pathfindertherapy.com",
  bookingLabel: "Book a consultation"
};

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Therapy in Lisbon", href: "/therapy-in-lisbon" },
  { label: "Online therapy", href: "/online-therapy" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const footerNavigation = [
  { label: "Trauma therapy", href: "/trauma-therapy" },
  { label: "Expat therapy", href: "/expat-therapy" },
  { label: "Couples therapy", href: "/couples-therapy" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

export type Service = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Therapy in Lisbon",
    href: "/therapy-in-lisbon",
    description:
      "Private in-person therapy for English-speaking clients living, working or settling in Lisbon.",
    icon: MapPinned
  },
  {
    title: "Online therapy",
    href: "/online-therapy",
    description:
      "Confidential therapy online for clients in Portugal and internationally.",
    icon: Video
  },
  {
    title: "Trauma therapy",
    href: "/trauma-therapy",
    description:
      "Steady, trauma-informed support for people carrying old survival strategies into present life.",
    icon: ShieldCheck
  },
  {
    title: "Expat therapy",
    href: "/expat-therapy",
    description:
      "Support for identity, belonging, distance from home and the pressure of building a life abroad.",
    icon: Compass
  },
  {
    title: "Couples therapy",
    href: "/couples-therapy",
    description:
      "A grounded space for couples to work with communication, conflict, repair and reconnection.",
    icon: HeartHandshake
  },
  {
    title: "Transitions and identity",
    href: "/about",
    description:
      "Therapy for professionals, entrepreneurs and remote workers navigating change, meaning and direction.",
    icon: Waypoints
  }
];

export const faqs = [
  {
    question: "Who is Pathfinder Therapy for?",
    answer:
      "Pathfinder Therapy is for private-paying adults and couples who want thoughtful, confidential therapy in English. Clients often include expats in Portugal, professionals, entrepreneurs, remote workers, trauma survivors, veterans seeking private therapy and international online clients."
  },
  {
    question: "Do you offer therapy in Lisbon?",
    answer:
      "Yes. Pathfinder Therapy offers private therapy in Lisbon for English-speaking clients, alongside online sessions for people elsewhere in Portugal and internationally."
  },
  {
    question: "Can I work online if I travel often?",
    answer:
      "Usually, yes. Online therapy can work well for people with mobile lives, provided there is a private space, a reliable connection and the arrangement is clinically appropriate."
  },
  {
    question: "What can therapy help with?",
    answer:
      "Therapy may help with trauma, anxiety, relationship patterns, identity questions, grief, burnout, major transitions and the feeling that old coping strategies no longer fit the life you are trying to build."
  },
  {
    question: "How do I start?",
    answer:
      "You can request a consultation through the contact page. The first step is a short conversation to understand what you are looking for and whether Pathfinder Therapy is the right fit."
  },
  {
    question: "Is this an emergency service?",
    answer:
      "No. Pathfinder Therapy is not an emergency or crisis service. If you are at immediate risk or need urgent support, contact local emergency services or go to the nearest emergency department."
  }
];

export const pageSummaries = {
  "/about": {
    title: "About Pathfinder Therapy",
    description:
      "A private therapy practice for English-speaking clients seeking a calm, thoughtful space for trauma, anxiety, identity, relationships and life transitions."
  },
  "/therapy-in-lisbon": {
    title: "Private Therapy in Lisbon",
    description:
      "English-speaking private therapy in Lisbon for expats, professionals, entrepreneurs, remote workers and couples."
  },
  "/online-therapy": {
    title: "Online Therapy",
    description:
      "Confidential online therapy in English for clients in Portugal and internationally."
  },
  "/trauma-therapy": {
    title: "Trauma Therapy",
    description:
      "Trauma-informed private therapy for people who have spent years coping, adapting and carrying more than others can see."
  },
  "/expat-therapy": {
    title: "Expat Therapy in Portugal",
    description:
      "Therapy for English-speaking expats in Portugal navigating identity, belonging, relationships, distance from home and major life transitions."
  },
  "/couples-therapy": {
    title: "Couples Therapy",
    description:
      "Private couples therapy in Lisbon and online for communication, repair, trust, intimacy and life transitions."
  },
  "/fees": {
    title: "Fees",
    description:
      "Fees and practical details for private therapy consultations with Pathfinder Therapy in Lisbon and online."
  },
  "/faq": {
    title: "FAQ",
    description:
      "Frequently asked questions about private therapy with Pathfinder Therapy in Lisbon and online."
  },
  "/contact": {
    title: "Contact",
    description:
      "Book a consultation for private therapy in Lisbon or online with Pathfinder Therapy."
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "Privacy information for Pathfinder Therapy clients and website visitors."
  },
  "/terms": {
    title: "Terms",
    description:
      "Website terms and practical information for Pathfinder Therapy."
  }
} as const;
