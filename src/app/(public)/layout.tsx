import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Context from "@/Context/Context";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FooterBanner from "@/components/FooterBanner/FooterBanner";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Codeese",
  description: "A Blog For Hack Coders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Context>
          <Header/>
        {children}
        <FooterBanner/>
        <Footer/>
        </Context>
      </body>
    </html>
  );
}
