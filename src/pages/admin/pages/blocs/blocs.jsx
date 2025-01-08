import NavbarDefault from "../../components/navbar";
import { Card } from "@material-tailwind/react";

export default function Blocs() {
  return (
    <div className="flex bg-blue-gray-900 w-[100%] h-[100%]">
      <NavbarDefault />
      <div className="flex flex-col gap-[20px] pl-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-[1286] flex fixed">
          <h1 className="pt-6 border-1 p-3 w-[1246px] font-bold">
            this is Blocs page
          </h1>
        </div>
        <div className="mt-[40px] ml-[80px] flex flex-col gap-[30px] items-center py-[80px]">
          <h1 className="text-[20px] flex gap-[10px] font-semibold text-white" style={{fontFamily: "monospace"}}>Bu yerda userdagi cardlarning <p className="text-[#ff9326]">img:</p> larini olishimiz mumkin</h1>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Komputer'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Noutbuk'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Monoblock'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Apple'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Kompyuter parametrlar'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Windows o'rnatish'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Virus o'chirish'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Internet parametrlar'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img width="250px" src="http://localhost:5173/public/Icon%20(8).png" alt="komputer" />
            <div className="flex flex-col items-start font-bold" style={{fontFamily: "monospace"}}>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'http://localhost:5173/public/Icon%20(8).png'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">'Klientlarni bog'lash'</span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  );
}
