import type { Metadata, Viewport } from "next";
import "./globals.css";
import "../components/Button/Button.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://remarkstudio.tech"),
  title: "Remark Studio | Web Development, AI Voice Agents, Chatbots & Digital Marketing Agency",
  description:
    "Remark Studio is a full-service digital solutions agency offering custom web development, AI voice agents, intelligent chatbots, CRM & ERP systems, digital marketing, branding, video production, and creative content.",
  keywords: [
    "web development agency",
    "AI voice agents",
    "chatbot development",
    "CRM solutions",
    "ERP management",
    "digital marketing",
    "SEO agency",
    "branding agency",
    "video production",
    "social media management",
    "graphic design",
    "content creation",
    "Remark Studio",
  ],
  authors: [{ name: "Remark Studio" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://remarkstudio.tech/",
  },
  openGraph: {
    type: "website",
    siteName: "Remark Studio",
    title: "Remark Studio | Web Development, AI Agents & Digital Solutions",
    description:
      "We craft intelligent digital solutions — from stunning websites and AI voice agents to performance marketing and brand identity — that scale your business.",
    url: "https://remarkstudio.tech/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Remark Studio — Digital Solutions Agency",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@remark_studios",
    creator: "@remark_studios",
    title: "Remark Studio | Web Development, AI Agents & Digital Solutions",
    description:
      "We craft intelligent digital solutions — websites, AI voice agents, chatbots, CRM, branding & marketing — that scale your business.",
    images: [{ url: "/og-image.png", alt: "Remark Studio — Digital Solutions Agency" }],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/image.png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "rating": "general",
    "revisit-after": "7 days",
    "language": "English",
    "copyright": "Remark Studio 2026",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://remarkstudio.tech/#organization",
  name: "Remark Studio",
  alternateName: "Remark Studios",
  url: "https://remarkstudio.tech",
  logo: {
    "@type": "ImageObject",
    url: "https://remarkstudio.tech/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "Remark Studio is a full-service digital solutions agency specializing in web development, AI voice agents, intelligent chatbots, CRM & ERP systems, digital marketing, branding, and video production.",
  email: "hello@remarkstudio.agency",
  sameAs: [
    "https://www.instagram.com/remark_studios",
    "https://www.tiktok.com/@remark.studio",
    "https://www.facebook.com/remarkstudio1",
  ],
  foundingDate: "2024",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 5, maxValue: 20 },
  areaServed: { "@type": "Place", name: "Global" },
  knowsAbout: [
    "Web Development", "AI Voice Agents", "Chatbot Development", "CRM Systems",
    "ERP Management", "Digital Marketing", "Search Engine Optimization",
    "Social Media Management", "Graphic Design", "Video Production",
    "Brand Identity", "Content Creation",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://remarkstudio.tech/#website",
  url: "https://remarkstudio.tech",
  name: "Remark Studio",
  description: "Full-service digital solutions agency — web development, AI agents, marketing & branding.",
  publisher: { "@id": "https://remarkstudio.tech/#organization" },
  inLanguage: "en-US",
  copyrightYear: "2026",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://remarkstudio.tech/#localbusiness",
  name: "Remark Studio",
  image: "https://remarkstudio.tech/og-image.png",
  url: "https://remarkstudio.tech",
  email: "hello@remarkstudio.agency",
  telephone: "+923355970322",
  priceRange: "$$",
  currenciesAccepted: "USD, PKR",
  paymentAccepted: "Bank Transfer, Online Payment",
  address: { "@type": "PostalAddress", addressCountry: "PK", addressRegion: "Global Remote" },
  geo: { "@type": "GeoCoordinates", latitude: "30.3753", longitude: "69.3451" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "30",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", description: "Custom-built, high-conversion websites for property listings, portfolios, businesses, and SaaS platforms." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Voice Agents", description: "Intelligent voice agents for automated customer support, call handling, and helpline routing." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Chatbots", description: "AI-powered chatbots providing 24/7 client support and intelligent user guidance." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing", description: "Data-driven performance marketing campaigns for brand awareness and lead generation." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CRM & ERP Management", description: "End-to-end CRM and ERP implementation to streamline business operations." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Identity Design", description: "Core visual assets, brand guidelines, and unique logo architecture." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Production & Editing", description: "Professional film production, scripting, color grading and post-production." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management", description: "End-to-end social footprint management with custom aesthetics and engagement." } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What services does Remark Studio offer?", acceptedAnswer: { "@type": "Answer", text: "Remark Studio offers web development, AI voice agents, intelligent chatbots, CRM & ERP systems, digital marketing, SEO, social media management, graphic design, branding & identity, video production & editing, photography, content creation, event management, and print & marketing materials." } },
    { "@type": "Question", name: "How much does a website cost at Remark Studio?", acceptedAnswer: { "@type": "Answer", text: "Website pricing at Remark Studio varies based on complexity and requirements. We offer custom quotes tailored to your project. Contact us at hello@remarkstudio.agency or via WhatsApp to get a personalized estimate." } },
    { "@type": "Question", name: "What is an AI voice agent and how can it help my business?", acceptedAnswer: { "@type": "Answer", text: "An AI voice agent is an intelligent, conversational system that handles incoming and outgoing calls automatically. It can manage customer support, route helpline calls, run marketing campaigns, and respond to queries 24/7 — reducing costs and improving customer satisfaction." } },
    { "@type": "Question", name: "Does Remark Studio work with international clients?", acceptedAnswer: { "@type": "Answer", text: "Yes. Remark Studio is a fully remote, globally operating digital agency. We work with clients worldwide, across all time zones, with 24/7 support availability." } },
    { "@type": "Question", name: "How long does it take to build a website with Remark Studio?", acceptedAnswer: { "@type": "Answer", text: "Our average delivery time is 2 weeks for standard business websites. More complex SaaS platforms or custom web applications may take longer depending on scope. We provide a timeline estimate during the project discovery phase." } },
    { "@type": "Question", name: "Can Remark Studio help with SEO and digital marketing?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Remark Studio provides comprehensive digital marketing services including SEO, SEM, PPC advertising, and performance campaign management to boost your brand visibility and drive qualified leads." } },
    { "@type": "Question", name: "What CRM and ERP systems does Remark Studio implement?", acceptedAnswer: { "@type": "Answer", text: "Remark Studio implements and customizes a range of CRM and ERP solutions tailored to your business needs. We work with platforms like Salesforce and also build custom solutions to streamline operations, boost productivity, and support business growth." } },
    { "@type": "Question", name: "How do I start a project with Remark Studio?", acceptedAnswer: { "@type": "Answer", text: "Starting a project with Remark Studio is simple. Reach out via email at hello@remarkstudio.agency, through WhatsApp at +923355970322, or via our Instagram or TikTok. We will schedule a discovery call to understand your needs and provide a tailored proposal." } },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://remarkstudio.tech/#webpage",
  url: "https://remarkstudio.tech/",
  name: "Remark Studio | Web Development, AI Agents & Digital Solutions",
  description: "Remark Studio is a full-service digital solutions agency offering web development, AI voice agents, chatbots, CRM, digital marketing, branding, and video production.",
  isPartOf: { "@id": "https://remarkstudio.tech/#website" },
  about: { "@id": "https://remarkstudio.tech/#organization" },
  primaryImageOfPage: { "@type": "ImageObject", url: "https://remarkstudio.tech/og-image.png" },
  datePublished: "2024-01-01",
  dateModified: "2026-06-02",
  inLanguage: "en-US",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://remarkstudio.tech/" }],
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Remark Studio Services",
  description: "Complete list of digital services offered by Remark Studio",
  numberOfItems: 15,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Website Development", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 2, name: "Digital Marketing", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 3, name: "Social Media Management", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 4, name: "Graphic Designing", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 5, name: "Video Production", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 6, name: "Video Editing", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 7, name: "Branding & Identity Design", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 8, name: "Event Management", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 9, name: "Content Creation", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 10, name: "Printing & Marketing Materials", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 11, name: "Photography & Product Shoots", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 12, name: "Advertising & Promotional Campaigns", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 13, name: "AI Voice Agents", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 14, name: "Smart Chat Bots", url: "https://remarkstudio.tech/#services" },
    { "@type": "ListItem", position: 15, name: "CRM & ERP Management", url: "https://remarkstudio.tech/#services" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.fontshare.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Fontshare fonts */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        {/* Remix Icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
