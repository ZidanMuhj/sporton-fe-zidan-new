import OrderConfirmed from "../../components/order-status/order-confirmed";
import { getTransactionById } from "@/app/services/transaction-service";
import { TPageProps } from "../../product/[id]/page";
import OrderRejected from "../../components/order-status/order-rejected";
import OrderSubmitted from "../../components/order-status/order-submited";

const OrderStatus = async ({ params }: TPageProps) => {
  const { id } = await params;
  const transaction = await getTransactionById(id);
  console.log("transaction", transaction);
  

  return (
    <main className="bg-gray-100 min-h-[80vh] pb-24">
      <div className="max-w-5xl mx-auto pt-20">
        <h1 className="text-5xl font-bold text-center mb-11">Order Status</h1>
      </div>
    {transaction.status === "pending" && <OrderSubmitted/>}
    {transaction.status === "paid" && <OrderConfirmed/>}
    {transaction.status === "rejected" && <OrderRejected/>}
    </main>
  );
};

export default OrderStatus;
