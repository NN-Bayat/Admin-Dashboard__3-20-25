import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Iphone 17 Pro Max",
    category: "Phone",
    img: "https://i.pinimg.com/736x/a0/c6/91/a0c6914ce9cefa3b791d6cfdc8a11721.jpg",
    price: 950.0,
    stock: 143,
    sales: 120,
  },
  {
    id: 2,
    name: "Ipad Pro 2025",
    category: "Ipad",
    img: "https://images.unsplash.com/photo-1631342616836-4b92ef6f8f46?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 799.0,
    stock: 89,
    sales: 800,
  },
  {
    id: 3,
    name: "Red Magic 10 Pro",
    category: "Phone",
    img: "https://bornilshop.com/wp-content/uploads/2024/11/ZTE-nubia-Red-Magic-10-Pro.jpg",
    price: 770.0,
    stock: 210,
    sales: 50,
  },
  {
    id: 4,
    name: "PS 5",
    category: "Game",
    img: "https://i.pinimg.com/736x/37/35/d3/3735d3bc8c50d9aa945b38e97fb64f9e.jpg",
    price: 230.0,
    stock: 78,
    sales: 8,
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Watch",
    img: "https://i.pinimg.com/736x/05/75/28/057528cbe541690784909d503d5fdfb5.jpg",
    price: 199.99,
    stock: 56,
    sales: 650,
  },
  {
    id: 6,
    name: "Nintendo Switch",
    category: "Game",
    img: "https://i.pinimg.com/736x/37/35/d3/3735d3bc8c50d9aa945b38e97fb64f9e.jpg",
    price: 200.0,
    stock: 50,
    sales: 20,
  },
  {
    id: 7,
    name: "Gaming Laptop",
    category: "Laptop",
    img: "https://images.unsplash.com/photo-1631342616836-4b92ef6f8f46?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200.0,
    stock: 30,
    sales: 5,
  },
  {
    id: 8,
    name: "Xbox Series X",
    category: "Game",
    img: "https://i.pinimg.com/736x/37/35/d3/3735d3bc8c50d9aa945b38e97fb64f9e.jpg",
    price: 250.0,
    stock: 65,
    sales: 12,
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-2 sm:p-3 md:p-6 border border-gray-700 mb-8 max-h-[485px] overflow-auto md:max-h-[565px] md:overflow-y-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex flex-wrap gap-y-4 justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100 whitespace-nowrap mr-4">
          Product List
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center mr-10">
                  <img
                    src={product.img}
                    alt="Product img"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.category}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
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
export default ProductsTable;
