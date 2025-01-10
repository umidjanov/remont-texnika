import Card from "../components/cards";
import Main from "../components/main";
import Blok from "../components/nerabotayet";
import Sms2 from "../components/sms2";
import Analyzing from "../components/sms";
import Blog from "../components/blog";
import Block3 from "../components/itvizKlient";
import Kontakts from "../components/kontakts";
import Jaloba from "../components";
import Information from "../components/malumot";
import Footer from "../components/footer";
// import { Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { instance } from "./admin/utils/axios";

export default function Home() {
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
  
  return (
    <div>
      <Main />
      <div className="flex flex-wrap gap-[40px] justify-center lg:mt-[250px] mb-[100px] lg:mx-[200px]">
        <div className="flex flex-wrap lg:mt-[500px] md:mt-[400px] mt-[500px] gap-[50px] justify-center">
          {/* <Card name="name" createAt="sana" avatar="ava" /> */}
          <Card news={news} name="name" createAt="sana" createAt2="sanaaaa" createAt3="sanaaa" createAt4="sanaa" avatar="ava" />
        </div>
      </div>
      <Blok />
      <Analyzing />
      <Sms2 />
      <Blog />
      <Block3 />
      <Kontakts />
      <Jaloba />
      <Information />
      <Footer />
    </div>
  );
}
