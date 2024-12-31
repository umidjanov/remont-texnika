function Analyzing() {
  return (
    <div className="p-[20px] flex flex-col gap-[50px]">
      <div className="flex flex-col gap-[20px] items-center text-center">
        <div>
          <h1 className="lg:text-[53px] text-[20px] font-[500] text-[#0B1427]">
            ВЫЗВАТЬ МАСТЕРА
          </h1>
          <div className="border-[1px] border-[#E7742E] lg:w-[500px] md:w-[50 0px] w-[300px]"></div>
        </div>
        <div className="text-[20px] flex flex-col gap-[10px] lg:items-start md:items-center">
          <h1>Выберите устройство</h1>
          <form action="hello">
            <input
              className="border-[2px] border-gray lg:w-[450px] w-[290px] lg:h-[45px] h-[45px] rounded-md p-[10px]"
              placeholder="Выбрать"
              type="text"
            />
            <h1>Выберите производителя</h1>
            <input
              className="border-[2px] border-gray lg:w-[450px] w-[290px] lg:h-[45px] h-[45px] rounded-md p-[10px]"
              placeholder="Выбрать"
              type="text"
            />
            <h1>Ваше имя *</h1>
            <input
              className="border-[2px] border-gray lg:w-[450px] w-[290px] lg:h-[45px] h-[45px] rounded-md p-[10px]"
              placeholder="Имя"
              type="text"
            />
            <h1>Ваш телефон *</h1>
            <input
              className="border-[2px] border-gray lg:w-[450px] w-[290px] lg:h-[45px] h-[45px] rounded-md p-[10px]"
              placeholder="+7 ( ___ ) ___-__-__"
              type="number"
            />
            <h1>Опишите проблему</h1>
            <input
              className="border-[2px] border-gray lg:w-[450px] w-[290px] lg:h-[200px] md:h-[200px] h-[45px] rounded-md p-[10px]"
              placeholder="Текст сообщения"
              type="text"
            />
          </form>
          <div className="flex gap-[20px] items-center">
            <input
              className="lg:w-[20px] md:w-[20px] w-[50px] lg:h-[20px] h-[50px] border-[1px] border-gray-600"
              type="checkbox"
              name=""
              id=""
            />
            <h1 className="lg:text-[14px] text-[13px] lg:w-[420px] text-start">
              Даю согласие на обработку моих персональных данных и принимаю
              политику конфиденциальности
            </h1>
          </div>
        </div>
        <button className="px-[30px] py-[8px] rounded-md bg-[#E7742E] text-[25px]">
          Отправить
        </button>
      </div>
      <div className="lg:flex gap-[40px] lg:items-center md:items-center justify-center">
        <img src="public/Rectangle 45.png" alt="" />
        <div className="flex flex-col gap-[30px] lg:w-[700px] lg:text-[19px] w-[300px]">
          <h1>
            Мастера сервисного центра Geko Corp оперативно и гарантированно
            устранят любые проблемы, вызванные програмными или аппаратными
            сбоями. В случае выявления неисправностей, которые невозможно
            обнаружить при первоначальной диагностике, мастер обязательно
            согласует с вами возникшие дополнительные расходы, так что вы всегда
            будете уверены в конечной стоимости ремонта.
          </h1>
          <h1>
            Вы можете рассчитать предварительную стоимость ремонта по ценам в
            нашем прайс-листе. Если вы не нашли нужную услугу, свяжитесь с нами.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Analyzing;
