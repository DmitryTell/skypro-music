import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.scss";


const fontStratosSkyeng = localFont({
  src: "./fonts/StratosSkyeng.woff",
  variable: "--font-stratos-skyeng",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Skypro Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${fontStratosSkyeng.variable}`}>
        {children}
      </body>
    </html>
  );
}
