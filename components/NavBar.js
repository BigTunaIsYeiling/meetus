"use client";
import { logoutAction } from "@/lib/userActions";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Sidebar() {
  const router = useRouter();
  const Logout = async () => {
    const res = await logoutAction();
    if (res.success) {
      router.push("/login");
    }
  };
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "200px",
        height: "100vh",
        backgroundColor: "#333",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>User</h1>
      <Button variant="contained" sx={{ marginTop: 50 }} onClick={Logout}>
        log out
      </Button>
    </nav>
  );
}
