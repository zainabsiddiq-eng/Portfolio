import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zainab | Full Stack Developer",
  description:
    "Portfolio of Zainab — Full Stack Developer with 7+ years in software development and 4+ years in digital marketing. Specializing in Next.js, Node.js, Python, Django, FastAPI, and SEO.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Django",
    "FastAPI",
    "SEO",
    "Digital Marketing",
    "Zainab",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-full flex flex-col antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
