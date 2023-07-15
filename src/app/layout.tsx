import "./globals.css";
import "slick-carousel/slick/slick.css";
import { Lexend } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import { Header, Footer } from "@/blocks/layouts/main";

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
      <body className={lexend.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
