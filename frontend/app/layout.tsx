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
    default: "Labbdhis Academy | Std 8th, 9th & 10th Coaching Classes (State Board & CBSE)",
    template: "%s | Labbdhis Academy",
  },
  description:
    "Labbdhis Academy provides quality coaching for Std 8th, 9th & 10th students (State Board & CBSE) with concept-based learning, personal attention, and academic excellence in Ghatkopar West, Mumbai.",
  keywords: [
    "Labbdhis Academy",
    "8th Standard Coaching",
    "8th Standard Coaching",
    "9th Standard Coaching",
    "10th Standard Coaching",
    "Ghatkopar Coaching Classes",
    "School Tuition Classes Mumbai",
    "Ghatkopar West",
    "Mumbai",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Labbdhis Academy",
    title: "Labbdhis Academy | Std 8th, 9th & 10th Coaching Classes (State Board & CBSE)",
    description:
      "Labbdhis Academy provides quality coaching for Std 8th, 9th & 10th students (State Board & CBSE) with concept-based learning, personal attention, and academic excellence in Ghatkopar West, Mumbai.",
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
              name: "Labbdhis Academy",
              description: "Shaping Young Minds Through Quality Education",
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
