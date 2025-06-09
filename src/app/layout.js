// app/layout.js
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Sonam Gupta | Portfolio",
  description: "Portfolio website for Sonam Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
