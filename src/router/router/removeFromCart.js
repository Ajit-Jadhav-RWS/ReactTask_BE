const express=require("express")
const router = express.Router();
const apiResponse = require("../../utils/apiResponse");
const removeFromCart = require("../../controllers/cart/removeFromCart");
router.patch('/removeFromCart/:id', async (req, res) => {
    try { 
        await removeFromCart(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;