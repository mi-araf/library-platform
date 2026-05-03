import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import "animate.css/animate.min.css";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: '400',
  subsets: ["latin"],
});

export const metadata = {
  title: "Araf's Library",
  description: "Your cozy online library for discovering, borrowing, and managing books with a little charm.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.className} h-full `} data-theme="light">
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
