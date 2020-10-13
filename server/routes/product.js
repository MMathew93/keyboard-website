const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Category = require("../models/category");
//const { body, validationResult } = require("express-validator/check");
//const { sanitizeBody } = require("express-validator/filter");

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  } catch (error) {
    console.error(error);
  }
});

//Display detail page for specific product
router.get("/", async (req, res) => {
  res.send("NOT IMPLEMENTED");
});

//Display Product Create form on GET
router.get("/", async (req, res) => {
  try {
    const category = await Category.find({});
    return res.json(category);
  } catch (error) {
    console.error(error);
  }
});

//Handle Product Create on POST
router.post("/", async (req, res) => {
  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    numberInStock: req.body.numberInStock,
    category: req.body.category
  });

  const savedProduct = await product.save();
  return res.status(201).json(savedProduct.toJSON());
});

// Display Product delete form on GET.
exports.product_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Product delete GET");
};

// Handle product delete on POST.
router.delete("/:id", async (req, res) => {
  const products = await Product.find({});
  await products.deleteOne({ _id: new products.ObjectID(req.params.id) });
  res.status(200).send();
});

// Display product update form on GET.
exports.product_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: product update GET");
};

// Handle product update on POST.
exports.product_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: product update POST");
};

module.exports = router;
