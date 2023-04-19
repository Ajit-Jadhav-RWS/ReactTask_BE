const express=require("express")
const router = express.Router();
const cartSchema = require("../../models/joi/cartSchema");
const apiResponse = require("../../utils/apiResponse");
const addToCart = require("../../controllers/addToCart");
router.post('/addToCart', async (req, res) => {
    try { 
       await cartSchema.validateAsync(req.body);
        await addToCart(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;