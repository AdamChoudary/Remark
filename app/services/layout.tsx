import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Remark Studio — Web, AI, Branding & Digital Marketing Agency",
  description:
    "Explore Remark Studio's 15 digital services: Website Development, AI Voice Agents, Smart Chatbots, Digital Marketing, Social Media Management, Graphic Design, Branding, Video Production, and more.",
  openGraph: {
    title: "Services | Remark Studio",
    description: "15 disciplines, one integrated approach — full-service digital solutions.",
    url: "https://remarkstudio.tech/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
