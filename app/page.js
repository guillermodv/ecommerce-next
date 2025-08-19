import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { HOME_PAGE } from "./constants/literals";

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">{HOME_PAGE.FEATURED_PRODUCTS}</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}