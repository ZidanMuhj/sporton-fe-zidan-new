"use client";

import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";
import { Product } from "@/app/types";
import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";

type TProductsProps = {
  products: Product[];
};

const ProductsSection = ({ products }: TProductsProps) => {
  const { addItem } = useCartStore();

  const handleAddtocart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    e.preventDefault();
    addItem(product);
  };

  return (
    <section id="products-section" className="container mx-auto mt-25 mb-52">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Link
            href={`/product/${product._id}`}
            key={product._id}
            className="p-1.5 bg-white hover:shadow-xl duration-300"
          >
            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={200}
                height={300}
                className="aspect-square oobject-contain"
                unoptimized={true}
              />
              <button
                className=" text-white bg-primary w-10 h-10 p-2! absolute right-3 top-3"
                onClick={(e) => handleAddtocart(e, product)}
              >
                <FiPlus className="" size={24} />
              </button>
            </div>
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between mb-5">
              <div className="text-gray-500">{product.category.name}</div>
              <div className="font-medium text-primary">
                {priceFormatter(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
