import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  metadataBase: new URL("https://citycentrefirm.com"),
  title: {
    default:
      "City Centre Firm | Premium Digital Agency – Web Design, Strategy & AI",
    template: "%s | City Centre Firm",
  },
  description:
    "City Centre Firm is a premium digital agency specializing in website design, digital strategy, and AI automation. We elevate brands with cutting-edge technology and creative excellence.",
  keywords: [
    "digital agency",
    "web design",
    "AI automation",
    "digital strategy",
    "website development",
    "City Centre Firm",
    "branding",
    "UX design",
  ],
  authors: [{ name: "City Centre Firm" }],
  creator: "City Centre Firm",
  publisher: "City Centre Firm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://citycentrefirm.com",
    siteName: "City Centre Firm",
    title:
      "City Centre Firm | Premium Digital Agency – Web Design, Strategy & AI",
    description:
      "We elevate brands with cutting-edge website design, digital strategy, and AI automation.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "City Centre Firm – Premium Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Centre Firm | Premium Digital Agency",
    description:
      "We elevate brands with cutting-edge website design, digital strategy, and AI automation.",
    images: ["/images/og-image.jpg"],
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <SchemaMarkup />
      </head>
      <body className="grain antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
