import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ajit Kumar Prasad | Freelance Full-Stack Developer",
  description:
    "I'm Ajit Kumar Prasad, a freelance full-stack developer based in Delhi NCR, specialising in business websites, e-commerce platforms, online ordering systems, admin dashboards, and custom web applications.",
  keywords: [
    "Ajit Kumar Prasad",
    "freelance developer Delhi",
    "full-stack developer",
    "web developer India",
    "business website developer",
    "e-commerce developer",
    "online ordering system",
    "Next.js developer",
    "React developer",
    "Node.js developer",
  ],
  openGraph: {
    title: "Ajit Kumar Prasad | Freelance Full-Stack Developer",
    description:
      "Professional websites, e-commerce stores, and custom web applications for businesses. Based in Delhi NCR.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
