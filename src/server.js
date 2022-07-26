import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>res를 보내봅니다!</h1>");
};

const handleLogin = (req, res) => {
  return res.send("이 곳은 로그인 페이지입니다!");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`✅Server Litening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
