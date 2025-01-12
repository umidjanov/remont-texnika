import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Card({ news }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <button
              onClick={handleOpen}
              className="px-[20px] py-[8px] rounded-lg bg-[#DEDEDE] text-[20px]"
            >
              {news?.btn}
            </button>
          </div>
        ))}

        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="rounded-md">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Siz bu yerdan card xaqida malumotga ega bo'lishingiz mumkin
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Если вам нужны дополнительные пояснения или помощь с конкретной
                проблемой, сообщите об этом. Компьютеры — это сложные
                устройства, которые могут выйти из строя по разным причинам.
                Ниже описаны основные проблемы, которые могут возникнуть при
                работе компьютера, и способы их устранения. Наличие вирусов.
                Операционная система Windows — одна из самых популярных, но
                иногда пользователи сталкиваются с различными проблемами в её
                работе. Ниже приведены распространённые неполадки и способы их
                устранения.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
