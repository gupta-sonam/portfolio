// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Sonam Gupta | Portfolio",
  description: "Portfolio website for Sonam Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
