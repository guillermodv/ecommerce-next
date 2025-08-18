# My E‑commerce (Next.js 14 + App Router + Tailwind, JS)

Proyecto de ejemplo de e-commerce con carrito simple.

## Requisitos
- Node.js 18+ (recomendado 18.17 o superior)
- npm o pnpm

## Instalación
```bash
npm install
npm run dev
```

Visita http://localhost:3000

## Estructura
- `app/` rutas con App Router (Home, Producto, Carrito)
- `components/` Navbar, ProductCard, CartContext (estado global)
- `data/products.js` datos mock
- `public/` imágenes placeholder

## Notas
- Persistencia del carrito en `localStorage`.
- Tailwind ya configurado (globals.css importado en `app/layout.js`).