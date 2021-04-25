"use strict";

const mysql2 = require("mysql2");

const conn = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_barbershop",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

module.exports = conn;
