const express=require("express")
const router = express.Router();
const apiResponse = require("../../utils/apiResponse");
const getAllFromCart = require("../../controllers/cart/getAllFromCart");
router.get('/getAllFromCart', async (req, res) => {
    try { 
        await getAllFromCart(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;