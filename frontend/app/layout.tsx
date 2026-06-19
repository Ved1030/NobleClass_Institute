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
    default: "Labbdis Academy | State Board & CBSE Coaching Classes in Ghatkopar West",
    template: "%s | Labbdis Academy",
  },
  description:
    "Labbdis Academy provides expert coaching for Std 8th, 9th and 10th State Board and CBSE students. Personalized attention, concept-based learning, regular assessments, and academic excellence in Ghatkopar West, Mumbai.",
  keywords: [
    "Labbdis Academy",
    "State Board Coaching Ghatkopar",
    "CBSE Coaching Ghatkopar",
    "8th Standard Coaching",
    "9th Standard Coaching",
    "10th Standard Coaching",
    "Maths Tuition Ghatkopar",
    "Science Classes Ghatkopar",
    "CBSE Tuition Mumbai",
    "State Board Classes Mumbai",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Labbdis Academy",
    title: "Labbdis Academy | State Board & CBSE Coaching Classes",
    description:
      "Expert coaching for Std 8th, 9th and 10th State Board & CBSE students in Ghatkopar West, Mumbai.",
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
        <link rel="canonical" href="https://labbdhisacademy.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Labbdis Academy",
              description: "Building Strong Foundations For Academic Excellence",
              url: "https://labbdhisacademy.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ghatkopar West",
                addressRegion: "Mumbai",
                addressCountry: "IN",
              },
              foundingDate: "2007",
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
