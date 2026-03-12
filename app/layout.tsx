import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const gilroy = localFont({
  variable: "--font-gilroy",
  src: [
    {
      path: "../public/gilroy/gilroy-thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-thin-italic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-ultra-light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-ultra-light-italic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-light-italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-regular-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-medium-italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-semi-bold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-semi-bold-italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-extra-bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-extra-bold-italic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-heavy-italic.ttf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../public/gilroy/gilroy-black.ttf",
      weight: "950",
      style: "normal",
    },
    {
      path: "../public/gilroy/gilroy-black-italic.ttf",
      weight: "950",
      style: "italic",
    },
  ],
});

const markpro = localFont({
  src: [
    { path: '../public/fonts/markpro/mark-pro.ttf', style: 'normal' },
  ],
  variable: '--font-markpro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SlimOra - Advanced Gastric Balloon for Sustainable Weight Loss",
  description: "Discover SlimOra, a non-surgical gastric balloon system designed to help adults achieve significant weight loss through a monitored nutrition and behavior program.",
  keywords: ["SlimOra", "Allurion", "gastric balloon", "weight loss", "non-surgical weight loss", "obesity treatment", "medical device", "BMI reduction", "weight management"],
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${gilroy.variable} ${markpro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
