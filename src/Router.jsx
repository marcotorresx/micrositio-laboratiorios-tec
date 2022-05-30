import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Category from "pages/Category/Category";

export default function Router() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="" element={<Home />} />
      <Route path="category/:id" element={<Category />} />
    </Routes>
  );
}
