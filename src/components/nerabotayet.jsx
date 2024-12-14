export default function Blok() {
    return(
        <div className="bg-[#0B1427] text-white mt-[30px] flex flex-col items-center p-[30px]">
            <div className="flex flex-col gap-[10px] items-center">
                <h1 className="lg:text-[60px] text-[#E7742E] lg:w-[1000px] text-[28px] md:text-[30px] md:w-[500px] w-[300px] text-center">НЕ РАБОТАЕТ КОМПЬЮТЕР?</h1>
                <div className="border-[1px] border-white lg:w-[1200px] md:w-[480px] w-[300px]"></div>
            </div>
            <div className="flex items-center">
                <div>
                    <img className="lg:flex hidden" src="public/whatwe.png" alt="" />
                </div>
                <div className="lg:flex hidden flex-col gap-[40px] h-[556px] border-[1px] border-white w-0 items-center justify-center mr-[170px] ml-[100px] pt-[-20px]">
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">1</div>
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">2</div>
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">3</div>
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">4</div>
                </div>
                <div className="lg:w-[550px] text-[22px] flex flex-col gap-[28px] items-center mt-[20px]">
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex lg:hidden items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">1</div>
                    <h1 className="lg:w-[400px] w-[320px] text-center lg:text-start">Вызовите мастера для бесплатной диагностики в удобное для вас время</h1>
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex lg:hidden items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">2</div>
                    <h1 className="lg:w-[400px] w-[320px] text-center lg:text-start">Узнайте причину неисправности, перечень необходимых работ и стоимость ремонта</h1>
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex lg:hidden items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">3</div>
                    <h1 className="lg:w-[400px] w-[320px] text-center lg:text-start">Платите по окончанию выполнения ремонта и подписания договора</h1>
                    <div className="w-[60px] h-[60px] rounded-full border-[2px] border-white flex lg:hidden items-center justify-center text-[40px] bg-[#0B1427] text-[#E7742E] hover:bg-[#E7742E] hover:text-white cursor-pointer">4</div>
                    <h1 className="lg:w-[400px] w-[320px] text-center lg:text-start">Получите гарантию 1 год на произведенные работы</h1>
                </div>
            </div>
            <div className="flex text-center mt-[20px] items-center lg:gap-[40px] gap-[20px]">
                <div className="lg:w-[400px] md:w-[150px] w-[40px] border-[1px] borde-while h-0"></div>
                <h1 className="lg:text-[35px] text-[28px] text-[#E7742E]">подробнее</h1>
                <div className="lg:w-[400px] md:w-[150px] w-[40px] border-[1px] borde-while h-0"></div>
            </div>
        </div>
    )
}