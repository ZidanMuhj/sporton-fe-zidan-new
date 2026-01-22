"use client";

import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageEtag } from "next/dist/server/image-optimizer";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
  handlePayment : () => void;
}

const CartItems = ({handlePayment}: TCartItems) => {
  const { items, removeItem } = useCartStore();
  const { push } = useRouter();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );
  

  return (
    <CardWithHeader title="Cart Items">
      <div className="overflow-auto max-h-[300px] justify-between h-full">
        {items.map((item) => (
          <div
            key={item._id}
            className="border-b border-gray-200 p-4 flex gap-3"
          >
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={getImageUrl(item.imageUrl)}
                width={63}
                height={63}
                alt={item.name}
                className="aspect-square object-contain"
                unoptimized
              />
            </div>
            <div className="self-center mb-5">
              <div className="text-sm font-semibold text-xs mb-1">
                {item.name}
              </div>
              <div className="flex gap-3 font-medium text-xs">
                <div>{item.qty}x</div>
                <div className="text-primary">{priceFormatter(item.price)}</div>
              </div>
            </div>
            <Button
              size="small"
              variant="ghost"
              className="w-7 h-7 p-0! mb-8 self-center ml-auto"
              onClick={() => removeItem(item._id)}
            >
              <FiTrash2 />
            </Button>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total :</div>
          <div className="text-primary text-xs ml-auto self-center">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          className="w-full h-8 mt-4"
          size="small"
          onClick={handlePayment}
        >
          <FiCreditCard size={24} />
          Proceed to Payment
        </Button>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
