let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true, maxlength: 500 },
  price: { type: Number, required: true },
  numberInStock: { type: Number, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }]
});

ProductSchema.virtual("url").get(function() {
  return "/product/" + this._id;
});

module.exports = mongoose.model("Product", ProductSchema);
