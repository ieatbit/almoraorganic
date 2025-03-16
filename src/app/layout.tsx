import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Almora Organic - Pure & Natural Products from Himalayas',
  description: 'Discover authentic Himalayan products including turmeric, honey, and rock salt from the pristine hills of Almora.',
  keywords: [
    'organic turmeric',
    'Himalayan honey',
    'phadi salt',
    'Uttarakhand organic products',
    'Almora turmeric',
    'pure Himalayan salt',
    'raw honey',
    'mountain herbs',
    'organic spices'
  ],
  authors: [{ name: 'Almora Organic' }],
  creator: 'Almora Organic',
  publisher: 'Almora Organic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Almora Organic | Pure Himalayan Products',
    description: 'Premium organic products from the Himalayas including turmeric, honey, and phadi salt.',
    url: 'https://almoraorganic.com',
    siteName: 'Almora Organic',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Almora Organic Products',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Almora Organic | Pure Himalayan Products',
    description: 'Premium organic products from the Himalayas including turmeric, honey, and phadi salt.',
    images: ['/images/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Almora Organic",
              url: "https://almoraorganic.com",
              logo: "https://almoraorganic.com/images/logo.png",
              description: "Premium organic products from the Himalayas including turmeric, honey, and phadi salt.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Almora",
                addressRegion: "Uttarakhand",
                addressCountry: "IN"
              },
              sameAs: [
                "https://facebook.com/almoraorganic",
                "https://instagram.com/almoraorganic",
                "https://twitter.com/almoraorganic"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
} 