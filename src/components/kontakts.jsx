function Kontakts() {
  return (
    <div className="text-[#091532] flex flex-col gap-[30px] items-center justify-center p-[30px]">
      <div className="flex flex-col gap-[6px] items-center mt-[]">
        <h1 className="lg:text-[78px] md:text-[50px] text-[30px]">
          наша команда
        </h1>
        <div className="lg:flex hidden border-[2px] border-[#E7742E] lg:w-[550px] w-[300px]"></div>
      </div>
      <h1 className="lg:w-[1000px] md:w-[600px] text-center md:text-[20px] text-[12px]">
        В команде мастеров компьютерного сервиса Geko объединились
        профессионалы, которые хорошо знают и любят свое дело. Огромный опыт,
        современная техническая база и коллективный потенциал позволяют нам
        оперативно и качественно решать любые проблемы, возникшие с вашей
        компьютерной техникой.{" "}
      </h1>
      <div className="lg:flex gap-[50px] flex-wrap flex justify-center">
        <div class="relative flex flex-col my-3 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer lg:w-96 md:w-[380px] items-center text-center">
          <div class="p-4">
          <img src="public/Photo.png" alt="" />
            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
            Сергей Александров
            </h5>
            <p class="text-slate-600 leading-normal font-light">
            Опыт работы – 10 лет
            </p>
          </div>
        </div>
        <div class="relative flex flex-col my-3 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer lg:w-96 md:w-[380px] items-center text-center">
          <div class="p-4">
          <img src="public/Photo.png" alt="" />
            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
            Сергей Александров
            </h5>
            <p class="text-slate-600 leading-normal font-light">
            Опыт работы – 10 лет
            </p>
          </div>
        </div>
        <div class="relative flex flex-col my-3 bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md rounded-lg transition-all cursor-pointer lg:w-96 md:w-[380px] items-center text-center">
          <div class="p-4">
          <img src="public/Photo.png" alt="" />
            <h5 class="mb-2 text-slate-800 text-xl font-semibold">
            Сергей Александров
            </h5>
            <p class="text-slate-600 leading-normal font-light">
            Опыт работы – 10 лет
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakts;
