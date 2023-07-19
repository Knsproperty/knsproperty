import "./globals.css";
import "slick-carousel/slick/slick.css";
import { Lexend } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import { Header, Footer } from "@/blocks/layouts/main";
import NewsLetterSection from "@/blocks/sections/newsletter/popup";

// font initlization
const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Ksnproperty",
  description: "under-development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={lexend.className}>
        <NewsLetterSection />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
