const express=require("express")
const router = express.Router();
const schema = require("../../models/joi/signUp");
const apiResponse = require("../../utils/apiResponse");
const signUp = require("../../controllers/signUp");

router.post('/signUp', async (req, res) => {
    try { 
        await schema.validateAsync(req.body);
        await signUp(req,res)
    } catch (error) {
            return res.status(error.code||400).send(apiResponse.error(error,400));
    }
});
module.exports = router;