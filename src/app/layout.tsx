import CodeBackground from './components/CodeBackground';
import type { Metadata } from "next";
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './globals.scss';
import { JetBrains_Mono, Orbitron } from 'next/font/google';

export const metadata: Metadata = {
  title: "PUNEETH | MY-PORTFOLIO",
  description: "Cyberpunk Portfolio of an AI & Full-Stack Developer",
};

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono', // We'll use this variable in SCSS
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${orbitron.variable}`}>
      <body>
        <CodeBackground/>
        <Navbar/>
        {children}
        <ScrollToTop/>
      </body>
    </html>
  )
}