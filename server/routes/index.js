const express = require("express");
const { addUser } = require("../controllers/index");
const router = express.Router();

router.get("/", addUser);

module.exports = router;