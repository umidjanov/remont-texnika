function Sms2() {
    return(
        <div className="bg-[#0B1427] p-[50px] flex items-center flex-col text-white gap-[30px]">
            <div className="border-[1px] border-[#E7742E] lg:w-[1000px] w-[300px]"></div>
            <div className="lg:flex gap-[40px] lg:w-[1000px] lg:items-center">
            <img className="lg:flex hidden" src="public/Message.png" alt="" />
                <h1 className="lg:text-[22px] lg:text-start text-center lg:w-[1000px] md:w-[470px] w-[300px] text-[20px]">Мы ориентированы на долгосрочное сотрудничество с нашими клиентами и работаем по принципу “домашнего доктора” для вашей компьютерной техники, поэтому обеспечиваем вас технической поддержкой и консультациями по всем вопросам, даже самым мелким.</h1>
            </div>
            <div className="flex gap-[30px] items-center">
                <div className="border-[1px] border-[#E7742E] lg:w-[350px] w-[100px]"></div>
                <h1 className="lg:flex hidden text-[30px]">получить консультацию</h1> 
                <img className="flex lg:hidden" src="public/Message.png" alt="" />
                <div className="border-[1px] border-[#E7742E] lg:w-[350px] w-[100px]"></div>
            </div>
                <h1 className="flex lg:hidden text-[30px] text-center">получить консультацию</h1> 
        </div>
    )
}

export default Sms2;