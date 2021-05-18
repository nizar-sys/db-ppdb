const express = require("express");
const app = express();
const router = require("./routes/index");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
// TEMP EMAIL
// ceydasadri@biyac.com
// https://tempail.com/u/14/ceydasadri-ee09aaaf8f/

app.use("/", router);
// BASE PATH
app.use("/", (req, res) => {
  res.send(
    JSON.stringify({
      status: true,
      message: "Wellcome to app",
      dev: "Muhamad Nizar",
      github: "https://github.com/nizar-sys",
    })
  );
});
app.use("/api", (req, res) => {
  res.send(
    JSON.stringify({
      status: true,
      message: "Wellcome to app",
      dev: "Muhamad Nizar",
      github: "https://github.com/nizar-sys",
    })
  );
});
app.use("*", (req, res) => {
  res.send(
    JSON.stringify({
      status: true,
      message: "Wellcome to app",
      dev: "Muhamad Nizar",
      github: "https://github.com/nizar-sys",
    })
  );
});

// RUN
app.listen(port, () => {
  console.log(`app run at http://localhost:${port}`);
});
