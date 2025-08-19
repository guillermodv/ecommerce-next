"use client";
import { useCart } from "@/components/CartContext";
import { products } from "@/data/products";
import Link from "next/link";
import { useMemo } from "react";

export default function ProductDetail({ params }) {
  const product = useMemo(
    () => products.find((p) => p.id === params.id),
    [params.id]
  );

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="card p-6">
        <p>Producto no encontrado.</p>
        <Link className="underline mt-4 inline-block" href="/">Volver</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="card p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
        />
      </div>
      <div className="card p-6">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-slate-300 mt-2">{product.description}</p>
        <div className="mt-4 text-3xl font-bold">${product.price.toFixed(2)}</div>
        <div className="mt-6 flex gap-3">
          {false && (
            <>
              <button
                className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800"
                onClick={() => addToCart(product, 1)}
              >
                Añadir al carrito
              </button>
              <Link href="/cart" className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800">
                Ver carrito
              </Link>
            </>
          )}
          Consulte al privado.
        </div>
      </div>
    </div>
  );
}