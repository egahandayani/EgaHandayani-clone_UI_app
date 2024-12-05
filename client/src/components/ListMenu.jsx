import {
  FaShoppingCart,
  FaGift,
  FaTicketAlt,
  FaCrown,
  FaHistory,
  FaPhone,
} from "react-icons/fa";

export default function ListMenu() {
  return (
    <div className="grid grid-cols-3 gap-8 justify-items-center">
      <div className="text-center flex flex-col items-center px-4">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-green-500 mb-2">
          <FaShoppingCart className="text-white text-3xl" />
        </div>
        <p>Order</p>
      </div>
      <div className="text-center flex flex-col items-center px-4">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-orange-600 mb-2">
          <FaGift className="text-white text-3xl" />
        </div>
        <p>Redeem</p>
      </div>
      <div className="text-center flex flex-col items-center px-4">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-yellow-500 mb-2">
          <FaTicketAlt className="text-white text-3xl" />
        </div>
        <p>My Vouchers</p>
      </div>
      <div className="text-center flex flex-col items-center px-4">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-blue-600 mb-2">
          <FaCrown className="text-white text-3xl" />
        </div>
        <p>Privilege</p>
      </div>
      <div className="text-center flex flex-col items-center px-4">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gray-500 mb-2">
          <FaHistory className="text-white text-3xl" />
        </div>
        <p>History</p>
      </div>
      <div className="text-center flex flex-col items-center px-4">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-blue-400 mb-2">
          <FaPhone className="text-white text-3xl" />
        </div>
        <p>Contact Us</p>
      </div>
    </div>
  );
}
