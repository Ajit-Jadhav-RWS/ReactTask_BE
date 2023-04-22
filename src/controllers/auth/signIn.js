const User = require("../../models/schema/userSchema");
const apiResponse = require("../../utils/apiResponse");
const token = require("../../utils/jwtTokenGenerator");

const { comparePassword } = require("../../utils/bcrypt");
async function signIn(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      throw { code: 404, message: `${req.body.email} is not registered` };
      const result= await comparePassword(req.body.password,user.password)
      console.log("Password compare :::::::",result)
      if (!result)
      throw { code: 400, message: "Incorrect Email or Password" };
    // if (!(req.body.password === user.password))
    //   throw { code: 400, message: "Incorrect Email or Password" };
    const accessToken = await token.generateToken(user);
    res.status(200).send({ user, accessToken });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = signIn;
