import type { Metadata } from "next";
import { Inter, Orbitron, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HOSAM.dart | Flutter Developer",
  description: "Flutter Developer with 5+ years of expertise in architecting high-performance, visually-driven cross-platform applications.",
  openGraph: {
    title: "HOSAM.dart | Flutter Developer",
    description: "Architecting high-performance, visually-driven cross-platform applications with Clean Architecture and Impeller Engine.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-primary w-full">{children}</body>
    </html>
  );
}
