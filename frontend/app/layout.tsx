import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AppShell from "@/components/AppShell";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Noble Classes | Shaping The Future",
    template: "%s | Noble Classes",
  },
  description:
    "Premium coaching institute in Ghatkopar, Mumbai offering expert coaching for Classes 8-12, JEE, NEET & Commerce. Expert faculty, proven results since 2010.",
  keywords: [
    "coaching institute",
    "Ghatkopar",
    "Mumbai",
    "JEE coaching",
    "NEET coaching",
    "SSC coaching",
    "Class 10",
    "Class 12",
    "Noble Classes",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Noble Classes",
    title: "Noble Classes – Shaping The Future | Coaching Institute in Ghatkopar, Mumbai",
    description:
      "Premium coaching institute in Ghatkopar, Mumbai. Expert faculty, proven results since 2010.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://nobleclasses.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Noble Classes",
              description: "Premium coaching institute in Ghatkopar, Mumbai",
              url: "https://nobleclasses.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SplashScreen>
          <Providers>
            <AppShell>{children}</AppShell>
          </Providers>
        </SplashScreen>
      </body>
    </html>
  );
}
