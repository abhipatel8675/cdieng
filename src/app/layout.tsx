import type { Metadata } from "next";
import { Inter, Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY_INFO } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tianchendevelopment.com"),
  title: {
    default: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    "Tian Chen Development Group is a Southern California-based integrated real estate development firm delivering feasibility, design, entitlements, and construction under one accountable team.",
  keywords: [
    "real estate development",
    "integrated development",
    "site feasibility",
    "entitlements",
    "construction management",
    "Southern California real estate",
    "City of Industry CA",
    "residential development",
    "commercial development",
    "mixed-use development",
  ],
  openGraph: {
    type: "website",
    siteName: COMPANY_INFO.shortName,
    title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    description:
      "Southern California-based integrated real estate development firm carrying projects from acquisition through occupancy.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    description:
      "Southern California-based integrated real estate development firm — feasibility, design, entitlements, and construction under one team.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${onest.variable}`}>
      <body className="flex flex-col min-h-screen bg-page-bg antialiased">
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>

        <Navbar />

        <main
          className="flex-1"
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
