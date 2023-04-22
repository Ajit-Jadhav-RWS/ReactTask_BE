const express=require("express")
const router = express.Router();
const product = require("../../models/joi/productSchema");
const apiResponse = require("../../utils/apiResponse");
const addProduct = require("../../controllers/product/addProduct");
router.post('/addProduct', async (req, res) => {
    try { 
       await product.validateAsync(req.body);
        await addProduct(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;