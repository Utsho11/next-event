import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Providers from "@/providers";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Event",
  description:
    "Book your next event with ease using Next Event - the ultimate event booking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full mx-auto md:max-w-7xl flex flex-col">
        <Providers>
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="">{children}</div>
          <div className=''>
            <Footer/>
          </div>
        </Providers>

      </body>
    </html>
  );
}
