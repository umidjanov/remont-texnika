import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@material-tailwind/react";

export default function Update() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [avatar, setAvatar] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/product/${id}`).then((res) => {
      setName(res.data.name),
        setCreateAt(res.data.createAt),
        setAvatar(res.data.avatar);
    });
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    instance.put(`/product/${id}`, { name, createAt, avatar }).then(() => {
      nav("/news");
    });
  };

  return (
    <div className="bg-blue-gray-100 ml-[-120px] w-[100%]">
      <div className="pl-[40px] bg-[#0B1427] text-white uppercase">
        <h1 className="pt-6 border-l ml-[-20px] p-3 w-full font-bold">this is Update page</h1>
      </div>

      <div className="bg-white w-[1120px] mt-[60px] h-[380px] rounded-2xl ml-[90px] m-4">
        <div className=" pl-[200px] w-[1100px] pt-[80px]">
          <form
            onSubmit={(e) => update(e)}
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
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
