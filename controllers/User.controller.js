const conn = require("../config/db.config");

// LIST USER
exports.listUser = (req, res) => {
  let sql = "SELECT * FROM user ORDER BY user_id DESC";
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: true,
        data: result,
      })
    );
  });
};

// DETAIL USER
exports.detailUser = (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM user WHERE user_id = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send(
        JSON.stringify({
          status: false,
          message: "User by Id not found",
        })
      );
      return;
    }
    res.send(
      JSON.stringify({
        status: true,
        result: result,
      })
    );
  });
};

// TAMBAH USER
exports.tambahUser = (req, res) => {
  let data = {
    user_id: req.body.user_id,
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    pendaftaran_id: req.body.pendaftaran_id,
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

// EDIT USER
exports.editUser = (req, res) => {
  let sql = `UPDATE user SET username = '${req.body.username}', password = '${req.body.password}', role = '${req.body.role}' WHERE user_id = '${req.params.id}'`;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: true,
        message: "Data user berhasil diubah",
        data: results,
      })
    );
  });
};

// HAPUS USER
exports.hapusUser = (req, res) => {
  let sql = `DELETE FROM user WHERE user_id='${req.params.id}'`;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({ status: true, message: "Data user berhasil dihapus" })
    );
  });
};
