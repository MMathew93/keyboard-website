// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require("async");
var Product = require("./models/product");
var Category = require("./models/category");

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var products = [];
var categories = [];

function categoryCreate(name, cb) {
  var category = new Category({ name: name });

  category.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Category: " + category);
    categories.push(category);
    cb(null, category);
  });
}

function productCreate(name, description, price, numberInStock, category, cb) {
  let productdetail = {
    name: name,
    description: description,
    price: price,
    numberInStock: numberInStock
  };
  if (category != false) productdetail.category = category;

  var product = new Product(productdetail);
  product.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Product: " + product);
    products.push(product);
    cb(null, product);
  });
}

function createCategories(cb) {
  async.series(
    [
      function(callback) {
        categoryCreate("Keyboard", callback);
      },
      function(callback) {
        categoryCreate("Accessory", callback);
      }
    ],
    // optional callback
    cb
  );
}

//MAKE MULTIPLE PRODUCT
function createProducts(cb) {
  async.parallel(
    [
      function(callback) {
        productCreate(
          "Pro HYBRID Type-S",
          "Our exclusive Type-S switches dramatically reduce the sound of typing, suitable for close quarters or quiet environments. The HYBRID Type-S model supports both Bluetooth connection and USB Type-C connection. You can connect any device by using wireless or wired connection according to your needs.By registering up to four devices in advance, you can connect the keyboard to a device of your choice via a Bluetooth connection immediately with easy-to-use keyboard shortcuts.",
          337,
          10,
          [categories[0]],
          callback
        );
      },
      function(callback) {
        productCreate(
          "Pro HYBRID Type-S",
          "Our exclusive Type-S switches dramatically reduce the sound of typing, suitable for close quarters or quiet environments. The HYBRID Type-S model supports both Bluetooth connection and USB Type-C connection. You can connect any device by using wireless or wired connection according to your needs.By registering up to four devices in advance, you can connect the keyboard to a device of your choice via a Bluetooth connection immediately with easy-to-use keyboard shortcuts.",
          337,
          10,
          [categories[0]],
          callback
        );
      },
      function(callback) {
        productCreate(
          "Pro HYBRID",
          "The Pro HYBRID model supports both Bluetooth connection and USB Type-C connection. You can connect any device by using wireless or wired connection according to your needs.By registering up to four devices in advance, you can connect the keyboard to a device of your choice via a Bluetooth connection immediately with easy-to-use keyboard shortcuts.",
          281,
          10,
          [categories[0]],
          callback
        );
      },
      function(callback) {
        productCreate(
          "Pro Classic",
          "The Pro Classic is designed specifically for advanced programming and coding, ideal curvature reduces hand and arm fatigue. Hands never need to leave the home row. Keys feel like they’re in the right place. You’re one with the machine.",
          211,
          10,
          [categories[0]],
          callback
        );
      },
      function(callback) {
        productCreate(
          "Happy Hacking Keyboard (HHKB) Wood Wrist Rest",
          "Is it particle board? Maybe elm, or oak? Could it be that sweet 'ol Mahogany? We don't know and neither will you!",
          34.99,
          5,
          [categories[1]],
          callback
        );
      },
      function(callback) {
        productCreate(
          "Happy Hacking Keyboard (HHKB) adjustable tablet & phone stand with mini travel bag",
          "Why? Because why not!",
          19.99,
          2,
          [categories[1]],
          callback
        );
      }
    ],
    // optional callback
    cb
  );
}

async.series(
  [createProducts, createCategories],
  // Optional callback
  function(err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("something here?");
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
