export default function Mail() {
  return (
    <div>
      <div>
        <div className="absolute">
          <img
            className="lg:hidden md:hidden w-[445px]"
            src="public/Top block.png"
            alt=""
          />
        </div>
        <div className="lg:flex md:flex hidden">
          <div className="absolute">
            <img
              className="lg:h-full md:h-[360px]"
              src="public/homePage.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col lg:gap-[50px] md:gap-[20px] lg:mx-[200px] md:mx-[100px] absolute text-white lg:my-[50px] md:my-[20px]">
            <div className="flex justify-center items-center lg:gap-[220px] md:gap-[90px]">
              <img
                className="cursor-pointer lg:w-[190px] md:w-[100px]"
                src="public/white.png"
                alt=""
              />
              <div className="flex flex-col gap-[7px] lg:w-[1000px] md:w-[500px]">
                <div
                  id="div"
                  className="flex lg:gap-[20px] md:gap-[16px] items-center text-[24px] font-bold"
                >
                  <img
                    className="lg:w-[30px] md:w-[25px]"
                    src="public/Top-arrow-right.png"
                    alt=""
                  />
                  <h1 className="lg:text-[25px] md:text-[16px]">
                    +998 135-45-47
                  </h1>
                  <img
                    className="lg:flex hidden lg:w-[30px]"
                    src="public/Top-arrow-right.png"
                    alt=""
                  />
                  <h1 className="lg:flex hidden">+998 318-70-14</h1>
                  <img
                    className="cursor-pointer"
                    src="public/Social media.png"
                    alt=""
                  />
                  <img
                    className="lg:w-[33px] cursor-pointer md:w-[22px]"
                    src="public/Instagram.png"
                    alt=""
                  />
                  <img
                    className="lg:w-[33px] cursor-pointer md:w-[22px]"
                    src="public/Whatsapp.png"
                    alt=""
                  />
                  <img
                    className="lg:w-[33px] cursor-pointer md:w-[22px]"
                    src="public/Telegram.png"
                    alt=""
                  />
                </div>
                <div className="lg:flex md:flex hidden gap-[12px] font-[500] text-[20px] items-center">
                  <button className="lg:text-[23px] md:text-[16px]">
                    главная
                  </button>
                  <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                  <button className="lg:text-[23px] md:text-[16px]">
                    о нас
                  </button>
                  <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                  <select
                    className="bg-[#0b1427] p-[10px w-[90px] border-none cursor-pointer"
                    name="услуги"
                    id="услуги"
                  >
                    <option value="">услуги</option>
                    <option value="">Ремонт компьютеров</option>
                    <option value="">Ремонт ноутбуков</option>
                    <option value="">Ремонт моноблоков</option>
                    <option value="">Ремонт техники Apple</option>
                    <option value="">Сборка и апгрейд компьютеров</option>
                    <option value="">Установка ОС и программ</option>
                    <option value="">Удаление вирусов</option>
                    <option value="">Настройка интернета</option>
                    <option value="">Корпоративным клиентам</option>
                  </select>
                  <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                  <button className="lg:text-[23px] md:text-[16px] md:hidden lg:flex">
                    прайс-лист
                  </button>
                  <div className="border-[2px] border-[#E7742E] h-[20px] md:hidden lg:flex"></div>
                  <button className="lg:text-[23px] md:text-[16px] md:hidden lg:flex">
                    отзывы
                  </button>
                  <div className="border-[2px] border-[#E7742E] h-[20px] md:hidden lg:flex"></div>
                  <button className="lg:text-[23px] md:text-[16px]">
                    блог
                  </button>
                  <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                  <button className="lg:text-[23px] md:text-[16px]">
                    контакты
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:gap-[25px] md:gap-[20px] lg:w-[300px] md:w-[250px] items-start">
              <h1 className="lg:text-[40px] md:text-[18px] font-[500] text-[#E7742E]">
                ОПЕРАТИВНАЯ КОМПЬЮТЕРНАЯ ПОМОЩЬ
              </h1>
              <h1 className="lg:text-[20px] md:text-[15px] font-[500] md:w-[300px] lg:w-[460px]">
                Ремонт любой сложности ПК, ноутбуков и техники Apple для дома и
                офиса
              </h1>
              <h1 className="text-[18px] font-[500] text-[#E7742E]">
                Срочный выезд мастера
              </h1>
              <button className="flex items-center justify-center lg:w-[250px] lg:h-[45px] md:h-[30px] text-black rounded-md bg-[#E7742E] lg:text-[25px] md:text-[13px] lg:mt-8 md:mt-4 md:p-[10px]">
                вызвать мастера
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
