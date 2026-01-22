"use client"

import Image from "next/image"
import Button from "../ui/button"
import { FiAlertCircle, FiRefreshCw } from "react-icons/fi"

const OrderRejected = () => {
   const reloadOrderStatus =() =>{
      window.location.reload();
   };
   return (
      <div className="bg-white w-160 p-16 flex flex-col justify-center items-center mx-auto ">
         <div className="w-20 h-20 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary mb-5"><FiAlertCircle/></div>
         <h2 className="text-2xl font-semibold">Order Rejected</h2>
         <p className="text-center mb-8">Your order is rejected.</p>
      </div>
   );
};
export default OrderRejected;