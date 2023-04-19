const express=require("express")
const router = express.Router();
const apiResponse = require("../../utils/apiResponse");
const removeFromCart = require("../../controllers/removeFromCart");
router.patch('/removeFromCart', async (req, res) => {
    try { 
        await removeFromCart(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;