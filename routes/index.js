const express = require("express");
const router = express.Router();
const pendaftaran = require("../controllers/pendaftaranController");

router.get("/api/daftar", pendaftaran.ListPendaftar);
router.get("/api/daftar/:id", pendaftaran.Detail);
router.post("/api/daftar", pendaftaran.tambahPendaftar);
router.put("/api/daftar/:id", pendaftaran.editPendaftar);
router.delete("/api/daftar/:id", pendaftaran.hapusPendaftar);

module.exports = router;
