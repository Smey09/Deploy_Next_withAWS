import { useState, useEffect } from "react";

interface ProductData {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  iconText: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/data-2.json`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: ProductData[] = await response.json();
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

export default useProducts;
