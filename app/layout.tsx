import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { inter } from "@/lib/fonts";
import ToggleTheme from "@/components/toggle-theme";
import { colorBackground } from "@/utils/color-vars";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "balancio.",
  description:
    "balancio. — это персонализированный помощник по питанию, который помогает находить баланс между калориями, БЖУ и образом жизни, основываясь на твоих данных: возраст, вес, рост, активность и пол.",
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
          <>
            <Header />
            <main className="max-w-screen-2xl mx-auto px-5">{children}</main>
          </>
          <ToggleTheme />
        </ThemeProvider>
      </body>
    </html>
  );
}
