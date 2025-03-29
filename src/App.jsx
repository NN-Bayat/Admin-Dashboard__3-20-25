import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        <Route path="/Admin-Dashboard__3-20-25/" element={<OverviewPage />} />
        <Route path="/Admin-Dashboard__3-20-25/products" element={<ProductsPage />} />
        <Route path="/Admin-Dashboard__3-20-25/users" element={<UsersPage />} />
        <Route path="/Admin-Dashboard__3-20-25/sales" element={<SalesPage />} />
        <Route path="/Admin-Dashboard__3-20-25/orders" element={<OrdersPage />} />
        <Route path="/Admin-Dashboard__3-20-25/analytics" element={<AnalyticsPage />} />
        <Route path="/Admin-Dashboard__3-20-25/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
};

export default App;
