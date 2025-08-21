import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import { PRODUCT_DETAIL } from '@/app/constants/literals';

// Mock the useFavorites hook
jest.mock('@/components/FavoritesContext', () => ({
  useFavorites: () => ({
    addToFavorites: jest.fn(),
  }),
}));

describe('ProductCard', () => {
  const product = {
    id: '1',
    name: 'Test Product',
    images: ['/test-image.jpg'],
    description: 'Test description',
    price: 123.45,
  };

  it('renders product information correctly', () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.description)).toBeInTheDocument();
    expect(screen.getByText(`${product.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText(PRODUCT_DETAIL.CONTACT_PRIVATE)).toBeInTheDocument();
  });
});
