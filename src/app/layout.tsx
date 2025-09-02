import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "JLGRABE.COM - NAVIGATOR",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        {children}
        <Analytics />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
