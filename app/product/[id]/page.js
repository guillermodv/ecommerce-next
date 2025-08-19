"use client";
import { useCart } from "@/components/CartContext";
import { products } from "@/data/products";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PRODUCT_DETAIL } from "@/app/constants/literals";

export default function ProductDetail({ params }) {
  const product = useMemo(
    () => products.find((p) => p.id === params.id),
    [params.id]
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="card p-6">
        <p>{PRODUCT_DETAIL.NOT_FOUND}</p>
        <Link className="underline mt-4 inline-block" href="/">{PRODUCT_DETAIL.GO_BACK}</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="card p-4 relative">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
        />
        {product.images.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prevIndex) =>
                    (prevIndex - 1 + product.images.length) %
                    product.images.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/50 text-white p-2 rounded-full"
            >
              &#10094;
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex(
                  (prevIndex) => (prevIndex + 1) % product.images.length
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/50 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </>
        )}
      </div>
      <div className="card p-6">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-slate-300 mt-2">{product.description}</p>
        <div className="mt-4 text-3xl font-bold">
          ${product.price.toFixed(2)}
        </div>
        <div className="mt-6 flex gap-3">
          {false && (
            <>
              <button
                className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800"
                onClick={() => addToCart(product, 1)}
              >
                {PRODUCT_DETAIL.ADD_TO_CART}
              </button>
              <Link
                href="/cart"
                className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800"
              >
                {PRODUCT_DETAIL.VIEW_CART}
              </Link>
            </>
          )}
          {PRODUCT_DETAIL.CONTACT_PRIVATE}
        </div>
      </div>
    </div>
  );
}