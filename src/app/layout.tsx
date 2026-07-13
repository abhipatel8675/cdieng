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
  metadataBase: new URL("https://cdieng.com"),
  title: {
    default: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    template: `%s | ${COMPANY_INFO.shortName}`,
  },
  description:
    "Circa Domini International Inc. is an Irvine, CA-based MEP engineering design and consulting firm delivering mechanical, electrical, and plumbing solutions coast to coast since 2010.",
  keywords: [
    "MEP engineering",
    "mechanical engineering",
    "electrical engineering",
    "plumbing engineering",
    "Irvine California",
    "CDI Engineering",
    "HVAC design",
    "photovoltaic design",
    "cannabis MEP",
    "commercial engineering",
  ],
  openGraph: {
    type: "website",
    siteName: COMPANY_INFO.shortName,
    title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    description:
      "Irvine, CA-based MEP engineering design and consulting firm. Fast, affordable, and reliable mechanical, electrical, and plumbing engineering services.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.shortName} — ${COMPANY_INFO.tagline}`,
    description:
      "Irvine, CA-based MEP engineering design and consulting firm delivering results coast to coast.",
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
