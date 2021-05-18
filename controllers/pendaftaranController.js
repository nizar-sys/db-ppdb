const conn = require("../config/db.config");

// ALL DATA
exports.ListPendaftar = (req, res) => {
  let sql = "SELECT * FROM pendaftaran ORDER BY pendaftaran_id DESC";
  conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: true,
        result: result,
      })
    );
  });
};

// DATA BY ID
exports.Detail = (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM pendaftaran where pendaftaran_id = ${id}`;
  conn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      res.send(
        JSON.stringify({
          status: false,
          message: "Id not found",
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

// CREATE DATA
exports.tambahPendaftar = (req, res) => {
  let data = {
    pendaftaran_id: req.body.pendaftaran_id,
    nama_siswa: req.body.nama_siswa,
    jk_siswa: req.body.jk_siswa,
    tempat_lahir_siswa: req.body.tempat_lahir_siswa,
    tanggal_lahir_siswa: req.body.tanggal_lahir_siswa,
    agama_siswa: req.body.agama_siswa,
    anak_ke: req.body.anak_ke,
    nisn_siswa: req.body.nisn_siswa,
    nik_siswa: req.body.nik_siswa,
    jalan: req.body.jalan,
    rt: req.body.rt,
    rw: req.body.rw,
    no_rumah: req.body.no_rumah,
    desa: req.body.desa,
    kecamatan: req.body.kecamatan,
    kota: req.body.kota,
    kode_pos: req.body.kode_pos,
    alamat: req.body.alamat,
    asal_sekolah: req.body.asal_sekolah,
    tahun_lulus: req.body.tahun_lulus,
    email: req.body.email,
    no_hp: req.body.no_hp,
    no_kk: req.body.no_kk,
    nik_ayah: req.body.nik_ayah,
    no_hp_ayah: req.body.no_hp_ayah,
    nama_ayah: req.body.nama_ayah,
    pekerjaan_ayah: req.body.pekerjaan_ayah,
    nik_ibu: req.body.nik_ibu,
    no_hp_ibu: req.body.no_hp_ibu,
    nama_ibu: req.body.nama_ibu,
    pekerjaan_ibu: req.body.pekerjaan_ibu,
    kode_program: req.body.kode_program,
    kode_bidang: req.body.kode_bidang,
  };
  let sql = "INSERT INTO pendaftaran SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: true,
        message: "Pendaftaran berhasil ditambah",
        data: results,
      })
    );
  });
};

// EDIT DATA
exports.editPendaftar = (req, res) => {
  let sql = `UPDATE pendaftaran SET nama_siswa='${req.body.nama_siswa}', jk_siswa='${req.body.jk_siswa}', tempat_lahir_siswa='${req.body.tempat_lahir_siswa}', tanggal_lahir_siswa='${req.body.tanggal_lahir_siswa}', agama_siswa='${req.body.agama_siswa}', anak_ke='${req.body.anak_ke}', nisn_siswa='${req.body.nisn_siswa}', nik_siswa='${req.body.nik_siswa}', jalan='${req.body.jalan}', rt='${req.body.rt}', rw='${req.body.rw}', no_rumah='${req.body.no_rumah}', desa='${req.body.desa}', kecamatan='${req.body.kecamatan}', kota='${req.body.kota}', kode_pos='${req.body.kode_pos}', alamat='${req.body.alamat}', asal_sekolah='${req.body.asal_sekolah}', tahun_lulus='${req.body.tahun_lulus}', email='${req.body.email}', no_hp='${req.body.no_hp}', no_kk='${req.body.no_kk}', nik_ayah='${req.body.nik_ayah}', no_hp_ayah='${req.body.no_hp_ayah}', nama_ayah='${req.body.nama_ayah}', pekerjaan_ayah='${req.body.pekerjaan_ayah}', nik_ibu='${req.body.nik_ibu}', no_hp_ibu='${req.body.no_hp_ibu}', nama_ibu='${req.body.nama_ibu}', pekerjaan_ibu='${req.body.pekerjaan_ibu}', kode_program='${req.body.kode_program}', kode_bidang='${req.body.kode_bidang}' WHERE pendaftaran_id='${req.params.id}'`;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: true,
        message: "Pendaftar berhasil diubah",
        data: results,
      })
    );
  });
};

// HAPUS DATA
exports.hapusPendaftar = (req, res) => {
  let sql =
    "DELETE FROM pendaftaran WHERE pendaftaran_id=" + req.params.id + "";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({ status: true, message: "Pendaftar berhasil dihapus" })
    );
  });
};
