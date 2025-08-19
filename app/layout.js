import { LANG, METADATA } from "./constants/literals";

export const metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
};

import { AuthProvider } from "@/components/AuthContext";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeContext";
import "./(styles)/globals.css";
import "./init-users";

export default function RootLayout({ children }) {
  return (
    <html lang={LANG} className="dark">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <main className="container py-8">{children}</main>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}