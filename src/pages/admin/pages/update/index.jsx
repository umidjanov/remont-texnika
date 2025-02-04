import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function Update() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [createAt2, setCreateAt2] = useState("");
  const [createAt3, setCreateAt3] = useState("");
  const [createAt4, setCreateAt4] = useState("");
  const [avatar, setAvatar] = useState("");
  const [btn, setBtn] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/news/${id}`).then((res) => {
      setName(res.data.name),
        setCreateAt(res.data.createAt),
        setCreateAt2(res.data.createAt2),
        setCreateAt3(res.data.createAt3),
        setCreateAt4(res.data.createAt4),
        setAvatar(res.data.avatar);
      setBtn(res.data.btn);
    });
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    instance.put(`/news/${id}`, { name, createAt, createAt2, createAt3, createAt4, avatar, btn }).then(() => {
      nav("/admin/news");
    });
  };

  return (
    <div className="bg-blue-gray-900 w-[100%] h-[100vh] flex">
      <NavbarDefault />
      <div className="pl-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-[1286px]">
          <h1 className="pt-6 border-1  p-3 w-full font-bold">
            this is Update page
          </h1>
        </div>
        <div className="bg-[#f0ffee] w-[1120px] mt-[60px] h-[480px] rounded-2xl ml-[90px] m-4">
          <div className=" pl-[200px] w-[1100px] pt-[30px]">
            <form
              onSubmit={(e) => update(e)}
              className="flex mt-6 flex-col mr-[200px] gap-[12px] justify-center items-center"
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
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                type="text"
                label="img"
              />
              <Input
                className="h-[49px]"
                value={btn}
                onChange={(e) => setBtn(e.target.value)}
                type="text"
                label="btn"
              />
              <button className="bg-[#E7742E] rounded-lg px-[19px] text-black border-[#E7742E] p-[8px]">
                update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
