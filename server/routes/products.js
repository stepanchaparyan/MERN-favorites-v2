const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
} = require("../controller/productControllers");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/add", addProduct);

module.exports = router;
