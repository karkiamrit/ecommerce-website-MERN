const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

//create product -- Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
<<<<<<< HEAD
=======
  req.body.user = req.user.id;
>>>>>>> e92a18e (user model and configuration)
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});

//get All Products
exports.getAllProdcuts = catchAsyncError(async (req, res) => {
  const resultperPage = 5;
  const productCount= await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultperPage); //euta page ma kati product display garne
  const products = await apiFeature.query; // class le return gareko query yaniki Product.find() nei ho
  res.status(200).json({
    success: true,
    products,
    productCount
  });
});

//get Single Product Details
exports.getProductDetails = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
<<<<<<< HEAD
    return next(new ErrorHandler("Product not found", 404));
=======
    return next(new ErrorHandler("Product not found", 404)); //ya next callback function ho 
>>>>>>> e92a18e (user model and configuration)
  }
  res.status(200).json({
    success: true,
    product,
  });
});

//Update Product --Admin

exports.updateProduct = catchAsyncError(async (req, res, next) => {
<<<<<<< HEAD
  let product = Product.findById(req.params.id);
=======
  let product = await Product.findById(req.params.id);
>>>>>>> e92a18e (user model and configuration)
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

//Delete Product

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
