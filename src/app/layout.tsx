import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import {  ClerkProvider} from '@clerk/nextjs'
import Header from "@/components/Header";

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: '400',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses and create a budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${roboto.variable} ${geistMono.variable} antialiased`}
        >
          <Header/>
          <main className="container">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
