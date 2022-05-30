import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";

export default function Router() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="" element={<Home />} />
    </Routes>
  );
}
