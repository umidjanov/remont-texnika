export default function Card({ name, createAt, avatar, products }) {
  return (
    <div className="gap-[30px] flex flex-col items-center w-[]">
      <div className="flex gap-[40px] flex-wrap justify-center">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="shadow-xl rounded-xl bg-white w-[320px] p-[20px] flex flex-col gap-[30px] items-center"
          >
            <img className="w-[350px]" src={product?.avatar} alt="" />
            <div className="flex flex-col gap-[20px] ">
              <h2 className="text-center text-[27px] font-semibold">
                {product?.name}
              </h2>
              <h2 className="text-[20px] font-light">{product?.createAt}</h2>
            </div>
              <button className="px-[20px] py-[8px] rounded-lg bg-[#DEDEDE] text-[20px]">{product?.btn}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
