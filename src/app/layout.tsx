import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Douglas Salazar · Full Stack Developer",
    template: "%s · Douglas Salazar",
  },
  description:
    "Desenvolvedor Full Stack com React, Node.js e TypeScript. Mais de 16 anos em tecnologia, construindo aplicações web completas.",
  keywords: [
    "Douglas Salazar",
    "Full Stack Developer",
    "React",
    "Node.js",
    "TypeScript",
    "Desenvolvedor",
    "São Paulo",
  ],
  authors: [{ name: "Douglas Salazar" }],
  creator: "Douglas Salazar",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://douglas-salazar-portfolio.vercel.app",
    title: "Douglas Salazar · Full Stack Developer",
    description:
      "Desenvolvedor Full Stack com React, Node.js e TypeScript. Portfólio profissional.",
    siteName: "Douglas Salazar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Salazar · Full Stack Developer",
    description:
      "Desenvolvedor Full Stack com React, Node.js e TypeScript. Portfólio profissional.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
     className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}