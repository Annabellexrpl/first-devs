import "./css/style.css";
import Script from 'next/script'

import localFont from "next/font/local";
import Header from "@/components/ui/header";

const press2P = localFont({
  src: [
    {
      path: "../public/fonts/PressStart2P-Regular.ttf",
      weight: "100",
      style: "normal",
    }
  ],
  variable: "--font-press2P",
  display: "swap",
});

export const metadata = {
  title: "First Devs",
  description: "A Defi market place for developers on the XRP Ledger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>
      <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8YM6P4B4XL"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8YM6P4B4XL');
          `}
        </Script>
    </head>
      <body
        className={`${press2P.variable} bg-transparent font-inter text-base text-gray-200 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
