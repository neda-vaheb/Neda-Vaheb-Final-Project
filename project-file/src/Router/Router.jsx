import {  Route, Routes } from "react-router-dom";

import PageNotFound from "../pages/404";
import Login from "../pages/Login";
import Register from "../pages/Register";

import ProductPage from "../pages/ProductPage";
import AuthProvider from "../Providers/provider";

function Router() {

  return (
    <Routes>
      
          <Route
          path=""
          element={
            <AuthProvider>
              <ProductPage />
            </AuthProvider>
          }
        />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
