const CartSchema = require("../../models/schema/cartSchema");
const apiResponse = require("../../utils/apiResponse");
async function removeFromCart(req, res) {
  const body = req.body;
  const id = req.params.id;
  try {
    // find by email user cart
    let cartItem = await CartSchema.findOne({ email: body.email });

    if (!cartItem) {
      throw { code: 400, message: `product not found` };
    } else {
      let index = 0;
      for (index; index < cartItem.product.length; index++) {
        if (cartItem.product[index].id == id) {
          console.log(index);
          break;
        }
      }
      if (index == cartItem.product.length)
        throw { code: 400, message: "product not found" };

        // remove complete 
      if (body.action == "remove") {
        cartItem.product.splice(index, 1);
        cartItem = await CartSchema.findByIdAndUpdate(
          cartItem._id,
          {
            total:cartItem.total-1,product: cartItem.product,
          },
          { new: true }
        );
        console.log(cartItem, "removed---");
      }

      // decrease quantity
      if (body.action == "quantity") {
        if(cartItem.product[index].quantity==1||cartItem.product[index].quantity<1){
            cartItem.product.splice(index, 1);
        cartItem = await CartSchema.findByIdAndUpdate(
          cartItem._id,
          {
            total:cartItem.total-1, product: cartItem.product,
          },
          { new: true }
        );
        }else{
        cartItem.product[index].quantity--;
        cartItem = await CartSchema.findByIdAndUpdate(
          cartItem._id,
          {
            product: cartItem.product,
          },
          { new: true }
        );
        console.log(cartItem, "quantity--");
        }
      }
    }
    return res.status(200).send({ cartItem });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = removeFromCart;
