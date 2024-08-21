import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hello world",
  description: "hello world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-layout">
          <header>This is header</header>
          <main>{children}</main>
          <footer>This is footer</footer>
        </div>
      </body>
    </html>
  );
}
