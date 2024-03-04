import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const font = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DomainsDB",
  description: "Registered domain names in domainsdb.info API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <main>{children}</main>  
      </body>
    </html>
  );
}
