
const ProductSchema = require("../../models/schema/productSchema");
const apiResponse = require("../../utils/apiResponse");
async function getAllProduct(req, res) {
  try {
    let product = await ProductSchema.find();
    if (!product) product=null;
    res.status(200).send({ product });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = getAllProduct;
