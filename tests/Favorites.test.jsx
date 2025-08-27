import { render, screen, fireEvent } from "@testing-library/react";
import { FavoritesProvider, useFavorites } from "@/components/FavoritesContext";
import ProductCard from "@/components/ProductCard";
import FavoritesPage from "@/app/favorites/page";
import { products } from "@/data/products";

const product = products[0];

const renderWithFavoritesProvider = (ui) => {
  return render(<FavoritesProvider>{ui}</FavoritesProvider>);
};

describe("Favorites", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should add a product to favorites", () => {
    const TestComponent = () => {
      const { addToFavorites } = useFavorites();
      return (
        <div>
          <ProductCard product={product} />
          <button onClick={() => addToFavorites(product)}>Add to Favorites</button>
        </div>
      );
    };

    renderWithFavoritesProvider(<TestComponent />);

    const addToFavoritesButton = screen.getByText("Add to Favorites");
    fireEvent.click(addToFavoritesButton);

    const favorites = JSON.parse(localStorage.getItem("favorites:v1"));
    expect(favorites).toHaveLength(1);
    expect(favorites[0].id).toBe(product.id);
  });

  it("should display products from favorites", () => {
    localStorage.setItem("favorites:v1", JSON.stringify([product]));

    renderWithFavoritesProvider(<FavoritesPage />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
  });
});
