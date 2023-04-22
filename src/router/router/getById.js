const express=require("express")
const router = express.Router();
const apiResponse = require("../../utils/apiResponse");
const getById = require("../../controllers/product/getById");
router.get('/getById/:id', async (req, res) => {
    try { 
        await getById(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;