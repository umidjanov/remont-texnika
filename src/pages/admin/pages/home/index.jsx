import NavbarDefault from "../../components/navbar";

export default function Home() {
  return (
    <div className="flex">
      <NavbarDefault />
      <h1 className="m-[100px]">this is Home page</h1>
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
      </Stack>
    </div>
  );
}
