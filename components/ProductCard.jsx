"use client";
import { FAVORITES_PAGE, MESSAGE_DELIVERY } from "@/app/constants/literals";
import Link from "next/link";
import { useFavorites } from "./FavoritesContext";

export default function ProductCard({ product }) {
  const { addToFavorites } = useFavorites();
  return (
    <div className="card p-4 flex flex-col">
      <Link href={`/product/${product.id}`} className="block">
        <div className="h-48">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      </Link>
      <p className="text-grey-500 text-sm flex-1">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        <div className="flex gap-2">
          <a
            href={`${MESSAGE_DELIVERY}:%20${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 border border-slate-700 hover:bg-green-800 flex justify-center"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
          </a>
          <button
            className="px-3 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 hover:text-red-500"
            onClick={() => addToFavorites(product, 1)}
          >
            {FAVORITES_PAGE.ADD_TO_FAVORITES}
          </button>
        </div>
      </div>
    </div>
  );
}