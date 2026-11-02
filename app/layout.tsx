import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RepoVault | Private GitHub Portfolio",
  description:
    "A controlled gateway for showcasing selected private GitHub projects."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
