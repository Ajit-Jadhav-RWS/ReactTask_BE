const cartSchema = require("../../models/schema/cartSchema");
const CartSchema = require("../../models/schema/cartSchema");
const apiResponse = require("../../utils/apiResponse");
async function getAllFromCart(req, res) {
  try {
    // find by email user cart
    console.log(req.query,"get_______________-")
    let cartItem = await CartSchema.findOne({ email: req.query.email });
    if (!cartItem) cartItem=null;
    res.status(200).send({ cartItem });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = getAllFromCart;
