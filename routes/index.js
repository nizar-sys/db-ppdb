const express = require("express");
const router = express.Router();
const pendaftaran = require("../controllers/pendaftaranController");
const user = require("../controllers/User.controller");

router.get("/api/daftar", pendaftaran.ListPendaftar);
router.get("/api/daftar/:id", pendaftaran.Detail);
router.post("/api/daftar", pendaftaran.tambahPendaftar);
router.put("/api/daftar/:id", pendaftaran.editPendaftar);
router.delete("/api/daftar/:id", pendaftaran.hapusPendaftar);

router.get("/api/user", user.listUser);
router.get("/api/user/:id", user.detailUser);
router.post("/api/user", user.tambahUser);
router.put("/api/user/:id", user.editUser);
router.delete("/api/user/:id", user.hapusUser);

module.exports = router;
