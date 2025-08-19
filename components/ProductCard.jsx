"use client";
import { PRODUCT_DETAIL } from "@/app/constants/literals";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
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
      <p className="text-slate-300 text-sm flex-1">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        {/* <button
          className="px-3 py-2 rounded-xl border border-slate-700 hover:bg-slate-800"
          onClick={() => addToCart(product, 1)}
        >
          
        </button> */}
        {PRODUCT_DETAIL.CONTACT_PRIVATE}
      </div>
    </div>
  );
}