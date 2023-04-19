const User = require("../models/schema/userSchema");
const CartSchema = require("../models/schema/cartSchema");
const apiResponse = require("../utils/apiResponse");
async function removeFromCart(req, res) {
  const email=req.body.email;
  const id =req.body.id
  try {
    // find by email user cart
    let cartItem = await CartSchema.findOne({ email:email });

    if (!cartItem) {
   throw { code: 400, message: `product not found` }
    } else {
      let index = 0;
      for (index; index < cartItem.product.length; index++) {
        if (cartItem.product[index].id == id) {
          console.log(index)
          break;
        }
      }
      if (index == cartItem.product.length) throw {code:400,message:"product not found"};
      cartItem.product.splice(index, 1)
      cartItem = await CartSchema.findByIdAndUpdate(cartItem._id, {
        product: cartItem.product,
      },{new:true});
      console.log(cartItem, "removed---");
    }
    return res.status(200).send({ cartItem });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = removeFromCart;
