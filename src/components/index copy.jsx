function Footer() {
  return (
    <div className="bg-[#0B1427] text-white p-[40px] items-center flex flex-col gap-[40px]">
      <div className="flex gap-[100px]">
        <div className="lg:w-[300px] lg:flex hidden flex-col gap-[50px]">
          <img src="public/white.svg" alt="" />
          <a
            href="https://www.rusprofile.ru/ip/320623400028827"
            className="w-[150px] text-[18px]"
          >
            ИП Шумихин М.А.ИНН/ОГРНИП:141800214410/320623400028827
          </a>
          <h1 className="text-[16px] text-[#acacac]">
            Обращаем ваше внимание на то, что данный интернет-сайт носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями Статьи 437 (2)
            Гражданского кодекса Российской Федерации.
          </h1>
        </div>
        <div>
          <ul className="flex flex-col gap-[20px] text-[20px] font-[500] cursor-pointer">
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
            <a href="https://wdomain.ru/remont-geko.ru">info@remont-geko.ru</a>
            <a href="https://99evro.ru/">10:00 - 20:00 (без выходных)</a>
          </ul>
          <div className="flex gap-[20px]">
            <img className="cursor-pointer" src="public/Instagram.png" alt="" />
            <img className="cursor-pointer" src="public/Whatsapp.png" alt="" />
            <img className="cursor-pointer" src="public/Telegram.png" alt="" />
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
            <a href="https://eni-bbmv.ru/ru/doc/politika-konfident?utm_type=bp&yclid=1578896986159448063">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
