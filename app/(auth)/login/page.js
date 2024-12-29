"use client";

import { loginAction } from "@/lib/userActions";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsEye, BsEyeSlash } from "react-icons/bs";
export default function page() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleLogin = async () => {
    const res = await loginAction(email, password);
    if (!res.success) {
      return toast.error(res.error);
    }
    router.push("/");
  };
  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100vw",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack padding={3} bgcolor={"whitesmoke"} spacing={"20px"}>
        <Box textAlign={"center"} sx={{ fontSize: "35px", fontWeight: "500" }}>
          Login
        </Box>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Box sx={{ position: "relative" }}>
          <TextField
            id="outlined-error"
            label="Password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <IconButton
            onClick={togglePasswordVisibility}
            sx={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "black",
            }}
          >
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </IconButton>
        </Box>
        <Button
          variant="contained"
          disabled={email == "" || password == "" || !emailRegex.test(email)}
          onClick={handleLogin}
        >
          submit
        </Button>
      </Stack>
    </Stack>
  );
}
