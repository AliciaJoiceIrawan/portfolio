const express = require("express");
const router = express.Router();
const { sendMessage, getMessages } = require("../controllers/messageController");

router.post("/api/messages", sendMessage);

router.get("/api/messages", getMessages);

module.exports = router;