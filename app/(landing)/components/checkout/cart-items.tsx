"use client";

import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import Button from "../ui/button";
import { FiCreditCard, FiTrash2 } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

type TCartItems = {
  handlePayment: () => void;
};

const CartItems = ({ handlePayment }: TCartItems) => {
  const { items, removeItem } = useCartStore();
  const { push } = useRouter();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <CardWithHeader title="Cart Items">
      <div className="flex flex-col justify-between h-[calc(100%-70px)]">
        <div className="overflow-auto max-h-[300px] ">
          {items.map((item) => (
            <div
              className="border-b border-gray-200 p-4 flex gap-3"
              key={item._id}
            >
              <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
                <Image
                  src={getImageUrl(item.imageUrl)}
                  width={63}
                  height={63}
                  alt={item.name}
                  className="aspect-square object-contain"
                />
              </div>
              <div className="self-center">
                <div className="text-sm font-medium">{item.name}</div>
                <div className="flex gap-3 font-medium text-xs">
                  <div>{item.qty}x</div>
                  <div className="text-primary">
                    {priceFormatter(item.price)}
                  </div>
                </div>
              </div>
              <Button
                size="small"
                variant="ghost"
                className="w-7 h-7 p-0! self-center ml-auto"
                onClick={() => removeItem(item._id)}
              >
                <FiTrash2 />
              </Button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between font-semibold">
            <div className="text-sm">Total</div>
            <div className="text-primary text-xs">
              {priceFormatter(totalPrice)}
            </div>
          </div>
          <Button
            variant="dark"
            className="w-full mt-4"
            onClick={handlePayment}
          >
            <FiCreditCard />
            Proceed to Payment
          </Button>
        </div>
      </div>
    </CardWithHeader>
  );
};

export default CartItems;
