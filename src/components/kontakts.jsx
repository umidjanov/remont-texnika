function Kontakts() {
    return(
        <div className="text-[#091532] flex flex-col gap-[30px] items-center justify-center p-[30px]">
            <div className="flex flex-col gap-[6px] items-center mt-[-50px]">
                <h1 className="lg:text-[78px] md:text-[50px] text-[20px]">наша команда</h1>
                <div className="lg:flex hidden border-[2px] border-[#E7742E] lg:w-[510px] w-[300px]"></div>
            </div>
            <h1 className="lg:w-[1000px] w-[300px] text-center md:text-[19px] text-[12px]">В команде мастеров компьютерного сервиса Geko объединились профессионалы, которые хорошо знают и любят свое дело. Огромный опыт, современная техническая база и коллективный потенциал позволяют нам оперативно и качественно решать любые проблемы, возникшие с вашей компьютерной техникой.  </h1>
            <div className="lg:flex flex-wrap gap-[35px]">
                <div className="flex flex-col gap-[10px] items-center text-[22px]">
                    <img src="public/Photo.png" alt="" />
                    <h1 className="text-[30px] w-[200px] text-center">Сергей Александров</h1>
                    <h1>Опыт работы – 10 лет</h1>
                </div>
                <div className="lg:flex hidden flex-col gap-[10px] items-center text-[22px]">
                    <img src="public/Photo.png" alt="" />
                    <h1 className="text-[30px] w-[200px] text-center">Сергей Александров</h1>
                    <h1>Опыт работы – 10 лет</h1>
                </div>
                <div className="lg:flex flex-col gap-[10px] items-center text-[22px]">
                    <img src="public/Photo.png" alt="" />
                    <h1 className="text-[30px] w-[200px] text-center">Сергей Александров</h1>
                    <h1>Опыт работы – 10 лет</h1>
                </div>
                <div className="lg:flex flex-col gap-[10px] items-center text-[22px]">
                    <img src="public/Photo.png" alt="" />
                    <h1 className="text-[30px] w-[200px] text-center">Сергей Александров</h1>
                    <h1>Опыт работы – 10 лет</h1>
                </div>
            </div>
        </div>
    )
}

export default Kontakts;