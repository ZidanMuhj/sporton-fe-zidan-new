import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const productData = [
  {
    name: "SportOn Product 1",
    imageUrl: "/images/products/product-1.png",
    category: "Running",
    price: 289000,
    stock: 3,
  },
  {
    name: "SportOn Product 2",
    imageUrl: "/images/products/product-2.png",
    category: "Running",
    price: 229000,
    stock: 5,
  },
  {
    name: "SportOn Product 3",
    imageUrl: "/images/products/product-3.png",
    category: "Running",
    price: 350000,
    stock: 10,
  },
];

const ProductTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Product</th>
            <th className="px-6 py-4 font-semibold">Category</th>
            <th className="px-6 py-4 font-semibold">Price</th>
            <th className="px-6 py-4 font-semibold">Stock</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">
                <div className="flex gap-2 items-center">
                  <div className="aspect-square bg-gray-100 rounded-md">
                    <Image
                      src={data.imageUrl}
                      width={52}
                      height={52}
                      alt={data.name}
                      className="aspect-square object-contain"
                    />
                  </div>
                  <span>{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                <div className="rounded-md bg-gray-200 px-2 py-1 w-fit">
                  {data.category}
                </div>
              </td>
              <td className="px-6 py-4 font-medium">
                {priceFormatter(data.price)}
              </td>
              <td className="px-6 py-4 font-medium">{data.stock} units</td>
              <td className="px-6 py-7.5 flex items-center gap-3 text-gray-600">
                <button>
                  <FiEdit2 size={20} />
                </button>
                <button>
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
