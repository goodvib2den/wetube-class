import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("누군가 접근을 시도중입니다.");

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅Server Litening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
