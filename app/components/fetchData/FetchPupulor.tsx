import { useState, useEffect } from "react";
export interface ProductProp {
  id: number;
  name: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  about: string;
  image: string;
}

export const useFetchProducts = () => {
  const [products, setProducts] = useState<ProductProp[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data-1.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ProductProp[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};
