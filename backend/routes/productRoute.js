const express=require("express");
const { getAllProdcuts, createProduct, updateProduct, deleteProduct,getProductDetails } = require("../controllers/productController");
const  router=express.Router();

router.route("/products").get(getAllProdcuts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);
module.exports =router