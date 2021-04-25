const express = require('express');
const router = express.Router();
const UserController = require('../controllers/User.controller');

router.get("/api/user", UserController.listUser);
router.get("/api/user/:id", UserController.detailUser);
router.post("/api/user", UserController.createUser);
module.exports = router;