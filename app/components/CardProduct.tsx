import { FC } from "react";
import Image from "next/image";

export interface Product {
  id: string;
  name: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  about: string;
  image: string;
}

export interface CartProductProps {
  product: Product;
}

const CartProduct: FC<CartProductProps> = ({ product }) => {
  return (
    <li
      key={product.id}
      className=" text-black mb-4 p-4 border rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200"
    >
      <a href={`/screen/products/pupulor/${product.id}`}>
        <div className="flex justify-center mb-4">
          <Image
            className="h-60 w-full rounded transform transition-transform duration-300 ease-in-out hover:scale-105"
            src={product.image}
            alt={product.name}
            width={500}
            height={300}
          />
        </div>
        <div className="p-2">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p>
            <strong>Model:</strong> {product.model}
          </p>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="text-blue-600">
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>About:</strong> {product.about}
          </p>
        </div>
      </a>
    </li>
  );
};

export default CartProduct;
