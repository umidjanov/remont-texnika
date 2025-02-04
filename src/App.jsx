import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/admin/pages/home";
import Create from "./pages/admin/pages/create";
import News from "./pages/admin/pages/news";
import Update from "./pages/admin/pages/update";
import NavbarDefault from "./pages/admin/components/navbar/index";
import NewsBlog from "./pages/admin/pages/news blog";
import Blocs from "./pages/admin/pages/blocs/blocs";
import Docs from "./pages/admin/pages/docs/docs";
import Blog3 from "./components/blog.jsx";
import Blog2 from "./components/blog2.jsx";
import CreateBlog from "./pages/admin/pages/create blog/index.jsx";
import UpdateBlog from "./pages/admin/pages/update blog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavbarDefault />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/create" element={<Create />} />
        <Route path="/admin/block" element={<CreateBlog />} />
        <Route path="/admin/updateblog/:id" element={<UpdateBlog />}/>
        <Route path="/admin/newsBlock" element={<NewsBlog />} />
        <Route path="/admin/newsblog" element={<NewsBlog />}/>
        <Route path="/admin/blocks" element={<Blocs />} />
        <Route path="/admin/docs" element={<Docs />} />
        <Route path="/admin/news" element={<News />} />
        <Route path="/admin/news/:id" element={<Update />} />
        <Route path="/blog" element={<Blog3 />} />
        <Route path="/blog2" element={<Blog2 />}/>
      </Routes>
    </BrowserRouter>
  );
}
