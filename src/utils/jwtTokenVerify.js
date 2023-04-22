const User = require("../models/schema/userSchema");
const jwt = require("jsonwebtoken");
async function verifyToken(token) {
	try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, payload) => {
            if (error) {
                console.log("!!!!!!!!!!!!!!!!!!!!!");
                throw { error: { code: 401, message:error.message } };
            }
            return payload;
        });

		console.log(`decoded::::::::`+ decoded);

        const user = await User.findById(decoded._id);
		if (!user) {
			console.log("TokenService.verifyToken() invalid token");
            return { error: { message: "Invalid Token" } };
		}
		console.debug("User exists with id", user._id);

		return decoded;
    } catch (error) {
        return error
	}
} module.exports = verifyToken;