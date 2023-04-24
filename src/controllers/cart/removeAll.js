const CartSchema = require("../../models/schema/cartSchema");
const apiResponse = require("../../utils/apiResponse");
async function removeAll(req, res) {
  const query = req.query;
  try {
    // find by email user cart
    let cartItem = await CartSchema.findOneAndDelete({ email: query.email });
        console.log(cartItem, "deleted---");
        
    return res.status(200).send({ cartItem });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = removeAll;
