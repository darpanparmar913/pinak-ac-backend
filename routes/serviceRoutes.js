const express = require("express");
const router = express.Router();
const { bookService, serviceList, updateService, deleteService } = require("../controllers/serviceController");

router.post("/book", bookService);
router.get("/service-list", serviceList);
router.put("/update/:id", updateService);
router.delete("/delete/:id", deleteService);

module.exports = router;
