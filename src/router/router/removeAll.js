const express=require("express")
const router = express.Router();
const apiResponse = require("../../utils/apiResponse");
const removeAll = require("../../controllers/cart/removeAll");
router.delete('/removeAll', async (req, res) => {
    try { 
        console.log("req================")
        await removeAll(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;