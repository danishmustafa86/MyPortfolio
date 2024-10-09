import localFont from "next/font/local";
import "./globals.css";
import "./page.module.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
