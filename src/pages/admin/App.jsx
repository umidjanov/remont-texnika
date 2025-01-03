import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import { NavbarDefault } from "./components/navbar";
import Update from "./pages/update";
import Create from "./pages/create";

export default function App() {
  return (
    <div className="flex gap-[100px]">
      <NavbarDefault/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/news/:id" element={<Update/>}/>
      </Routes>
    </div>
  );
}
