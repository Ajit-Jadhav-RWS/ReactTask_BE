const verifyToken = require("../utils/jwtTokenVerify");

const apiResponse = require("../utils/apiResponse");
async function tokenvalidator(req, res) {
	console.log("Reached Token Validator");
	const headers = req.headers;
    try {
        console.info(JSON.stringify(headers));
        const result = await verifyToken(headers.accesstoken);
        if(result.error) throw(result.error)
        res.status(200).send({result});
    } catch (error) {
        return res.status(error.code).send(apiResponse.error(error,400));
    }
}
module.exports = tokenvalidator;