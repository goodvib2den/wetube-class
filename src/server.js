import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to : ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("it is TEST page");
};

app.get("/", gossipMiddleware, handleHome);

const handleListening = () =>
  console.log(`✅Server Litening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
