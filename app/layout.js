"use client";

import "./globals.css";

import Nav from "@/components/Navigation";
import CharContextProvider from "@/Lib/charContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CharContextProvider>
          <Nav />
          {children}
        </CharContextProvider>
      </body>
    </html>
  );
}
