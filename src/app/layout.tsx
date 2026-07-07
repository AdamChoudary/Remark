import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cranio = localFont({
  src: "./fonts/Cranio/CranioRegular-WpD9n.otf",
  variable: "--font-display",
  display: "swap",
});

const betha = localFont({
  src: "../../public/fonts/Betha/Betha-KVj87.otf",
  variable: "--font-betha",
  display: "swap",
});

const mifetro = localFont({
  src: "./fonts/Mifetro/MifetroRegular-rvOly.ttf",
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Remark Studio | Web Development, AI Agents & Digital Solutions",
  description:
    "Remark Studio is a full-service digital solutions agency offering web development, AI voice agents, chatbots, CRM, digital marketing, branding, and video production.",
  keywords: [
    "Remark Studio", "Digital Agency", "Web Development", "AI Voice Agents",
    "Intelligent Chatbots", "CRM & ERP", "Digital Marketing",
    "Social Media Management", "Branding", "Video Production", "SEO", "Custom Software"
  ],
  authors: [{ name: "Remark Studio" }],
  openGraph: {
    title: "Remark Studio | Web Development, AI Agents & Digital Solutions",
    description: "Remark Studio is a full-service digital solutions agency offering web development, AI voice agents, chatbots, CRM, digital marketing, branding, and video production.",
    url: "https://remarkstudio.tech/",
    siteName: "Remark Studio",
    images: [
      {
        url: "https://remarkstudio.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Remark Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remark Studio | Digital Solutions Agency",
    description: "Remark Studio is a full-service digital solutions agency offering web development, AI voice agents, chatbots, CRM, digital marketing, branding, and video production.",
    images: ["https://remarkstudio.tech/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://remarkstudio.tech/",
  },
};

const jsonLdSchemas = [
  `{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Remark Studio",
    "image": "https://remarkstudio.tech/og-image.png",
    "@id": "https://remarkstudio.tech/#organization",
    "url": "https://remarkstudio.tech/",
    "telephone": "+923355970322",
    "email": "hello@remarkstudio.agency",
    "priceRange": "$$",
    "description": "Remark Studio is a premier digital agency providing web development, AI voice agents, CRM solutions, and brand identity design.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Street 107, G-13/1",
      "addressLocality": "Islamabad",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6515,
      "longitude": 72.9807
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/remark-studio",
      "https://www.instagram.com/remarkstudio.tech",
      "https://www.facebook.com/remarkstudio.tech"
    ]
  }`,
  `{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://remarkstudio.tech/#website",
    "url": "https://remarkstudio.tech/",
    "name": "Remark Studio",
    "description": "Full-service digital solutions, web development, AI agents, and creative production.",
    "publisher": { "@id": "https://remarkstudio.tech/#organization" },
    "inLanguage": "en-US"
  }`,
  `{
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Digital Agency Services",
    "provider": { "@id": "https://remarkstudio.tech/#organization" },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Core Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development",
            "description": "Custom coded websites, web applications, and immersive digital platforms."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Voice Agents",
            "description": "Conversational AI agents for customer support, lead generation, and outbound calling."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CRM & ERP Management",
            "description": "Enterprise resource planning and customer relationship management systems."
          }
        }
      ]
    }
  }`,
  `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Remark Studio offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Remark Studio offers web development, AI voice agents, intelligent chatbots, CRM & ERP systems, digital marketing, SEO, social media management, graphic design, branding & identity, video production & editing, photography, content creation, event management, and print & marketing materials."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a website cost at Remark Studio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website pricing at Remark Studio varies based on complexity and requirements. We offer custom quotes tailored to your project. Contact us at hello@remarkstudio.agency or via WhatsApp to get a personalized estimate."
        }
      }
    ]
  }`
];

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cranio.variable} ${betha.variable} ${mifetro.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schema }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-void text-fg">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[60] focus-visible:rounded focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:text-white focus-visible:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
