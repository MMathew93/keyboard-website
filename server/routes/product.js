const express = require("express");
const router = express.Router();
const Product = require("../models/product");
const Category = require("../models/category");
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

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
  try {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefined") req.body.category = [];
      else req.body.category = new Array(req.body.category);
    } else {
      return res.status(400).json({ error: "invalid category?" });
    }
    //validate fields
    body("name", "Name must not be empty.")
      .trim()
      .isLength({ min: 1 }),
      body("description", "Description must not be empty.")
        .trim()
        .isLength({ min: 1 }),
      body("price", "Price must not be empty and must be a numerical value.")
        .trim()
        .isLength({ min: 1 }),
      body(
        "numberInStock",
        "Number in Stock must not be empty and must be a numerical value"
      )
        .trim()
        .isLength({ min: 1 }),
      //sanitize fields using wildcard
      sanitizeBody("*").escape(),
      sanitizeBody("category.*").escape(),
      //process request after validation erros from a request
      async (req, res) => {
        const errors = validationResult(req);

        let product = new Product({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          numberInStock: req.body.numberInStock,
          category: req.body.category
        });

        if (!errors.isEmpty()) {
          //There are errors. Render form again with sanitized values//error messages.
          res
            .status(400)
            .json({ error: "There are errors on the form, try again." });
        } else {
          //Data from form is valid, save the product
          const savedProduct = await product.save();
          return res.status(201).json(savedProduct.toJSON());
        }
      };
  } catch (error) {
    console.error(error);
  }
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
