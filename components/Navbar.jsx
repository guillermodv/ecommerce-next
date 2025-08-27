"use client";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useFavorites } from "./FavoritesContext";
import { useTheme } from "./ThemeContext";
import { NAVBAR, METADATA } from "@/app/constants/literals";

export default function Navbar() {
  const { totals } = useFavorites();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold">
          {METADATA.TITLE}
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-6 items-center absolute md:static top-16 left-0 right-0 bg-white dark:bg-slate-900 md:bg-transparent p-4 md:p-0 z-50 text-slate-900 dark:text-white`}
        >
          <Link href="/" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
            {NAVBAR.PRODUCTS}
          </Link>
          <Link href="/favorites" className="relative hover:underline" onClick={() => setIsMenuOpen(false)}>
            {NAVBAR.CART}
            <span className="ml-2 rounded-full px-2 py-0.5 text-sm bg-slate-800 border border-slate-700 dark:border-slate-300">
              {totals.count}
            </span>
          </Link>
          {user ? (
            <>
              <span className="text-slate-400">{NAVBAR.GREETING}{user.name}</span>
              <button onClick={logout} className="underline">
                {NAVBAR.LOGOUT}
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                {NAVBAR.LOGIN}
              </Link>
              <Link href="/auth/register" className="hover:underline" onClick={() => setIsMenuOpen(false)}>
                {NAVBAR.REGISTER}
              </Link>
            </>
          )}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-800 border border-slate-700 dark:border-slate-300">
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0M16 8A8 8 0 104 8a8 8 0 0012 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 4a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zm-4 8a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4-4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm10-4a1 1 0 011 1v1a1 1 0 11-2 0V7a1 1 0 011-1zm-4-4a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4 10a6 6 0 1112 0 6 6 0 01-12 0zm10 0a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}