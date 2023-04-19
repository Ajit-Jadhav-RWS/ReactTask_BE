const express=require("express")
const router = express.Router();
const schema = require("../../models/joi/signIn");
const apiResponse = require("../../utils/apiResponse");
const signIn = require("../../controllers/signIn");
router.post('/signIn', async (req, res) => {
    try { 
        await schema.validateAsync(req.body);
        await signIn(req,res)
    } catch (error) {
            return res.status(400).send(apiResponse.error(error,400));
    }
});
module.exports = router;