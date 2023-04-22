const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
 
      id: Number,
      price: String,
      title: { type: String, default: "", trim: true },
      images: [],
      description: {},
      brand: String,
      rating: Number,
      quantity: Number,
      thumbnail:String,
      category:String,
      stock:Number
    
});
module.exports = mongoose.model("product", productSchema);
