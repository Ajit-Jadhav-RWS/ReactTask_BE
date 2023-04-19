const bcrypt = require("bcrypt");

const plaintextPassword="12345rt"
async function hashPassword(plaintextPassword) {
    const salt= await bcrypt.genSalt(10)
  const hash =  await bcrypt.hash(plaintextPassword, salt); 
  return hash
}
// compare password
async function comparePassword(plaintextPassword,hash) {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}

module.exports={
    hashPassword,
    comparePassword
}
