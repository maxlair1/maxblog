import { Castoro, Inter, Geist_Mono, Inter_Tight } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const castoro = Castoro({ subsets: ['latin'], weight: '400', variable: '--font-heading' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-narrow' });
const fontMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", fontMono.variable, inter.variable, castoro.variable, interTight.variable)}
    >
      <body>
        <main className="max-w-[820px] mx-auto">
          <ThemeProvider>{children}</ThemeProvider>
        </main>
      </body>
    </html>
  )
}
