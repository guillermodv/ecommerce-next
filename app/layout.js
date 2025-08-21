import { LANG, METADATA } from "./constants/literals";

export const metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
};

import { AuthProvider } from "@/components/AuthContext";
import { FavoritesProvider } from "@/components/FavoritesContext";
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
            <FavoritesProvider>
              <Navbar />
              <main className="container py-8">{children}</main>
            </FavoritesProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}