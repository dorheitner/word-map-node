const express = require("express");

const coordinatesController = require("../controller/coordinatesController");
const router = express.Router();
router.get("/get-coordinates", coordinatesController.getRoutes);

module.exports = router;
