import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const toUse = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa para venda Itapevi",
  description:
    "Site para a venda de uma casa no municipio de Itapevi, no bairro Cezar Bertozzi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={toUse.className}>{children}</body>
    </html>
  );
}
