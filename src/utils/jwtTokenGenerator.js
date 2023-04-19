const JWT = require("jsonwebtoken");

module.exports = {
	generateToken,
};

async function generateToken(content) {
        // generating Access Token
        return new Promise((resolve, reject) => {
            const payload = {
                _id:content._id,
                first_name: content.first_name,
                last_name: content.last_name,
                email: content.email,
            };
            const secret = process.env.ACCESS_TOKEN_KEY;
            const options = {
                expiresIn: "1d"
            };
            
            JWT.sign(payload, secret, options, (error, token) => {
                if (error) reject(error);
                resolve(token);
            })
        });
    }