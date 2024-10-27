import type { Metadata } from "next";
import "./globals.css";
import { geist, gtEestiPro } from "@/app/fonts/exports";

export const metadata: Metadata = {
  title: "ToneAI",
  description: "Start understanding what people really mean",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gtEestiPro.variable} ${geist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
