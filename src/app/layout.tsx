import type { Metadata } from "next";
import { Poppins, Paytone_One } from "next/font/google";
import "./globals.css";
import GlobalProvider from "@/components/organism/GlobalProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Codelingo",
  description: "Maybe this is on development",
  icons: {
    icon: "/images/favicon.ico",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const paytone = Paytone_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-paytone",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${paytone.variable} antialiased`}
    >
      <body>
        <GlobalProvider>
          <main className="font-poppins">{children}</main>
          <Toaster />
        </GlobalProvider>
      </body>
    </html>
  );
}
