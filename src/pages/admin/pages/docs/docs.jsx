import NavbarDefault from "../../components/navbar";

export default function Docs() {
  return (
    <div className="flex bg-blue-gray-900 w-[100%] h-[100vh]">
      <NavbarDefault />
      <div className="flex flex-col gap-[20px] pl-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-[1286] flex fixed">
          <h1 className="pt-6 border-1 p-3 w-[1246px] font-bold">
            this is Docs page
          </h1>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
