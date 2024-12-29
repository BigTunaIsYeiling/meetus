import GetUserData from "@/lib/GetUserData";
export default async function Home() {
  const data = await GetUserData();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
    >
      <h1>userId : {data.id}</h1>
      <h1>name : {data.name}</h1>
    </div>
  );
}
