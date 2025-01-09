import React from "react";
import img from "./../media/white.png";
import str from "./../media/Vector.png";
import tg from "./../media/Telegram.png";
import wch from "./../media/Whatsapp.png";
import ins from "./../media/Instagram.png";
import kom from "./../media/Komputer.png";
import chas from "./../media/Chasi.png";
import mik from "./../media/Microb.png";
import kom2 from "./../media/Komputer2.png";
import kla from "./../media/Klava.png";
import vod from "./../media/Vodka.png";
import tex from "./../media/Texnika.png";
import med from "./../media/Mediki.png";
import tru from "./../media/Trubi.png";
import skr from "./../media/Scroll.png";
import lok from "./../media/location.png";
import eml from "./../media/email.png";
import hou from "./../media/hours.png";
import { Button, Checkbox, Input } from "@material-tailwind/react";

const Blog2 = () => {
  return (
    <div>
      <div className="bg-[#0B1427] h-[140px]">
        <div className=" flex items-center justify-between mr-[38px] px-[300px] py-[26px]">
          <img className="h-[90px]" src={img} alt="" />
          <div className="flex text-white flex-col gap-3">
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <img className="w-[20px] h-[20px]" src={str} alt="" />
                <h1>+7 (495) 135-45-47</h1>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-[20px] h-[20px]" src={str} alt="" />
                <h1>+7 (965) 318-70-14</h1>
              </div>
              <img className="w-[20px] h-[20px]" src={ins} alt="" />
              <img className="w-[20px] h-[20px]" src={wch} alt="" />
              <img className="w-[20px] h-[20px]" src={tg} alt="" />
            </div>
            <div>
              <ul className="flex gap-2 ml-[1px] text-[11px]">
                <li className="border-r-[3px] pr-2 h-[11px] border-[#E7742E] hover:text-[#E7742E]">
                  <a href="#">ГЛАВНАЯ</a>
                </li>
                <li className="border-r-[3px] pr-2 h-[11px] border-[#E7742E] hover:text-[#E7742E]">
                  <a href="#">О НАС</a>
                </li>
                <li className="border-r-[3px] pr-2 h-[11px] border-[#E7742E] hover:text-[#E7742E]">
                  <a href="#">УСЛУГИ</a>
                </li>
                <li className="border-r-[3px] pr-2 h-[11px] border-[#E7742E] hover:text-[#E7742E]">
                  <a href="#">ПРАЙС-ЛИСТ</a>
                </li>
                <li className="border-r-[3px] pr-2 h-[11px] border-[#E7742E] hover:text-[#E7742E]">
                  <a href="#">ОТЗЫВЫ</a>
                </li>
                <li className="border-r-[3px] pr-2 h-[11px] border-[#E7742E] hover:text-[#E7742E]">
                  <a href="#">БЛОГ</a>
                </li>
                <li className="hover:text-[#E7742E]">
                  <a href="#">КОНТАКТЫ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className=" flex text-center justify-center  text-4xl mx-[710px] my-8 border-b-[3px] border-[#E7742E]">
          БЛОГ
        </h1>
        <div className=" flex gap-8 flex-wrap px-[319px]">
          <div className=" py-4  w-[270px]">
            <img src={kom} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center">
              КАК ПРОДЛИТЬ ЖИЗНЬ НОУТБУКУ: 10 ПРАВИЛ ГРАМОТНОГО ИСПОЛЬЗОВАНИЯ{" "}
            </h1>
          </div>
          <div className=" py-4 w-[270px]">
            <img src={chas} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              Что делать,если компьютер медленно работает{" "}
            </h1>
          </div>
          <div className=" py-4 w-[270px]">
            <img src={mik} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              Компьютерный вирус. способы заражения и методы защиты
            </h1>
          </div>

<div className=" py-4 w-[270px]">
            <img src={kom2} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              Система резервного копирования, что это?
            </h1>
          </div>
          <div className=" py-4 w-[270px]">
            <img src={kla} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              ЧИСТКА НОУТБУКОВ
            </h1>
          </div>
          <div className=" py-4 w-[270px]">
            <img src={vod} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              Если пролили жидкость на ноутбук, что делать?
            </h1>
          </div>
          <div className=" py-4 w-[270px]">
            <img src={tex} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              ВОССТАНОВЛЕНИЕ УДАЛЕННЫХ ДАННЫХ
            </h1>
          </div>
          <div className=" py-4 w-[270px]">
            <img src={med} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              как часто надо проводить профилактику
            </h1>
          </div>
          <div className=" py-4 w-[270px]">
            <img src={tru} alt="" />
            <h1 className="py-3 ml-[20px] w-[230px] text-center uppercase">
              НАСТРОЙКА роутера и домашней сети
            </h1>
          </div>
        </div>
        <img className="m-auto w-[100px]" src={skr} alt="" />
      </div>
      <div>
        <h1 className=" flex text-center w-[400px] justify-center text-4xl mx-[570px] mt-12 my-6 border-b-[3px] border-[#E7742E]">
          ВЗНИКЛИ ВОПРОСЫ?{" "}
        </h1>
        <p className="text-blue-gray-700 text-center">
          Мы с радостью ответим на любой вопрос о вашей технике. Позвоните или
          напишите нам.
        </p>
        <div className="flex gap-8 p-[30px] m-auto justify-center">
          <div className="w-[400px] mb-4">
            <h1>Ваше имя*</h1>
            <Input label="Имя"></Input>
            <h1>Ваш телефон*</h1>
            <Input type="password" label="+7(  )  - _ - _"></Input>
            <div className="flex">
              <Checkbox></Checkbox>
              <p className="text-[13px] mt-6 w-[300px]">
                Даю согласие на обработку моих персональных данных и принимаю{" "}
                <b>политику конфиденциальности</b>
              </p>
            </div>
            <Button className="bg-[#E7742E] text-black my-4">
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
          </div>
          <div className="flex bg-blue-gray-300 w-[1px] h-[470px]"> </div>
          <div className="w-[400px]">
            <h1>Ваше имя*</h1>
            <Input label="Имя"></Input>
            <h1>Ваш e-mail*</h1>
            <Input label="E-mail"></Input>
            <h1>Ваш вопрос</h1>
            <textarea
              label="Текст вопроса"
              className="w-[400px] h-[160px] border-[2px] rounded-xl border-blue-gray-200"
              name=""
              id=""
            ></textarea>
            <div className="flex">
              <Checkbox></Checkbox>
              <p className="text-[13px] mt-6 w-[300px]">
                Даю согласие на обработку моих персональных данных и принимаю{" "}
                <b>политику конфиденциальности</b>
              </p>
            </div>
            <Button className="bg-[#E7742E] text-black my-4">ОТПРАВИТЬ</Button>
          </div>
        </div>
      </div>

<div className="bg-[#0B1427] text-white mt-7 pt-[60px] p-[40px] items-center flex flex-col gap-[40px]">
        <div className="flex gap-[100px] px-[180px]">
          <div className="lg:w-[300px] lg:flex hidden flex-col gap-[30px]">
            <img className="h-[100px] w-[300px]" src={img} alt="" />
            <a
              href="https://www.rusprofile.ru/ip/320623400028827"
              className="w-[150px] text-[13px]"
            >
              ИП Шумихин М.А.ИНН/ОГРНИП:141800214410/320623400028827
            </a>
            <h1 className="text-[13px] w-[250px] text-[#acacac]">
              Обращаем ваше внимание на то, что данный интернет-сайт носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями Статьи 437
              (2) Гражданского кодекса Российской Федерации.
            </h1>
          </div>
          <div>
            <ul className="flex flex-col w-[120px] gap-[15px] text-[15px] font-[200] cursor-pointer">
              <li>
                <a href="Main">ГЛАВНАЯ</a>
              </li>
              <li>
                <a href="#">О КОМПАНИИ</a>
              </li>
              <li>
                <a href="#">ПРАЙС-ЛИСТ</a>
              </li>
              <li>
                <a href="#">ОТЗЫВЫ</a>
              </li>
              <li>
                <a href="#">БЛОГ</a>
              </li>
              <li>
                <a href="Block3">КОНТАКТЫ</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col lg:gap-[10px] gap-[10px] text-[10px] lg:text-[15px]">
              <li>УСЛУГИ</li>
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
            <ul className="lg:flex hidden flex-col gap-[14px]">
              <div className="flex items-center gap-2">
                <img className="w-[20px] h-[20px]" src={str} alt="" />
                <li className="text-[20px]"> +7 (495) 135-45-47</li>
              </div>
              <div className="flex items-center gap-2">
                <img className="w-[20px] h-[20px]" src={str} alt="" />
                <li className="text-[20px]"> +7 (965) 318-70-14</li>
              </div>
              <div className="text-[15px] pt-3">
                <div className="flex gap-2">
                  <img className="w-[20px] h-[20px]" src={lok} alt="" />
                  <a href="https://yandex.uz/maps/213/moscow/house/lyublinskaya_ulitsa_141/Z04YcQNhTEEOQFtvfXp3dHRjZg==/?ll=37.741549%2C55.665802&z=16">
                    г. Москва, ул. Люблинская 141, офис 319Б
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[20px] h-[20px]" src={eml} alt="" />
                  <a href="https://wdomain.ru/remont-geko.ru">
                    info@remont-geko.ru
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[20px] h-[20px]" src={hou} alt="" />
                  <a href="https://99evro.ru/">10:00 - 20:00 (без выходных)</a>
                </div>
              </div>
            </ul>
            <div className="flex pt-4 gap-[20px]">
              <img className="cursor-pointer" src={ins} alt="" />
              <img className="cursor-pointer" src={wch} alt="" />
              <img className="cursor-pointer" src={tg} alt="" />
            </div>
          </div>
        </div>
        <div className="flex  flex-col gap-[10px]">

<div className="border-[2px] border-[#E7742E] lg:w-[1090px] w-[300px]"></div>
          <div className="flex px-[px] justify-between items-center ">
            <a
              href="https://yapl.ru/ru/remont-geko.ru/"
              className="flex gap-[5px] text-[20px]"
            >
              <h1 className="text-[#E7742E]">@2021</h1>{" "}
              <h1 className="text-[17px] pt-[3px]">remont-geko.ru</h1>
            </a>
            <div className="flex gap-[20px] items-center text-[17px]">
              <a href="https://vnikitinsky.medium.com/как-создать-карту-сайта-простое-руководство-5b5c483dad5c">
                Карта сайта
              </a>
              <div className="lg:flex hidden h-[20px] border-[2px] border-[#E7742E]"></div>
              <a href="https://eni-bbmv.ru/ru/doc/politika-konfident?utm_type=bp&yclid=1578896986159448063">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;