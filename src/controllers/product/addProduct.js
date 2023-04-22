const productSchema = require("../../models/schema/productSchema");
const apiResponse = require("../../utils/apiResponse");
async function addProduct(req, res) {
  try {
    let product = await productSchema.findOne({ id: req.body.id });
    if (product) throw { code: 400, message: `Product allready exist` };
    const newProduct = new productSchema(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).send({ savedProduct });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = addProduct;
