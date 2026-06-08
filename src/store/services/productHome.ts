import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/interfaces/productoHome.interface";

export interface ProductsResponse {
  products: Product[];
}

const fetchProducts = async (): Promise<ProductsResponse> => {
  try {
    const response = await fetch("/src/mocks/home/products.json");
        if (!response.ok) {
            throw new Error("Error trayendo productos!");
        }
    const data: unknown = await response.json();
        if (!data || typeof data !== "object") {
            throw new Error("Formato de respiesta invalido!");
        }   
    const productsResponse = data as ProductsResponse;
        if (!Array.isArray(productsResponse.products)) {
            throw new Error("La lista de productos no es valida!");
        }
    console.log(productsResponse);
    
    return productsResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetProducts = () => {
  return useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
