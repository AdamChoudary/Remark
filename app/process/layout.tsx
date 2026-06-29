import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Process | Remark Studio — How We Deliver Digital Solutions",
  description:
    "Discover Remark Studio's 5-step process: Discovery, Strategy, Design, Development, and Launch & Grow. From concept to launch, we deliver remarkable results.",
  openGraph: {
    title: "Our Process | Remark Studio",
    description: "From discovery to launch — how we deliver remarkable results.",
    url: "https://remarkstudio.tech/process",
  },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
