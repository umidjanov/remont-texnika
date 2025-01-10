export default function Card({
  news,
  name,
  createAt,
  createAt2,
  createAt3,
  createAt4,
  avatar,
}) {
  return (
    <div className="gap-[30px] flex flex-col items-center">
      <div className="flex gap-[60px] flex-wrap justify-center">
        {news?.map((news) => (
          <div
            key={news?.id}
            className="shadow-xl rounded-xl bg-[#e8e8e868] w-[320px] p-[20px] flex flex-col gap-[30px] items-center"
          >
            <img className="w-[150px]" src={news?.avatar} alt="" />
            <div className="flex flex-col gap-[20px] ">
              <h2 className="text-center text-[30px] font-semibold">
                {news?.name}
              </h2>
              <div className="flex flex-col gap-[10px] px-[20px]">
                <h2 className="text-[18px] font-light">{news?.createAt}</h2>
                <h2 className="text-[18px] font-light">{news?.createAt2}</h2>
                <h2 className="text-[18px] font-light">{news?.createAt3}</h2>
                <h2 className="text-[18px] font-light">{news?.createAt4}</h2>
              </div>
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
