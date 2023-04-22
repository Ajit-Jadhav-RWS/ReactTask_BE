const User = require("../../models/schema/userSchema");
const apiResponse = require("../../utils/apiResponse");
const { hashPassword } = require("../../utils/bcrypt");
async function signUp(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      throw { code: 400, message: `${req.body.email} allready register` };
      const password =await hashPassword(req.body.password)
    const newuser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: password,
    });
    const saveUser = await newuser.save();
    res.status(200).send({ saveUser });
  } catch (error) {
    console.log(error);
    res.status(error.code).send(apiResponse.error(error, error.code));
  }
}
module.exports = signUp;
