import { Route, Routes } from "react-router-dom";
import Create from "../create";
import News from "../news";
import Update from "../update";
import NavbarDefault from "../../components/navbar";

export default function Home() {
  return (
    <div className="flex">
      {/* <Routes>
                <Route path="/create" element={<Create/>}/>
                <Route path="/create" element={<Create/>}/>
                <Route path="/update" element={<Update/>}/>
                </Routes> */}
      <NavbarDefault />
      <h1 className="p-[100px]">this is Admin page</h1>
    </div>
  );
}
