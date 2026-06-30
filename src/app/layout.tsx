import type { Metadata, Viewport } from "next";
import { Syne, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Remark Studio — Digital Solutions Agency",
  description:
    "Turning IDEAS → REALITY with intelligent digital solutions, AI voice agents, chatbots, CRM/ERP, and creative production.",
};

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
      className={`${syne.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
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
