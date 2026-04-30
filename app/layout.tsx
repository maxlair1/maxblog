import { Castoro, Inter, Geist_Mono, Inter_Tight } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { CommandPalette } from "../components/commandPalette";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

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
        <CommandPalette/>
        <ThemeProvider>
          <aside className="flex flex-col gap-2 p-4 color-foreground-muted">
            <small>Toggle mode<Kbd>D</Kbd></small>
            <small> 
              Command Palette{' '}
              <KbdGroup className="ml-auto">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </small>
          </aside>
          <main className="max-w-[820px] mx-auto">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
