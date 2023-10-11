import type { Metadata } from "next";
// @ts-ignore
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
// import { dark } from "@clerk/themes";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={
        {
          // baseTheme: dark,
        }
      }
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
