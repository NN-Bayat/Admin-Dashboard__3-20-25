import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const orderData = [
  {
    id: "ORD001",
    customer: "Ahmad Sediqi",
    total: 150.75,
    status: "Pending",
    statusClass: "bg-red-100 text-red-800",
    date: "2025-01-15",
  },
  {
    id: "ORD002",
    customer: "Fatima Azimi",
    total: 320.5,
    status: "Delivered",
    statusClass: "bg-green-100 text-green-800",
    date: "2025-02-20",
  },
  {
    id: "ORD003",
    customer: "Mohammad Javid",
    total: 90.25,
    status: "Shipped",
    statusClass: "bg-blue-100 text-blue-800",
    date: "2025-03-05",
  },
  {
    id: "ORD004",
    customer: "Zahra Rahimi",
    total: 250.0,
    status: "Processing",
    statusClass: "bg-yellow-100 text-yellow-800",
    date: "2025-04-10",
  },
  {
    id: "ORD005",
    customer: "Hassan Mohseni",
    total: 180.4,
    status: "Delivered",
    statusClass: "bg-green-100 text-green-800",
    date: "2025-05-25",
  },
  {
    id: "ORD006",
    customer: "Amina Qaderi",
    total: 400.6,
    status: "Pending",
    statusClass: "bg-red-100 text-red-800",
    date: "2025-06-15",
  },
  {
    id: "ORD007",
    customer: "Karimullah Fayez",
    total: 275.3,
    status: "Delivered",
    statusClass: "bg-green-100 text-green-800",
    date: "2025-07-18",
  },
  {
    id: "ORD008",
    customer: "Nargis Haidari",
    total: 95.75,
    status: "Cancelled",
    statusClass: "bg-red-100 text-red-800",
    date: "2025-08-21",
  },
  {
    id: "ORD009",
    customer: "Omar Farooq",
    total: 310.9,
    status: "Processing",
    statusClass: "bg-yellow-100 text-yellow-800",
    date: "2025-09-12",
  },
  {
    id: "ORD010",
    customer: "Sahar Alizai",
    total: 120.0,
    status: "Shipped",
    statusClass: "bg-blue-100 text-blue-800",
    date: "2025-10-05",
  },
  {
    id: "ORD011",
    customer: "Nasir Hakimi",
    total: 215.45,
    status: "Delivered",
    statusClass: "bg-green-100 text-green-800",
    date: "2025-11-30",
  },
  {
    id: "ORD012",
    customer: "Haleema Arman",
    total: 135.8,
    status: "Pending",
    statusClass: "bg-red-100 text-red-800",
    date: "2025-12-07",
  },
  {
    id: "ORD013",
    customer: "Jamaluddin Wafa",
    total: 280.6,
    status: "Cancelled",
    statusClass: "bg-red-100 text-red-800",
    date: "2025-06-23",
  },
  {
    id: "ORD014",
    customer: "Mariam Dost",
    total: 350.25,
    status: "Shipped",
    statusClass: "bg-blue-100 text-blue-800",
    date: "2025-08-14",
  },
  {
    id: "ORD015",
    customer: "Farid Parsa",
    total: 400.0,
    status: "Delivered",
    statusClass: "bg-green-100 text-green-800",
    date: "2025-09-09",
  },
];

const OrdersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orderData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orderData.filter(
      (order) =>
        order.id.toLowerCase().includes(term) ||
        order.customer.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-2 sm:p-3 md:p-6 border border-gray-700 mb-8 max-h-[485px] overflow-auto md:max-h-[575px] md:overflow-y-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex flex-wrap gap-y-4 justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100 mr-4">Order List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider whitespace-nowrap">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide divide-gray-700">
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <span
                    className={`px-2 pb-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "Pending"
                        ? "bg-red-100 text-red-800"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Eye size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default OrdersTable;
