const express=require("express")
const router = express.Router();
const apiResponse = require("../../utils/apiResponse");
const getAllProduct = require("../../controllers/product/getAllProduct");
router.get('/getAllProduct', async (req, res) => {
    try { 
        await getAllProduct(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;