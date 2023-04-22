const express=require("express")
const router = express.Router();
const apiResponse = require("../../utils/apiResponse");
const tokenvalidator = require("../../controllers/auth/tokenValidator");

router.get('/verify', async (req, res) => {
    try { 
        console.info(JSON.stringify(req.headers))
        if (!req.headers.accesstoken) {
            console.error("Access token not available in header");
            throw { message: "Invalid Header" };
        }
        await tokenvalidator(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;