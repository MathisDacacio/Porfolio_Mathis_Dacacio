import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Bio from "./Components/bio";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathis DACACIO",
  description: "CV de Mathis DACACIO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
