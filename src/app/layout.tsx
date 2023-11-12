import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { UserContextProvider } from "./context/userContext";
import "./globals.css";
import { ThemeContextProvider } from "./context/themeContext";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Github Search App",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <body className={spaceMono.className}>
          <UserContextProvider>{children}</UserContextProvider>
        </body>
      </ThemeContextProvider>
    </html>
  );
}
