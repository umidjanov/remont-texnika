import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function UpdatBloge() {
  const { id } = useParams();
  const [desk, setDesk] = useState("");
  const [avatar, setAvatar] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    instance.get(`/newsblog/${id}`).then((res) => {
      setDesk(res.data.desk),
      setAvatar(res.data.avatar);
    });
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    instance.put(`/newsblog/${id}`, { desk, avatar }).then(() => {
      nav("/admin/newsblog");
    })
  };

  return (
    <div className="bg-blue-gray-900 w-[100%] h-[100vh] flex">
      <NavbarDefault />
      <div className="pl-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-[1286px]">
          <h1 className="pt-6 border-1  p-3 w-full font-bold">
            this is Update blog page
          </h1>
        </div>
        {/* <div className="bg-[#f0ffee] w-[1120px] mt-[60px] h-[480px] rounded-2xl ml-[90px] m-4">
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
        </div> */}
        <div className="bg-[#f0ffee] w-[1120px] mt-[60px] h-[480px] rounded-2xl ml-[90px] m-4">
          <div className=" pl-[200px] w-[1100px] pt-[80px]">
            <form
              onSubmit={(e) => update(e)}
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
              <button type="submit" className="bg-[#E7742E] rounded-lg px-[21px] py-[6px] text-black border-[#E7742E]">
                update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
