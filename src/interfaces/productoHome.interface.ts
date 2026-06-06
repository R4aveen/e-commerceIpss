export interface ProductImage {
  src: string;
  alt: string;
  role: string;
}

export interface ProductVariant {
  id: string;
  color: string;
  swatch_hex: string;
  image_src: string;
}

export interface Product {
  id: number;
  handle: string;
  title: string;
  type: string;
  badge: string | null;
  sale_badge: string;
  rating: number | null;
  reviews_count: number;
  price: number;
  compare_at_price: number;
  href: string;
  images: ProductImage[];
  variants: ProductVariant[];
}