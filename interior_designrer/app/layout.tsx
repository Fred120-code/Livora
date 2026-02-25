import type { Metadata } from "next";
import { Audiowide, DM_Sans, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
});

const rethink = Rethink_Sans({
  variable: "--font-rethink",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Livora",
  description: "Livora Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${audiowide.variable} ${rethink.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
