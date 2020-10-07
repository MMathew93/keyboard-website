const express = require("express");
const router = express.Router();
const Category = require("../models/category");

// get all categorys
router.get("/", async (req, res) => {
  const categories = await Category.find({});
  return res.json(categories);
});

//Display category detail
exports.category_detail = function(req, res) {
  res.send("NOT IMPLEMENTED");
};

//Display category Create form on GET
exports.category_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED YET");
};

//Handle category Create on POST
exports.category_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED");
};

// Display category delete form on GET.
exports.category_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: category delete GET");
};

// Handle category delete on POST.
exports.category_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: category delete POST");
};

// Display category update form on GET.
exports.category_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: category update GET");
};

// Handle category update on POST.
exports.category_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: category update POST");
};

module.exports = router;
