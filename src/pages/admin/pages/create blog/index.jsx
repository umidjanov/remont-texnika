import { useState } from "react";
import { instance } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function CreateBlog() {
  const [desk, setDesk] = useState("");
  const [avatar, setAvatar] = useState("");
  const nav = useNavigate();

  const create = (e) => {
    e.preventDefault();
    instance
      .post("/newsblog", { desk, avatar })
      .then(() => console.log(title, desc, img), nav("/admin/newsBlock"));
  };

  return (
    <div className="bg-blue-gray-900 w-[100%] h-[100vh] flex">
      <NavbarDefault />
      <div className="ml-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase">
          <h1 className="pt-6 p-3 w-[1246px] font-bold">
            this is create Blog page
          </h1>
        </div>

        <div className="bg-[#f0ffee] w-[1120px] mt-[60px] h-[480px] rounded-2xl ml-[90px] m-4">
          <div className=" pl-[200px] w-[1100px] pt-[80px]">
            <form
              onSubmit={(e) => create(e)}
              className="flex mt-6 flex-col mr-[200px] gap-8 justify-center items-center"
            >
              <Input
                className="h-[49px]"
                value={desk}
                onChange={(e) => setDesk(e.target.value)}
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
