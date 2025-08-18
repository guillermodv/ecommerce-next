export const metadata = {
  title: "My E-commerce",
  description: "E-commerce starter with Next.js 14 (App Router) + Tailwind + Auth",
};

import "./(styles)/globals.css";
import "./init-users";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "@/components/AuthContext";
import { ThemeProvider } from "@/components/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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