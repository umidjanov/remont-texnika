export default function Card() {
    return (
        <div className="gap-[30px] flex flex-col items-center w-[320px] ">
            <img className="lg:w-full w-[280px]" src="public/Icon (8).png" alt="" />
            <h1 className="text-[30px] text-center">РЕМОНТ КОМПЬЮТЕРОВ</h1>
            <div className="w-[250px] text-[18px]">
                <h1>Замена блока питания</h1>
                <h1>Замена материнской платы</h1>
                <h1>Замена жесткого диска</h1>
                <h1>Замена видеокарты</h1>
                <h1>Восстановление данных</h1>
                <h1>Чистка компьютера от пыли и другое...</h1>
            </div>
            <button className="bg-[#DEDEDE] px-[33px] py-[8px] rounded-lg text-[18px] font-bold">подробности и цены</button>
        </div>
    )
}