import { Pagination, Stack } from "@mui/material";
import NavbarDefault from "../../components/navbar";

export default function Home() {
  return (
    <div className="flex">
      <NavbarDefault />
      <div className="flex flex-col gap-[20px]">
        <div className="pl-[40px] bg-[#0e1933] text-white uppercase w-[1286] flex">
          <h1 className="pt-6 border-1 p-3 w-[1246px] font-bold">
            this is home page
          </h1>
        </div>
        <Stack spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack>
      </div>
    </div>
  );
}
