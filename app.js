const express = require("express");
const app = express();
const router = require("./routes/index");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);
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
