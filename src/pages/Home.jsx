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
import { Avatar } from "@material-tailwind/react";

export default function Home() {
  return (
    <div>
      <Main />
      <div className="flex flex-wrap gap-[40px] justify-center lg:mt-[250px] mb-[100px] lg:mx-[200px]">
        <div className="flex flex-wrap lg:mt-[500px] md:mt-[400px] mt-[500px] gap-[50px] justify-center">
          <Card value={"name, createAt, avatar"}/>
          <Card value={"name, createAt, avatar"}/>
         
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
