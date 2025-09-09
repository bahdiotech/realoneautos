import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import ClientBody from "./ClientBody";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realone Auto - Mobile Mechanics | Auto Repair At Your Door",
  description: "Realone Auto offers convenient mobile mechanic services. Our certified mechanics come to you for oil changes, brake repairs, diagnostics and more. Book online today!",
  keywords: "mobile mechanic, auto repair, car service, oil change, brake repair, mobile auto repair",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/logo.png', sizes: '128x128', type: 'image/png' },
      { url: '/logo.png', sizes: '256x256', type: 'image/png' },
      { url: '/logo.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '256x256', type: 'image/png' }
    ],
    shortcut: '/logo.png',
    other: {
      rel: 'icon',
      url: '/logo.png',
      sizes: '256x256'
    }
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </ClientBody>
    </html>
  );
}