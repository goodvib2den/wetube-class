import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("res를 보내봅니다!");
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅Server Litening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
