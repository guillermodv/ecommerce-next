export const metadata = {
  title: "Vendo Vendo",
  description: "Plataforma de compra y venta de productos.",
};

import { AuthProvider } from "@/components/AuthContext";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeContext";
import "./(styles)/globals.css";
import "./init-users";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
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