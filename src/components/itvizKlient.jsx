import { Button } from "@material-tailwind/react";

function Block3() {
  return (
    <div className="bg-[#0B1427] text-white p-[30px] flex flex-col gap-[40px] items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-[200px]">
          <div className="lg:flex hidden text-center items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] bordder-white hover:border-[#E7742E]"></div>
          <h1 className="lg:text-[55px] md:text-[35px] text-[28px] text-center text-[#E7742E]">
            ОТЗЫВЫ КЛИЕНТОВ
          </h1>
          <div className="lg:flex hidden text-center items-center justify-center w-[50px] h-[50px] rounded-full border-[2px] bordder-white hover:border-[#E7742E]"></div>
        </div>
        <div className="lg:flex hidden border-[1px] border-[#ffffff] lg:w-[560px] w-[300px]"></div>
      </div>
      <div>
        <a
          className="flex lg:flex lg:gap-[45px] gap-[40px] flex-wrap justify-center"
          href="https://wdomain.ru/remont-geko.ru"
        >
          <Button
            className="cursor-pointer flex flex-col gap-[20px] lg:w-[330px] md:w-[500px] lg:h-[450px] h-[400px] p-[20px] bg-white text-[#0d133a] rounded-md hover:shadow-1 hover:shadow-gray-500"
            href="https://wdomain.ru/remont-geko.ru"
          >
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#E7742E] rounded-full text-[40px]">
                А
              </div>
              <h1 className="w-[180px] text-[20px] font-bold text-[#E7742E]">
                Александр михайловский
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[18px]">
              <div className="border-[1px] border-gray-400 h-0 lg:w-16 md:w-[169px] w-[67px]"></div>
              <h1>01 июня 2021</h1>
              <div className="border-[1px] border-gray-400 h-0 lg:w-16 md:w-[169px] w-[67px]"></div>
            </div>
            <h1 className="text-[12px]">
              Самый лучший сервис! Перестали открываться программы. Пригласила
              мастера в выходной день. Мастер приехал за 40 минут. Устранил все
              вирусы, установил новый пакет программ, бессрочный антивирус,
              почистил от пыли системный блок. Недорого. Составлен договор, все
              официально. Спасибо! При необходимости в будущем буду обращаться
              только в эту компанию. Читать весь отзыв
            </h1>
          </Button>
          <Button
            className="cursor-pointer flex flex-col gap-[20px] lg:w-[330px] md:w-[500px] h-[450px] p-[20px] bg-white text-[#0d133a] rounded-md hover:shadow-1 hover:shadow-gray-500"
            href="https://wdomain.ru/remont-geko.ru"
          >
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#E7742E] rounded-full text-[40px]">
                И
              </div>
              <h1 className="w-[180px] text-[20px] font-bold text-[#E7742E]">
                Иванкоротков
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[18px]">
              <div className="border-[1px] border-gray-400 h-0 lg:w-16 md:w-[169px] w-[67px]"></div>
              <h1>01 июня 2021</h1>
              <div className="border-[1px] border-gray-400 h-0 lg:w-16 md:w-[169px] w-[67px]"></div>
            </div>
            <h1>
              Надежный проверенный сервис. Обращалась пару раз, для меня удобно
              что есть выезд на дом, пришлось вызвать мастера первый раз когда
              племянник напортачил, мастер за 20 минут все исправил, теперь
              только каждый год продлеваю антивирус, все удобно и не дорого!
              Рекомендую!
            </h1>
          </Button>
          <Button
            className="cursor-pointer flex flex-col gap-[20px] lg:w-[330px] md:w-[500px] h-[450px] p-[20px] bg-white text-[#0d133a] rounded-md hover:shadow-1 hover:shadow-gray-500"
            href="https://wdomain.ru/remont-geko.ru"
          >
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center justify-center w-[60px] h-[60px] bg-[#E7742E] rounded-full text-[40px]">
                Е
              </div>
              <h1 className="w-[180px] text-[20px] font-bold text-[#E7742E]">
                елена плотникова
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[18px]">
              <div className="border-[1px] border-gray-400 h-0 lg:w-16 md:w-[169px] w-[67px]"></div>
              <h1>01 июня 2021</h1>
              <div className="border-[1px] border-gray-400 h-0 lg:w-16 md:w-[169px] w-[67px]"></div>
            </div>
            <h1 className="text-[13px] md:text-[12px]">
              Спасибо за вашу работу! Теперь компьютер работает как надо, все
              отлично. Очень приятно что мастер по просьбе поставил родительский
              контроль на компьютер. Мастер с диспетчером бесплатно меня
              консультируют по телефону в любой день. Побольше бы таких
              добросовестных компаний. Спасибо!
            </h1>
          </Button>
        </a>
      </div>
      <div className="lg:text-[30px] text-[20px] md:text-[30px] flex flex-col items-center">
        <h1 className="flex gap-[5px]">
          Мы на
          <a className="text-[#E7742E]" href="https://www.otzovik.com/">
            www.otzovik.com
          </a>
        </h1>
        <h1 className="flex gap-[5px]">
          Мы на
          <a className="text-[#E7742E]" href="https://irecommend.ru/">
            www.irecommend.ru
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Block3;
