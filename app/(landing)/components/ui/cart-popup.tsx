import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import Button from "./button";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/app/hooks/use-cart-store";
import { getImageUrl } from "@/app/lib/api";

export const cartlist = [];

const CartPopup = () => {
  const { push } = useRouter();
  const { items, removeItem } = useCartStore();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  console.log("cradt item", items);

  const handleCheckout = () => {
    push("/checkout");
  };

  return (
    <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black/10 border border-gray-200 w-90">
      <div className="p-4 border-b border-gray-200 font-bold text-center">
        Shopping Cart
      </div>
      {items.length ? (
        items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 p-4 flex gap-3">
            <div className="bg-primary-light aspect-square w-16 flex justify-center items-center">
              <Image
                src={getImageUrl(item.imageUrl)}
                width={63}
                height={63}
                alt={item.name}
                unoptimized
                className="aspect-square object-contain"
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
        ))
      ) : (
        <div className="text-center py-5 opacity-50">
          Shopping Cart is empty
        </div>
      )}
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between font-semibold">
          <div className="text-sm">Total :</div>
          <div className="text-primary text-xs ml-auto self-center">
            {priceFormatter(totalPrice)}
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="w-full h-8 mt-4"
          onClick={handleCheckout}
        >
          Checkout Now <FiArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default CartPopup;
