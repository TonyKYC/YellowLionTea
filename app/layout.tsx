import type { Metadata } from "next";
import localFont from "next/font/local";
import { Righteous } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const kleeOne = localFont({
  src: "./fonts/KleeOne-Regular.ttf",
  variable: "--font-klee-one",
  weight: "100 900",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "Huang Shizi",
  description: "Bubble tea shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kleeOne.variable} ${righteous.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
