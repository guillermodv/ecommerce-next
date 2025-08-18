"use client";
import { useCart } from "@/components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, totals, removeFromCart, changeQty, clearCart } = useCart();

  return (
    <section className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-2 card p-4">
        <h1 className="text-2xl font-semibold mb-4">Tu carrito</h1>
        {items.length === 0 ? (
          <div className="text-slate-300">
            El carrito está vacío.{" "}
            <Link className="underline" href="/">Explora productos</Link>.
          </div>
        ) : (
          <ul className="space-y-4">
            {items.map((it) => (
              <li key={it.id} className="flex flex-col sm:flex-row items-center gap-4">
                <img src={it.image} alt={it.name} className="w-24 h-24 object-cover rounded-xl" />
                <div className="flex-1 text-center sm:text-left">
                  <div className="font-medium">{it.name}</div>
                  <div className="text-slate-400 text-sm">${it.price.toFixed(2)} c/u</div>
                  <div className="mt-2 flex justify-center sm:justify-start items-center gap-2">
                    <button className="px-2 rounded border border-slate-700" onClick={() => changeQty(it.id, it.qty - 1)}>-</button>
                    <input
                      type="number"
                      className="w-16 bg-slate-900 border border-slate-700 rounded p-1 text-center"
                      value={it.qty}
                      onChange={(e) => changeQty(it.id, Number(e.target.value || 1))}
                      min={1}
                    />
                    <button className="px-2 rounded border border-slate-700" onClick={() => changeQty(it.id, it.qty + 1)}>+</button>
                    <button className="ml-4 px-3 py-1 rounded border border-red-700 hover:bg-red-900/30" onClick={() => removeFromCart(it.id)}>
                      Quitar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <aside className="card p-4 h-max">
        <h2 className="text-xl font-semibold mb-4">Resumen</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
          <div className="flex justify-between"><span>Envío</span><span>${totals.shipping.toFixed(2)}</span></div>
          <div className="border-t border-slate-800 my-2"></div>
          <div className="flex justify-between text-lg font-bold"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
        </div>
        <button className="w-full mt-4 px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800">Finalizar compra</button>
        <button className="w-full mt-2 px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800" onClick={clearCart}>Vaciar carrito</button>
      </aside>
    </section>
  );
}