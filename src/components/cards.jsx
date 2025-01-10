export default function Card({ news, name, createAt, avatar }) {
  return (
    <div className="gap-[30px] flex flex-col items-center">
      <div className="flex gap-[60px] flex-wrap justify-center">
        {news?.map((news) => (
          <div
            key={news?.id}
            className="shadow-xl rounded-xl bg-white w-[320px] p-[20px] flex flex-col gap-[30px] items-center"
          >
            <img className="w-[200px]" src={news?.avatar} alt="" />
            <div className="flex flex-col gap-[20px] ">
              <h2 className="text-center text-[27px] font-semibold">
                {news?.name}
              </h2>
              <h2 className="text-[20px] font-light">{news?.createAt}</h2>
            </div>
            <button className="px-[20px] py-[8px] rounded-lg bg-[#DEDEDE] text-[20px]">
              {news?.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
