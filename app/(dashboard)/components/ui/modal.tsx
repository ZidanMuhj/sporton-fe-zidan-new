import { FiX } from "react-icons/fi";

type TModalProps = {
  isOpen: boolean; // true / false
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, title, children }: TModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute bg-black/50 backdrop-blur-sm transition-opacity w-full h-full"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-xl w-full max-w-2xl ">
        <div className="flex justify-between items-center px-7 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-xl">{title}</h3>
          <button
            onClick={onClose}
            className="p-4 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="p-7">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
