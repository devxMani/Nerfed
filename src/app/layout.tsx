import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/NavbarNew";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import Provider from "@/context/Provider";
import dynamic from "next/dynamic";
import Script from "next/script";
const ConditionalFooter = dynamic(() => import("./ConditionalFooter"), { ssr: false });

export const metadata: Metadata = {
  title: "Mani",
  description: "Mani is a Full Stack Developer specializing in building impactful web applications from scratch. Explore this portfolio to see my projects and skills.",
  keywords: "Mani, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Mani" }],
  openGraph: {
    title: "Mani",
    description: "",
    url: "https://fardeen.tech",
    siteName: "Mani",
    images: [
      {
        url: "/icon.png",
        width: 400,
        height: 200,
        alt: "fardeen",
      },
    ],
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mani',
    creator: '@devxMani',
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Kaushan+Script&family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
      </head>
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
            <Script src="/oneko.js" strategy="afterInteractive" />
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}