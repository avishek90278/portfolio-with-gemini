import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://avisheksarkar.com'), // Placeholder, user to update
  title: {
    default: "Avishek Sarkar | Creative Web Developer & SEO Expert in Bangladesh",
    template: "%s | Avishek Sarkar"
  },
  description: "Avishek Sarkar is a top-rated Web Developer and SEO Expert in Bangladesh. Specializing in Next.js, React, and high-performance web solutions.",
  keywords: ["Avishek Sarkar", "Avi Sarkar", "Web Developer Bangladesh", "Best Developer in Bangladesh", "SEO Expert Bangladesh", "Next.js Developer", "React Developer", "Frontend Engineer", "Full Stack Developer"],
  authors: [{ name: "Avishek Sarkar" }],
  creator: "Avishek Sarkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avisheksarkar.com",
    title: "Avishek Sarkar | Creative Web Developer & SEO Expert",
    description: "Portfolio of Avishek Sarkar - Building high-performance, visually stunning web experiences.",
    siteName: "Avishek Sarkar Portfolio",
    images: [
      {
        url: "/assets/portrait-avi.png", // Using the new profile image as OG image
        width: 1200,
        height: 630,
        alt: "Avishek Sarkar - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishek Sarkar | Creative Web Developer",
    description: "Top-rated Web Developer & SEO Expert in Bangladesh. Check out my portfolio.",
    images: ["/assets/portrait-avi.png"],
    creator: "@avisheksarkar", // Placeholder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Avishek Sarkar",
    "url": "https://avisheksarkar.com",
    "image": "https://avisheksarkar.com/assets/portrait-avi.png",
    "sameAs": [
      "https://facebook.com/2visarkar",
      "https://github.com/avisheksarkar", // Placeholder
      "https://linkedin.com/in/avisheksarkar" // Placeholder
    ],
    "jobTitle": "Web Developer & SEO Expert",
    "worksFor": {
      "@type": "Organization",
      "name": "DevsAround"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "description": "Avishek Sarkar is a passionate Web Developer and UI/UX Designer based in Bangladesh, specializing in modern web technologies and SEO."
  };

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-[#050505] text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
