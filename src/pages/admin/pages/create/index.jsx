import { useState } from "react";
import { instance } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function Create() {
  const [name, setName] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [createAt2, setCreateAt2] = useState("");
  const [createAt3, setCreateAt3] = useState("");
  const [createAt4, setCreateAt4] = useState("");
  const [avatar, setAvatar] = useState("");
  const [btn, setBtn] = useState("");
  const nav = useNavigate();

  const create = (e) => {
    e.preventDefault();
    instance
      .post("/news", { name, createAt, createAt2, createAt3, createAt4, avatar, btn })
      .then(() => nav("/admin/news"));
  };

  return (
    <div className="bg-blue-gray-900 w-[100%] h-[100vh] flex">
      <NavbarDefault />
      <div className="ml-[250px]">
        <div className="bg-[#050b1aef] text-white uppercase w-[1286px]">
          <h1 className="pt-6 border-l ml-[-20px] p-3 w-full font-bold pl-[80px]">
            this is Create page
          </h1>
        </div>
        <div className="bg-[#f0ffee] w-[1120px] mt-[60px] h-[480px] rounded-2xl ml-[90px] m-4">
          <div className=" pl-[200px] w-[1100px] pt-[35px]">
            {/* <h1 className="text-[#E7742E] mt-[-40px] uppercase ml-[10px] font-bold">
            this is Create page
          </h1>
          <hr className="font-bold w-[700px] border-black" /> */}
            <form
              onSubmit={(e) => create(e)}
              className="flex mt-6 flex-col mr-[200px] gap-[10px] justify-center items-center"
            >
              <Input
                className="h-[49px]"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                type="text"
                label="img"
              />
              <Input
                className="h-[49px]"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                label="title"
              />
              <Input
                className="h-[49px]"
                value={createAt}
                onChange={(e) => setCreateAt(e.target.value)}
                type="text"
                label="desc"
              />
              <Input
                className="h-[49px]"
                value={createAt2}
                onChange={(e) => setCreateAt2(e.target.value)}
                type="text"
                label="desc2"
              />
              <Input
                className="h-[49px]"
                value={createAt3}
                onChange={(e) => setCreateAt3(e.target.value)}
                type="text"
                label="desc3"
              />
              <Input
                className="h-[49px]"
                value={createAt4}
                onChange={(e) => setCreateAt4(e.target.value)}
                type="text"
                label="desc4"
              />
              <Input
                className="h-[49px]"
                value={btn}
                onChange={(e) => setBtn(e.target.value)}
                type="text"
                label="btn"
              />
              <button className="bg-[#E7742E] rounded-lg px-[21px] py-[6px] text-black border-[#E7742E]">
                create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
