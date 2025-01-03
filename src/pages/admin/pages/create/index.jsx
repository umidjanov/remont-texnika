import { useState } from "react";
import { instance } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function Create() {
  const [name, setName] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [avatar, setAvatar] = useState("");
  const nav = useNavigate();

  const create = (e) => {
    e.preventDefault();
    instance
      .post("/product", { name, createAt, avatar })
      .then(() => console.log(title, desc, img), nav("/news"));
  };

  return (
    <div className="flex">
      <NavbarDefault />
      <div className="bg-blue-gray-100 ml-[-120px] w-[100%]">
        <div className="pl-[40px] bg-[#0B1427] text-white uppercase">
          <h1 className="pt-6 border-l ml-[-20px] p-3 w-full font-bold">
            this is Create page
          </h1>
        </div>

        <div className="bg-white w-[1120px] mt-[60px] h-[380px] rounded-2xl ml-[90px] m-4">
          <div className=" pl-[200px] w-[1100px] pt-[80px]">
            {/* <h1 className="text-[#E7742E] mt-[-40px] uppercase ml-[10px] font-bold">
            this is Create page
          </h1>
          <hr className="font-bold w-[700px] border-black" /> */}
            <form
              onSubmit={(e) => create(e)}
              className="flex mt-6 flex-col mr-[200px] gap-8 justify-center items-center"
            >
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
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                type="text"
                label="img"
              />
              <button className="bg-[#E7742E] rounded-lg px-[19px] text-black border-[#E7742E]">
                create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
