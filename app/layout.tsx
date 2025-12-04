import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const serif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Global Expansion Blueprint | LumiHome",
  description:
    "Comprehensive go-to-market plan for expanding smart home solutions into high-growth international markets."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={classNames(inter.variable, serif.variable)}>
      <body className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100 text-base dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <ThemeProvider>
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-12">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
