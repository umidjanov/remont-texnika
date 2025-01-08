export default function Card({ name, createAt, avatar, products }) {
  return (
    <div className="gap-[30px] flex flex-col items-center w-[]">
      <div className="flex gap-[40px] flex-wrap justify-center">
        {products?.map((product) => (
          <div
            key={product?.id}
            className="shadow-xl rounded-xl bg-white w-[320px] p-[20px] flex flex-col gap-[10px]"
          >
            <img className="w-[350px]" src={product?.avatar} alt="" />
            <div className="">
              <h2 className="text-center text-[22px] font-bold">
                {product?.name}
              </h2>
              <h2>{product?.createAt}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
