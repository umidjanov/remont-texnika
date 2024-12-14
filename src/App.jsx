import Card from "./components/cards";
import Main from "./components/main";
import Blok from "./components/nerabotayet";
import Analyzing from "./components/sms";

export default function App() {
  return (
    <div>
      <Main />
      <div className="flex flex-wrap gap-[40px] justify-center lg:mt-[250px] mb-[100px] lg:mx-[200px]">
        <div className="flex flex-wrap lg:mt-[500px] md:mt-[400px] mt-[500px] gap-[50px] justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Blok />
      <Analyzing />
    </div>
  )
}