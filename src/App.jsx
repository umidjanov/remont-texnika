import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/pages/home";
import Create from "./pages/admin/pages/create";
import News from "./pages/admin/pages/news";
import Update from "./pages/admin/pages/update";
import NavbarDefault from "./pages/admin/components/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/navbar" element={<NavbarDefault />} /> */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/news" element={<News />} />
        <Route path="/admin/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
