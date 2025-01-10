import NavbarDefault from "../../components/navbar";
import { Card } from "@material-tailwind/react";

export default function Blocs() {
  return (
    <div className="flex bg-blue-gray-900 w-[100%] h-[100%]">
      <NavbarDefault />
      <div className="flex flex-col gap-[20px] pl-[250px]">
        <div className="pl-[40px] bg-[#050b1aef] text-white uppercase w-[1286] flex fixed">
          <h1 className="pt-6 border-1 p-3 w-[1400px] font-bold">
            this is Blocs page
          </h1>
        </div>
        <div className="mt-[40px] ml-[110px] flex flex-col gap-[30px] items-center py-[80px]">
          <h1
            className="text-[20px] flex gap-[10px] font-semibold text-white"
            style={{ fontFamily: "monospace" }}
          >
            Bu yerda userdagi cardlarning <p className="text-[#ff9326]">img:</p>{" "}
            larini olishimiz mumkin
          </h1>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="150px"
              className="ml-[40px]"
              src="http://localhost:5173/public/Computers.svg"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[40px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Computers.svg'
                  </span>
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
            <img
              width="120px"
              className="ml-[45px]"
              src="http://localhost:5173/public/Notebooks.svg"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[55px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Notebooks.svg'
                  </span>
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
            <img
              width="135px"
              className="ml-[45px]"
              src="http://localhost:5173/public/Monoblocks.svg"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[60px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Monoblocks.svg'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Monoblock'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="50px"
              className="ml-[40px]"
              src="http://localhost:5173/public/Apple.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[10px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Apple.png'
                  </span>
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
            <img
              width="80px"
              className="ml-[40px]"
              src="http://localhost:5173/public/Upgrade.svg"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[30px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Upgrade.svg'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Kompyuter parametrlar'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="70px"
              className="ml-[40px]"
              src="http://localhost:5173/public/Windows.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[35px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Windows.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Windows o'rnatish'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="115px"
              className="ml-[20px]"
              src="http://localhost:5173/public/Viruses.svg"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[4px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Viruses.svg'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Virus o'chirish'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="90px"
              className="ml-[35px]"
              src="http://localhost:5173/public/Internet.svg"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[35px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Internet.svg'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Internet parametrlar'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[50px]"
              src="http://localhost:5173/public/Corporate.svg"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[50px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/public/Corporate.svg'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Klientlarni bog'lash'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[70px]"
              src="http://localhost:5173/src/media/Komputer.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[90px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/src/media/Komputer.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Noutbukni ta'mirlash uchun toliq malumot'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[70px]"
              src="http://localhost:5173/src/media/Chasi.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[90px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/src/media/Chasi.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Wifi tezligini pasayishining asosiy sababi'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[55px]"
              src="http://localhost:5173/src/media/Microb.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[55px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/src/media/Microb.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Viruslar haqida qisqacha malumot'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[93px]"
              src="	http://localhost:5173/src/media/Komputer2.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[130px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    ' http://localhost:5173/src/media/Komputer2.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Zaxira tizimi o'zi nima?'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[45px]"
              src="	http://localhost:5173/src/media/Klava.png
"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[35px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/src/media/Klava.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Zaxira tizimi o'zi nima?'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[52px]"
              src="	http://localhost:5173/src/media/Vodka.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[50px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    '	http://localhost:5173/src/media/Vodka.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Noutbukga suv tokilsa muammolar toplami'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[55px]"
              src="http://localhost:5173/src/media/Texnika.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[60px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/src/media/Texnika.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'D diskdagi daniylar toplami'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[55px]"
              src="	http://localhost:5173/src/media/Mediki.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[60px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    '	http://localhost:5173/src/media/Mediki.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Kompyuter ustalari haqida malumotlar'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
            </div>
          </card>
          <card className="flex justify-around w-[1050px] h-[100px] items-center rounded-[10px] cursor-text bg-[#0a133c8f] hover:border-[2px] border-[aqua] transition-[0.01] shadow-md shadow-[#ffffff18]">
            <img
              width="80px"
              className="ml-[39px]"
              src="		http://localhost:5173/src/media/Trubi.png"
              alt="komputer"
            />
            <div
              className="flex flex-col items-start font-bold ml-[30px]"
              style={{ fontFamily: "monospace" }}
            >
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">img:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'http://localhost:5173/src/media/Trubi.png'
                  </span>
                  <span className="text-[17px] text-white">,</span>
                </div>
              </div>
              <div className="flex gap-[10px]">
                <span className="text-[17px] text-[#ff2395]">title:</span>
                <div className="flex">
                  <span className="text-[17px] text-[#75c124]">
                    'Serverlar bilan boglanib qolishlar'
                  </span>
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
