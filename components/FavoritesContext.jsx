"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [items, setItems] = useState([]);

  // hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("favorites:v1");
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("favorites:v1", JSON.stringify(items));
    } catch {}
  }, [items]);

  const addToFavorites = (product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromFavorites = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const changeQty = (id, qty) => {
    setItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
    );
  };

  const clearFavorites = () => setItems([]);
  const shippingCost = 0;
  const totals = useMemo(() => {
    const count = items.reduce((acc, it) => acc + it.qty, 0);
    const subtotal = items.reduce((acc, it) => acc + it.qty * it.price, 0);
    let shipping = subtotal > 0 ? shippingCost : 0;
    const total = subtotal + shipping;
    return { count, subtotal, shipping, total };
  }, [items]);

  const value = { items, addToFavorites, removeFromFavorites, changeQty, clearFavorites, totals };
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export const useFavorites = () => useContext(FavoritesContext);