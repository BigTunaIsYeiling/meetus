import { cookies } from "next/headers";

export default async function GetUserData() {
  const cookiesStore = await cookies();
  const response = await fetch(
    `https://api-yeshtery.dev.meetusvr.com/v1/user/info`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookiesStore.get("token")?.value}`,
      },
    }
  );
  const data = await response.json();
  return data;
}
