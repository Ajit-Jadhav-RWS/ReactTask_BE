const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  email: String,
  total:Number,
  product: [
    {
      id: Number,
      price: String,
      title: { type: String, default: "", trim: true },
      images: [],
      description: { type: String, default: "", trim: true },
      brand: String,
      rating: Number,
      quantity: Number,
      thumbnail:String,
      category:String,
      stock:Number
      
    },
  ],
});
module.exports = mongoose.model("cart", cartSchema);
