import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function NewsBlog() {
  const [newsblog, setNewsblog] = useState([]);

  useEffect(() => {
    instance
      .get("/newsblog")
      .then((res) => {
        setNewsblog(res.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  const deleted = async (id) => {
    try {
      await instance.delete(`/newsblog/${id}`);
      setNewsblog(newsblog.filter((newsblog) => news.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <div className="bg-blue-gray-900 w-[100%] h-[100vh] flex">
      <NavbarDefault />
      <div className="flex flex-col ml-[250px]">
        <div className="bg-[#050b1aef] text-white uppercase w-[1789px] fixed">
          <h1 className="pt-6 ml-[20px] p-3 w-full font-bold pl-[80px]">
            this is News blog page
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col gap-[20px] p-[30px]">
          <div className="flex gap-[20px] flex-wrap px-[74px] pt-[70px]">
            {newsblog?.map((newsblog) => (
              <div
                key={newsblog?.id}
                className="shadow-2xl rounded-xl bg-white w-[250px] p-[20px] flex flex-col gap-[10px]"
              >
                <img src={newsblog?.avatar} alt="" />
                <div>
                  <h3 className="text-center text-[12px]">{newsblog?.desk}</h3>
                </div>
                <div className="flex flex-col gap-4 ">
                  <Link to={`/admin/news/${newsblog?.id}`}>
                    <Button className="flex m-auto bg-[#E7742E] py-[-6px] text-black border-[#E7742E] p-[10px]">
                      update
                    </Button>
                  </Link>
                  <Button
                    className="flex m-auto bg-[#E7742E] py-[-6px] text-black border-[#E7742E] p-[10px]"
                    onClick={() => deleted(newsblog?.id)}
                  >
                    delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
