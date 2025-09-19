const express = require("express");
const { getPolls } = require("../controllers/poll");

const router = express.Router();

router.get("/polls/:teacherUsername", getPolls);

module.exports = router;
