const ProductSchema = require("../../models/schema/productSchema");
const apiResponse = require("../../utils/apiResponse");
async function getById(req, res) {
  try {
    let product = await ProductSchema.find({id:req.params.id});
    if (!product) product=null;
    res.status(200).send({ product });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = getById;
