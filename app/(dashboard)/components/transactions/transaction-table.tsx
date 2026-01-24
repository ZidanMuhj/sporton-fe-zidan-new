import priceFormatter from "@/app/utils/price-formatter";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const transactionData = [
  {
    date: "24/01/2026 15:07",
    customer: "Gibran Dayat Racing",
    contact: "+62123456789",
    total: 1500000,
    status: "Pending",
  },
  {
    date: "24/01/2026 15:07",
    customer: "Galang 98Racing",
    contact: "+62123847823",
    total: 2500000,
    status: "Rejected",
  },
  {
    date: "23/02/2026 19:32",
    customer: "Opang Miaw",
    contact: "+62283743345",
    total: 1000000,
    status: "Paid",
  },
  {
    date: "23/02/2026 19:32",
    customer: "Fahreza Skibidi Situmorang",
    contact: "+62283743345",
    total: 1000000,
    status: "Paid",
  },
  {
    date: "23/02/2026 19:32",
    customer: "Alif Syawal Liphonstore Nugraha",
    contact: "+62283743345",
    total: 1000000,
    status: "Pending",
  },
  {
    date: "23/02/2026 19:32",
    customer: "Fakhrudin Fitbar",
    contact: "+62283743345",
    total: 1000000,
    status: "Pending",
  },
  {
    date: "23/02/2026 19:32",
    customer: "Ibrahim Jetbus Syauqi",
    contact: "+62283743345",
    total: 1000000,
    status: "Rejected",
  },
];

type TTransactionTableProps = {
  onViewDetails: () => void;
};

const TransactionTable = ({ onViewDetails }: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Date</th>
            <th className="px-6 py-4 font-semibold">Customer</th>
            <th className="px-6 py-4 font-semibold">Contact</th>
            <th className="px-6 py-4 font-semibold">Total</th>
            <th className="px-6 py-4 font-semibold">Status</th>
            <th className="px-6 py-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium">{data.date}</td>
              <td className="px-6 py-4 font-medium">{data.customer}</td>
              <td className="px-6 py-4 font-medium">{data.contact}</td>
              <td className="px-6 py-4 font-medium">
                {priceFormatter(data.total)}
              </td>

              <td className="px-6 py-4 font-medium">
                <div
                  className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(
                    data.status
                  )}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="px-6 py-7.5 flex items-center gap-3 text-gray-600">
                <button
                  onClick={onViewDetails}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md"
                >
                  <FiEye size={18} />
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
