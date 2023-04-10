import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/Resetpassword";
import ForgotPassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import BlogList from "./pages/Bloglist";
import BlogCatList from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ProductList from "./pages/Productlist";
import BrandList from "./pages/Brandlist";
import CategoryList from "./pages/Categorylist";
import ColorList from "./pages/Colorlist";
import AddBlog from "./pages/Addblog";
import AddBlogCat from "./pages/Addblogcat";
import AddColor from "./pages/Addcolor";
import AddCat from "./pages/Addcat";
import AddBrand from "./pages/Addbrand";
import AddProduct from "./pages/AddProduct";
import "react-widgets/styles.css";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog" element={<AddBlog />} />
          <Route path="blog-category" element={<AddBlogCat />} />
          <Route path="blog-category-list" element={<BlogCatList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products" element={<AddProduct />} />
          <Route path="list-products" element={<ProductList />} />
          <Route path="brand" element={<AddBrand />} />
          <Route path="list-brand" element={<BrandList />} />
          <Route path="category" element={<AddCat />} />
          <Route path="list-category" element={<CategoryList />} />
          <Route path="color" element={<AddColor />} />
          <Route path="list-color" element={<ColorList />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
