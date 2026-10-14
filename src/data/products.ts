// Placeholder catalog. When e-commerce is wired up, this will likely come from
// the commerce provider (e.g. Shopify Storefront API, Stripe Products) instead.
export interface Product {
  slug: string;
  name: string;
  description: string;
  /** Price in cents, to avoid floating-point rounding. */
  priceCents: number;
  available: boolean;
}

export const products: Product[] = [
  {
    slug: 'original-smoked',
    name: 'Original Smoked',
    description: 'Hickory-smoked with tamari, garlic, and black pepper.',
    priceCents: 899,
    available: false,
  },
  {
    slug: 'teriyaki',
    name: 'Teriyaki',
    description: 'Sweet and savory with ginger and toasted sesame.',
    priceCents: 899,
    available: false,
  },
  {
    slug: 'spicy-chipotle',
    name: 'Spicy Chipotle',
    description: 'Smoky chipotle, lime, and a slow-building heat.',
    priceCents: 899,
    available: false,
  },
];

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
}
