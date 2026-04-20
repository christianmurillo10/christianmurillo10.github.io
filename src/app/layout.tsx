import type { Metadata } from "next";
import { Sidebar } from "@/widgets/sidebar/ui/sidebar";
import { Navigation } from "@/widgets/navigation/ui/navigation";
import { MobileHeader } from "@/widgets/header/ui/mobile-header";
import { Footer } from "@/widgets/footer/ui/footer";
import { CustomCursor } from "@/shared/ui/custom-cursor";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christian Murillo | Software Engineer",
  description:
    "Results-driven Software Engineer with 9+ years of experience designing, building, and scaling web applications across diverse industries.",
  keywords:
    "christian murillo, senior software engineer, full stack developer, web developer, nodejs developer",
  openGraph: {
    title: "Christian Murillo | Software Engineer",
    description:
      "Results-driven Software Engineer with 9+ years of experience designing, building, and scaling web applications.",
    url: "https://christianmurillo10.github.io",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christian Murillo",
  jobTitle: "Software Engineer",
  url: "https://christianmurillo10.github.io",
  sameAs: [
    "https://linkedin.com/in/christianoroceomurillo",
    "https://github.com/christianmurillo10",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
    addressLocality: "Manila",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased cursor-none lg:cursor-none">
        <CustomCursor />
        <div className="mx-auto flex h-screen max-w-[1440px] overflow-hidden">
          <Sidebar />
          <main className="dot-grid relative flex-1 overflow-y-auto">
            <MobileHeader />
            <div className="px-4 pt-20 lg:px-10 lg:pt-8">
              <Providers>{children}</Providers>
              <Footer />
            </div>
          </main>
          <Navigation />
        </div>
      </body>
    </html>
  );
}
