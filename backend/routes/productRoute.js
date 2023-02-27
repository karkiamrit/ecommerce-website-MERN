const express=require("express");
const { getAllProdcuts, createProduct, updateProduct, deleteProduct,getProductDetails } = require("../controllers/productController");
<<<<<<< HEAD
const  router=express.Router();

router.route("/products").get(getAllProdcuts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);
=======
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const  router=express.Router();

router.route("/products").get(getAllProdcuts);
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"),createProduct);
router.route("/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"),updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct).get(getProductDetails);
>>>>>>> e92a18e (user model and configuration)
module.exports =router