import React, { useEffect, useState } from "react";
import img from "./../media/white.png";
import str from "./../media/Vector.png";
import tg from "./../media/Telegram.png";
import wch from "./../media/Whatsapp.png";
import ins from "./../media/Instagram.png";
import skr from "./../media/Scroll.png";
import { Button, Checkbox, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { instance } from "../pages/admin/utils/axios";

export default function Blog2() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail2] = useState("");
  const [question, setQuestion2] = useState("");
  const [newsblog, setNewsblog] = useState();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  useEffect(() => {
    instance
      .get("/newsblog")
      .then((res) => {
        setNewsblog(res.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  const jonatis = () => {
    if (!isChecked) {
      alert("Iltimos, shartlarga rozilik bildiring!");
      return;
    }

    console.log("Ism:", name);
    console.log("Telefon:", phone);
    console.log("Email:", email);
    console.log("Savol:", question);

    setName("");
    setPhone("");
    // setEmail("");
    // setQuestion("");
    setEmail2(false);

    alert("заказ принят!");
  };
  const jonatish = () => {
    if (!isChecked2) {
      alert("Iltimos, shartlarga rozilik bildiring!");
      return;
    }

    console.log("Ism:", name);
    console.log("Telefon:", phone);
    console.log("Email:", email);
    console.log("Savol:", question);

    setName2("");
    setPhone("");
    setEmail2("");
    setQuestion2("");

    alert("заказ принят!");
  };

  return (
    <div>
      <div className="bg-[#0B1427] h-[140px]">
        <div className="flex justify-center items-center lg:gap-[220px] md:gap-[90px] mx-[180px] pt-[20px]">
          <img className="h-[90px]" src={img} alt="" />
          <div className="flex flex-col gap-[15px] lg:w-[1000px] md:w-[500px] text-white">
            <div className="flex lg:gap-[25px] md:gap-[16px] items-center text-[24px] font-bold">
              <div className="flex items-center gap-2">
                <img className="w-[20px] h-[20px]" src={str} alt="" />
                <h1>+7 (495) 135-45-47</h1>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-[20px] h-[20px]" src={str} alt="" />
                <h1>+7 (965) 318-70-14</h1>
              </div>
              <div className="flex gap-[20px]">
                <img className="lg:w-[30px] md:w-[25px]" src={ins} alt="" />
                <img className="lg:w-[30px] md:w-[25px]" src={wch} alt="" />
                <img className="lg:w-[30px] md:w-[25px]" src={tg} alt="" />
              </div>
            </div>
            <div>
              <div className="lg:flex md:flex hidden gap-[12px] font-[500] text-[20px] items-center">
                <button className="lg:text-[18px] md:text-[6px] hover:text-[#E7742E] hover:transition">
                  <Link to={"/"}>ГЛАВНАЯ</Link>
                </button>
                <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                <button className="lg:text-[18px] md:text-[16px] hover:text-[#E7742E] hover:transition">
                  О НАС
                </button>
                <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                <button className="lg:text-[18px] md:text-[16px] hover:text-[#E7742E] hover:transition">
                  УСЛУГИ
                </button>
                <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                <button className="lg:text-[18px] md:text-[16px] md:hidden lg:flex hover:text-[#E7742E] hover:transition">
                  ПРАЙС-ЛИСТ
                </button>
                <div className="border-[2px] border-[#E7742E] h-[20px] md:hidden lg:flex"></div>
                <button className="lg:text-[18px] md:text-[16px] md:hidden lg:flex hover:text-[#E7742E] hover:transition">
                  ОТЗЫВЫ
                </button>
                <div className="border-[2px] border-[#E7742E] h-[20px] md:hidden lg:flex"></div>
                <Link to={"/blog2"}>
                  <button className="lg:text-[18px] md:text-[16px] hover:text-[#E7742E] hover:transition">
                    БЛОГ
                  </button>
                </Link>
                <div className="border-[2px] border-[#E7742E] h-[20px]"></div>
                <button className="lg:text-[18px] md:text-[16px] hover:text-[#E7742E] hover:transition">
                  КОНТАКТЫ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] py-[40px]">
        <h1 className="flex text-center justify-center text-4xl mx-[700px] border-b-[3px] border-[#E7742E]">
          БЛОГ
        </h1>
        <div className=" flex gap-[50px] flex-wrap items-center px-[230px]">
          <div className="flex items-center justify-center">
            <div className="flex gap-[40px] flex-wrap justify-center">
              {newsblog?.map((newsblog) => (
                <div
                  key={newsblog?.id}
                  className="shadow-2xl rounded-xl bg-white w-[320px] h-[350px] p-[20px] flex flex-col gap-[10px]"
                >
                  <img src={newsblog?.avatar} alt="" />
                  <h3 className="text-center text-[18px]">{newsblog?.desk}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img className="m-auto w-[100px]" src={skr} alt="" />
      </div>

      <div>
        <h1 className=" flex text-center w-[450px] justify-center text-4xl mx-[570px] mt-12 my-6 border-b-[3px] border-[#E7742E]">
          ВОЗНИКЛИ ВОПРОСЫ?{" "}
        </h1>
        <p className="text-blue-gray-700 text-center">
          Мы с радостью ответим на любой вопрос о вашей технике. Позвоните или
          напишите нам.
        </p>
        <div className="flex gap-8 p-[30px] m-auto justify-center">
          <div className="w-[400px] mb-4">
            <h1>Ваше имя*</h1>
            <Input
              label="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h1>Ваш телефон*</h1>
            <Input
              type="text"
              label="+7(  )  - _ - _"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="flex">
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              <p className="text-[13px] mt-6 w-[300px]">
                Даю согласие на обработку моих персональных данных и принимаю{" "}
                <b>политику конфиденциальности</b>
              </p>
            </div>
            <Button
              onClick={jonatis}
              disabled={!isChecked}
              className={`bg-[#E7742E] text-black my-4 ${
                !isChecked ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
          </div>
          <div className="flex bg-blue-gray-300 w-[1px] h-[470px]"> </div>
          <div className="w-[400px]">
            <h1>Ваше имя*</h1>
            <Input
              label="Имя"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
            <h1>Ваш e-mail*</h1>
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail2(e.target.value)}
            />
            <h1>Ваш вопрос</h1>
            <textarea
              label="Текст вопроса"
              className="w-[400px] h-[160px] border-[2px] rounded-xl border-blue-gray-200 p-[10px]"
              value={question}
              onChange={(e) => setQuestion2(e.target.value)}
            ></textarea>
            <div className="flex">
              <Checkbox checked={isChecked2} onChange={handleCheckboxChange2} />
              <p className="text-[13px] mt-6 w-[300px]">
                Даю согласие на обработку моих персональных данных и принимаю{" "}
                <b>политику конфиденциальности</b>
              </p>
            </div>
            <Button
              onClick={jonatish}
              disabled={!isChecked2} // Checkbox bosilmasa, tugma bloklanadi
              className={`bg-[#E7742E] text-black my-4 ${
                !isChecked2 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              ОТПРАВИТЬ
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#0B1427] text-white p-[40px] items-center flex flex-col gap-[40px]">
        <div className="flex lg:gap-[100px] gap-[30px]">
          <div className="lg:w-[300px] lg:flex hidden flex-col gap-[50px]">
            <img src="public/white.png" alt="" />
            <a
              href="https://www.rusprofile.ru/ip/320623400028827"
              className="w-[150px] text-[18px]"
            >
              ИП Шумихин М.А.ИНН/ОГРНИП:141800214410/320623400028827
            </a>
            <h1 className="text-[16px] text-[#acacac]">
              Обращаем ваше внимание на то, что данный интернет-сайт носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями Статьи 437
              (2) Гражданского кодекса Российской Федерации.
            </h1>
          </div>
          <div>
            <ul className="flex flex-col gap-[20px] lg:text-[20px] text-[10px] font-[500] cursor-pointer">
              <a href="Main">Главная</a>
              <li>О компании</li>
              <li>прайс-лист</li>
              <li>ОТЗЫВЫ</li>
              <li>БЛОГ</li>
              <a href="Block3">КОНТАКТЫ</a>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col lg:gap-[20px] gap-[10px] text-[10px] lg:text-[20px]">
              <li>Услуги</li>
              <li>Ремонт компьютеров</li>
              <li>Ремонт ноутбуков</li>
              <li>Ремонт моноблоков</li>
              <li>Ремонт техники APPLE</li>
              <li>Сборка и апгрейд компьютеров</li>
              <li>Установка ОС и программ</li>
              <li>Удаление вирусов</li>
              <li>Настройка интернета</li>
              <li>Корпоративным клиентам</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px] items-start">
            <ul className="lg:flex hidden flex-col gap-[20px]">
              <li className="text-[20px]">+7 (495) 135-45-47</li>
              <li className="text-[20px]">+7 (965) 318-70-14</li>
              <a href="https://yandex.uz/maps/213/moscow/house/lyublinskaya_ulitsa_141/Z04YcQNhTEEOQFtvfXp3dHRjZg==/?ll=37.741549%2C55.665802&z=16">
                г. Москва, ул. Люблинская 141, офис 319Б
              </a>
              <a href="https://wdomain.ru/remont-geko.ru">
                info@remont-geko.ru
              </a>
              <a href="https://99evro.ru/">10:00 - 20:00 (без выходных)</a>
            </ul>
            <div className="lg:flex md:flex hidden gap-[20px]">
              <img
                className="cursor-pointer"
                src="public/Instagram copy.png"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="public/Whatsapp copy.png"
                alt=""
              />
              <img
                className="cursor-pointer"
                src="public/Telegram copy.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="border-[1px] border-[#E7742E] lg:w-[1325px] w-[300px]"></div>
          <div className="flex justify-between items-center ">
            <a
              href="https://yapl.ru/ru/remont-geko.ru/"
              className="flex gap-[5px] text-[20px]"
            >
              <h1 className="text-[#E7742E]">@2021</h1> remont-geko.ru
            </a>
            <div className="flex gap-[20px] items-center text-[20px]">
              <a href="https://vnikitinsky.medium.com/как-создать-карту-сайта-простое-руководство-5b5c483dad5c">
                Карта сайта
              </a>
              <div className="lg:flex hidden h-[20px] border-[2px] border-[#E7742E]"></div>
              <a
                className="lg:flex md:flex hidden"
                href="https://eni-bbmv.ru/ru/doc/politika-konfident?utm_type=bp&yclid=1578896986159448063"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
