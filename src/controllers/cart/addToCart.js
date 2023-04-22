
const CartSchema = require("../../models/schema/cartSchema");
const apiResponse = require("../../utils/apiResponse");
async function addToCart(req, res) {
  const product = req.body.product;
  console.log(product)
  try {
    // find by email user cart
    let cartItem = await CartSchema.findOne({ email: req.body.email });

    // if not found create new 
    if (!cartItem) {
      req.body.total=1
      const newCartItem = new CartSchema(req.body);
      cartItem = await newCartItem.save();
      console.log(cartItem, "save");
    } 
    // update if found
    else {
      let index = 0;
      for (index; index < cartItem.product.length; index++) {
        if (cartItem.product[index].id == product.id) {
          console.log(index)
          cartItem.product[index].quantity+=1;
          break;
        }
      }
      if (index == cartItem.product.length) cartItem.product.push(product);
      cartItem = await CartSchema.findByIdAndUpdate(cartItem._id, {
        total:cartItem.product.length,product: cartItem.product,
      },{new:true});
      console.log(cartItem, "updated---");
    }
    res.status(200).send({ cartItem });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = addToCart;
