import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";

const bankData = [
  {
    bankName: "BCA",
    accountNumber: "123123",
    accountName: "PT SportOn Digital Indonesia",
  },
  {
    bankName: "Mandiri",
    accountNumber: "1212312313123",
    accountName: "PT SportOn Digital Indonesia",
  },
  {
    bankName: "BRI",
    accountNumber: "1123123123",
    accountName: "PT SportOn Digital Indonesia",
  },
];

const BankInfoList = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {bankData.map((data, index) => (
        <div className="bg-white rounded-lg border border-gray-200" key={index}>
          <div className="flex justify-between p-5">
            <div className="flex gap-2 items-center">
              <div className="bg-blue-50 text-blue-600 rounded w-12 h-12 flex justify-center items-center">
                <FiCreditCard size={24} />
              </div>
              <div>
                <div className="font-semibold">{data.bankName}</div>
                <div className="text-xs opacity-50">Bank Transfer</div>
              </div>
            </div>
            <div className="flex gap-2 -mt-5 text-gray-600">
              <button className="cursor-pointer">
                <FiEdit2 size={20} />
              </button>
              <button className="cursor-pointer">
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
          <div className="p-5 font-medium">
            <div className="text-xs opacity-50">ACCOUNT NUMBER</div>
            <div>{data.accountNumber}</div>
          </div>
          <div className="border-t border-gray-200 px-5 py-3 text-xs">
            <span className="opacity-50">Holder :</span> PT SportsOn Digital
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInfoList;
