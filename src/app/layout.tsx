import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Providers from "@/providers";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
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
    <html lang="en" className={` h-full ${inter.className}`}>
      <body className="min-h-full mx-auto md:max-w-7xl flex flex-col">
        <Providers>
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>
          <div className="grow">{children}</div>
          <div className="">
            <Footer />
          </div>
          <Toaster position="top-center"/>
        </Providers>
      </body>
    </html>
  );
}
