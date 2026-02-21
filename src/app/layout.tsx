import type { Metadata } from "next";
import { DM_Sans, Koulen } from "next/font/google";
import "swiper/swiper-bundle.css";
import "../../public/assets/css/style.css";
import ContextProvider from "@/components/context/ContextProvider";
import CustomLayout from "@/components/custom-layout/CustomLayout";
import FirebaseAuthProvider from "@/components/providers/FirebaseAuthProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-koulen",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://papoudigital.com";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "PapouDigital",
      url: siteUrl,
      logo: `${siteUrl}/assets/images/logo-pg.png`,
      email: "info@papoudigital.com",
      telephone: "+22890145611",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue Bassope, Be Kpota",
        addressLocality: "Lome",
        addressCountry: "TG",
      },
    },
    {
      "@type": "WebSite",
      name: "PapouDigital",
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/inner/blog?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PapouDigital - Tech Solutions",
    template: "%s | PapouDigital",
  },
  description:
    "PapouDigital delivers websites, mobile apps, cloud, ecommerce, payments, AI, and automation solutions for modern African businesses.",
  applicationName: "PapouDigital",
  keywords: [
    "PapouDigital",
    "tech solutions",
    "web development",
    "mobile app development",
    "cloud integration",
    "AI automation",
    "ecommerce solutions",
    "digital transformation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "PapouDigital",
    title: "PapouDigital - Tech Solutions",
    description:
      "Web, mobile, cloud, ecommerce, payment, AI, and automation solutions built for performance and growth.",
    images: [
      {
        url: "/assets/images/logo-pg.png",
        width: 1200,
        height: 630,
        alt: "PapouDigital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PapouDigital - Tech Solutions",
    description:
      "Web, mobile, cloud, ecommerce, payment, AI, and automation solutions built for performance and growth.",
    images: ["/assets/images/logo-pg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/images/favicon/favicon.ico" },
      { url: "/assets/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/assets/images/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/assets/images/favicon/favicon.ico"],
  },
  manifest: "/assets/images/favicon/site.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${dmSans.variable} ${koulen.variable} font-dm-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ContextProvider>
          <FirebaseAuthProvider>
            <CustomLayout>{children}</CustomLayout>
          </FirebaseAuthProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
