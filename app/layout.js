"use client";

import "./globals.css";

import Nav from "@/components/Navigation";
import CharContextProvider from "@/Lib/charContext";
import AuthContextProvider from "@/Lib/authContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <CharContextProvider>
            <Nav />
            {children}
          </CharContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
