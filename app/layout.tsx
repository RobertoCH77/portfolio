import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/custom-ui/header/header";
import StairTransition from "@/components/layout/page-transition/stairTransition";
import PageTransition from "@/components/layout/page-transition/pagetransition";

const releway = localFont({
  src: "../app/fonts/Raleway.woff2",
  variable: "--font-releway",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Roberto Chacón | Developer",
  description: "A portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${releway.variable} antialiased text-white/80`}
      >
      <Header/>
      <StairTransition/>
      <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
