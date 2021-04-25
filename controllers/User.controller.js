const conn = require("../config/db.config");

exports.listUser = (req, res) => {
  let sql = "SELECT * FROM user";
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: true,
        result: result,
        github: "https://github.com/nizar-sys",
      })
    );
  });
};

exports.detailUser = (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM user WHERE uid = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: true,
        result: result,
        github: "https://github.com/nizar-sys",
      })
    );
  });
};

exports.createUser = (req, res) => {
  let data = {
    uid: req.body.uid,
    role: req.body.role,
    username: req.body.username,
    fullname: req.body.fullname,
    password: req.body.password,
  };
  let sql = `INSERT INTO user SET ? `;
  let query = conn.query(sql, data, (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send(
        JSON.stringify({
          status: true,
          result: result,
          message: "Success add User",
        })
      );
    }
  });
};
