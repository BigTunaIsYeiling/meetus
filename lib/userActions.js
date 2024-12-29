"use server";

import { cookies } from "next/headers";
import { setToken } from "./AssignToken";

export async function loginAction(email, password) {
  const response = await fetch(
    `https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, isEmployee: true }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    const data = await response.json();
    return {
      success: false,
      error: data.message,
    };
  }
  const data = await response.json();
  await setToken(data.token);
  return {
    success: true,
  };
}

export async function logoutAction() {
  const cookiesStore = await cookies();
  cookiesStore.delete("token");
  return {
    success: true,
  };
}
