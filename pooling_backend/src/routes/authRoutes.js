const express = require("express");
const { TeacherLogin } = require("../controllers/login");

const router = express.Router();

router.post("/teacher-login", TeacherLogin);

module.exports = router;
