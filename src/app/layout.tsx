import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livraria Online",
  description: "Página para busca de livros com api google books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ptbr">
      <body>{children}</body>
    </html>
  );
}
