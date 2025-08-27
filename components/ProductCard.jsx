"use client";
import { FAVORITES_PAGE } from "@/app/constants/literals";
import Link from "next/link";
import { useFavorites } from "./FavoritesContext";

export default function ProductCard({ product }) {
  const { addToFavorites } = useFavorites();
  return (
    <div className="card p-4 flex flex-col">
      <Link href={`/product/${product.id}`} className="block">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      </Link>
      <p className="text-grey-500 text-sm flex-1">{product.description}</p>
      CONSULTE AL PRIVADO
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        <button
          className="px-3 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 hover:text-red-500"
          onClick={() => addToFavorites(product, 1)}
        >
          {FAVORITES_PAGE.ADD_TO_FAVORITES}
        </button>
      </div>
    </div>
  );
}