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
    default: "VS Tutorials | Coaching Classes in Ghatkopar East",
    template: "%s | VS Tutorials",
  },
  description:
    "VS Tutorials provides quality coaching, concept-based learning, regular assessments, and academic guidance for students in Ghatkopar East, Mumbai.",
  keywords: [
    "coaching institute",
    "Ghatkopar East",
    "Mumbai",
    "VS Tutorials",
    "academic coaching",
    "concept-based learning",
    "student guidance",
    "exam preparation",
    "MHT-CET coaching",
    "science classes",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "VS Tutorials",
    title: "VS Tutorials | Coaching Classes in Ghatkopar East",
    description:
      "VS Tutorials provides quality coaching, concept-based learning, regular assessments, and academic guidance for students in Ghatkopar East, Mumbai.",
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
        <link rel="canonical" href="https://vstutorials.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "VS Tutorials",
              description: "Building Strong Concepts & Academic Excellence",
              url: "https://vstutorials.in",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shop No. 11, Ground Floor, Building No. 185, Drushti Sapphire, Opp. Shivaji Technical School, Gaurishankar Wadi, Pant Nagar",
                addressLocality: "Ghatkopar East",
                addressRegion: "Mumbai",
                postalCode: "400075",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                bestRating: "5.0",
                ratingCount: "52",
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
