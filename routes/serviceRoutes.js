const express = require("express");
const router = express.Router();
const { bookService } = require("../controllers/serviceController");

router.post("/book", bookService);

module.exports = router;
