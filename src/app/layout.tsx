import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  metadataBase: new URL("https://citycentrefirm.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default:
      "City Centre Firm Corp. | Engineering Services & Technology Solutions",
    template: "%s | City Centre Firm Corp.",
  },
  description:
    "City Centre Firm Corp. is a premium engineering services company specializing in design, project management, and technology integration. Elevating projects with cutting-edge solutions.",
  keywords: [
    "engineering services",
    "engineering design",
    "project management",
    "AI integration",
    "City Centre Firm Corp",
    "consulting",
    "technology solutions",
  ],
  authors: [{ name: "City Centre Firm Corp." }],
  creator: "City Centre Firm Corp.",
  publisher: "City Centre Firm Corp.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://citycentrefirm.com",
    siteName: "City Centre Firm Corp.",
    title:
      "City Centre Firm Corp. | Engineering Services & Technology Solutions",
    description:
      "Premium engineering services in design, project management, and technology integration.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "City Centre Firm Corp. – Engineering & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "City Centre Firm Corp. | Engineering Services",
    description:
      "Premium engineering services in design, project management, and technology integration.",
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
