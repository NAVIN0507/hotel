import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://brundhavangarden.com"),
  title: {
    default: "Brundhavan Garden Resort | Best Resort in Thandigudi, Dindigul",
    template: "%s | Brundhavan Garden Resort"
  },
  description: "Experience luxury and nature at Brundhavan Garden Resort in Thandigudi, Dindigul. Perfect for families, couples, and nature lovers seeking a peaceful getaway.",
  keywords: [
    // Thandigudi – Core
    "resort in thandigudi",
    "best resort in thandigudi",
    "luxury resort in thandigudi",
    "hill resort in thandigudi",
    "nature resort in thandigudi",
    "peaceful resort in thandigudi",
    "eco resort in thandigudi",
    "scenic resort thandigudi",
    "premium resort thandigudi",
    "top rated resort in thandigudi",

    // Near Kodaikanal – High traffic
    "resort near kodaikanal",
    "luxury resort near kodaikanal",
    "peaceful resort near kodaikanal",
    "nature resort near kodaikanal",
    "hill view resort near kodaikanal",
    "weekend stay near kodaikanal",
    "alternative to kodaikanal resorts",
    "affordable resort near kodaikanal",
    "offbeat resorts near kodaikanal",
    "couple resort near kodaikanal",

    // Dindigul – Regional authority
    "best resort in dindigul district",
    "luxury resort in dindigul",
    "hill resort in dindigul tamil nadu",
    "nature resort in dindigul",
    "resort stay in dindigul hills",
    "family resort in dindigul",
    "premium stay in dindigul",
    "tourist resort in dindigul",
    "weekend getaway from dindigul",
    "resorts around dindigul",

    // Family intent
    "family friendly resort thandigudi",
    "best family resort near kodaikanal",
    "kids friendly resort tamil nadu",
    "group stay resort thandigudi",
    "large family resort tamil nadu",
    "safe family resort in hills",
    "resort for family vacation tamil nadu",
    "family weekend getaway hills",
    "resort with garden for family",
    "calm resort for parents and kids",

    // Couple / Honeymoon
    "couple friendly resort thandigudi",
    "romantic resort near kodaikanal",
    "honeymoon resort near kodaikanal",
    "private stay resort tamil nadu",
    "peaceful couple resort in hills",
    "scenic honeymoon resort tamil nadu",
    "quiet romantic resort near dindigul",
    "luxury couple stay thandigudi",
    "nature honeymoon resort tamil nadu",
    "romantic hill stay tamil nadu",

    // Experience / Semantic
    "hill view resort tamil nadu",
    "mountain view resort near kodaikanal",
    "green nature resort tamil nadu",
    "eco friendly hill resort",
    "peaceful nature stay tamil nadu",
    "resort surrounded by greenery",
    "calm hill stay south india",
    "forest side resort tamil nadu",
    "scenic hill vacation tamil nadu",
    "nature retreat in tamil nadu",

    // Brand + commercial
    "brundhavan garden resort thandigudi",
    "brundhavan garden dindigul",
    "brundhavan garden resort tamil nadu",
    "brundhavan garden near kodaikanal",
    "brundhavan garden luxury resort",
    "brundhavan garden family resort",
    "brundhavan garden nature stay",
    "brundhavan garden hill resort",
    "brundhavan garden official website",
    "brundhavan garden resort booking"
  ],
  authors: [{ name: "Brundhavan Garden" }],
  creator: "Brundhavan Garden",
  publisher: "Brundhavan Garden",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://brundhavangarden.com",
    siteName: "Brundhavan Garden Resort",
    title: "Brundhavan Garden Resort | Luxury Stay in Thandigudi",
    description: "Premium resort experience in the heart of Thandigudi, Dindigul. Peace, comfort, and nature combined.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brundhavan Garden Resort",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brundhavan Garden Resort",
    description: "Premium resort experience in Thandigudi, Dindigul.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Brundhavan Garden Resort",
  "description": "Experience luxury and nature at Brundhavan Garden Resort in Thandigudi, Dindigul.",
  "image": "https://brundhavangarden.com/og-image.jpg",
  "url": "https://brundhavangarden.com",
  "telephone": "+919360275607",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3/347A, Pannaikadu Main Road, Thandigudi",
    "addressLocality": "Dindigul",
    "addressRegion": "Tamil Nadu",
    "postalCode": "624216",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.3129,
    "longitude": 77.6412
  },
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.5"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
