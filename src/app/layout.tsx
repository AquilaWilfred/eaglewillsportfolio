import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aquila Amon | Portfolio",
  description: "Defining Me — Aquila Amon, Data Scientist & AI Specialist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        {/* Main content fits remaining space above footer */}
        <main className="flex-1 px-6 py-10 pt-20" style={{ minHeight: "calc(100vh - 120px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
