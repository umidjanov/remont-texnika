import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    instance
      .get("/news")
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  const deleted = async (id) => {
    try {
      await instance.delete(`/news/${id}`);
      setNews(news.filter((news) => news.id !== id));
    } catch (error) {
      console.error("Error deleting news:", error);
    }
  };

  return (
    <div className="bg-blue-gray-900 w-[100%] h-[100%] flex">
      <NavbarDefault />
      <div className="flex flex-col ml-[250px] bg-blue-gray-900">
        <div className="bg-[#050b1aef] text-white uppercase w-[1286px] fixed">
          <h1 className="pt-6 ml-[17px] p-3 w-full font-bold pl-[80px]">
            this is News page
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col gap-[20px] p-[30px] flex-wrap mt-[80px]">
          <div className="flex gap-[40px] px-[44px] flex-wrap">
            {news?.map((news) => (
              <div
                key={news?.id}
                className="shadow-2xl rounded-xl bg-white w-[250px] p-[20px] flex flex-col gap-[20px] items-center"
              >
                <img width="120px" src={news?.avatar} alt="" />
                <div className="flex flex-col gap-[10px]">
                  <h1 className="text-center text-[22px] font-bold">
                    {news?.name}
                  </h1>
                  <div className="flex flex-col gap-[10px] items-start">
                    <h3 className="text-center text-[12px]">
                      {news?.createAt}
                    </h3>
                    <h2 className="text-center text-[12px]">
                      {news?.createAt2}
                    </h2>
                    <h1 className="text-center text-[12px]">
                      {news?.createAt3}
                    </h1>
                    <h4 className="text-center text-[12px]">
                      {news?.createAt4}
                    </h4>
                  </div>
                  <h3 className="text-center text-[17px] px-[20px] py-[8px] rounded-lg bg-[#DEDEDE]">
                    {news?.btn}
                  </h3>
                </div>
                <div className="flex gap-[10px]">
                  <Link to={`/admin/news/${news?.id}`}>
                    <Button className="flex m-auto bg-[#E7742E] text-black border-[#E7742E] py-[10px]">
                      update
                    </Button>
                  </Link>
                  <Button
                    className="flex m-auto bg-[#E7742E] text-black border-[#E7742E] py-[10px]"
                    onClick={() => deleted(news?.id)}
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
