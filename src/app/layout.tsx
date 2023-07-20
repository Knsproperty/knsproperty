import "./globals.css";
import "slick-carousel/slick/slick.css";
import { Lexend } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import { Header, Footer } from "@/blocks/layouts/main";
import NewsLetterSection from "@/blocks/sections/newsletter/popup";
import Script from "next/script";
const GTM_ID = "GTM-MT9PWSWC";

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
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
