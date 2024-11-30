import type { Metadata } from "next";
import { Poppins, Baloo_2 } from "next/font/google";
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

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} ${baloo2.variable} antialiased`}
    >
      <body>
        <GlobalProvider>
          <main className="font-baloo2">{children}</main>
          <Toaster />
        </GlobalProvider>
      </body>
    </html>
  );
}
