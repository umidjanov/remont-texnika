import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import NavbarDefault from "../../components/navbar";

export default function NewsBlog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    instance
      .get("/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const deleted = async (id) => {
    try {
      await instance.delete(`/product/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="bg-blue-gray-100 w-[100%] flex">
      <NavbarDefault />
      <div className="flex flex-col ml-[250px]">
        <div className="bg-[#050b1aef] text-white uppercase w-[1269px] fixed">
          <h1 className="pt-6 ml-[20px] p-3 w-full font-bold pl-[80px]">
            this is News blog page
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col gap-[20px] p-[30px]">
          <div className="flex gap-[20px] flex-wrap px-[74px] pt-[70px]">
            {products?.map((product) => (
              <div
                key={product?.id}
                className="shadow-2xl rounded-xl bg-white w-[250px] p-[20px] flex flex-col gap-[10px]"
              >
                <img src={product?.avatar} alt="" />
                <div>
                  <h1 className="text-center text-[22px] font-bold">
                    {product?.name}
                  </h1>
                  <h3 className="text-center text-[12px]">
                    {product?.createAt}
                  </h3>
                </div>
                {/* <h2>ID: {product?.id}</h2> */}
                <div className="flex flex-col gap-4 ">
                  <Link to={`admin/news/${product?.id}`}>
                    <Button className="flex m-auto bg-[#E7742E] py-[-6px] text-black border-[#E7742E] p-[10px]">
                      update
                    </Button>
                  </Link>
                  <Button
                    className="flex m-auto bg-[#E7742E] py-[-6px] text-black border-[#E7742E] p-[10px]"
                    onClick={() => deleted(product?.id)}
                  >
                    delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
