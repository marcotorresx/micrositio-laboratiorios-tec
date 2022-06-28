import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Category from "pages/Category/Category";
import Categories from "pages/Categories/Categories";
import Login from "pages/Login/Login";
import PrivateRoute from "PrivateRoute";
import ResourceForm from "pages/ResourceForm/ResourceForm";

export default function Router() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="category" element={<Category />} />

      {/* Private Routes */}
      <Route path="private" element={<PrivateRoute />}>
        <Route path="categories" element={<Categories />} />
        <Route path="resource" element={<ResourceForm />} />
      </Route>
    </Routes>
  );
}
