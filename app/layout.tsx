import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "@/lib/fonts";
import ToggleTheme from "@/components/toggle-theme";
import { colorBackground } from "@/utils/color-vars";

export const metadata: Metadata = {
  title: "Balancio",
  description:
    "Ваш идеальный рацион — по одному клику. На основе ваших данных, целей и образа жизни",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${inter.className} antialiased ${colorBackground}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <ToggleTheme />
        </ThemeProvider>
      </body>
    </html>
  );
}
