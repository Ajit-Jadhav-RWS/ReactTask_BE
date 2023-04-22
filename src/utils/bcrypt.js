const bcrypt = require("bcrypt");

const plaintextPassword="12345rt"
async function hashPassword(plaintext) {
    const salt= await bcrypt.genSalt(10)
  const hash =  await bcrypt.hash(plaintext, salt); 
  return hash
}
// compare password
async function comparePassword(plaintext,hash) {
  const result = await bcrypt.compare(plaintext, hash);
  return result;
}

module.exports={
    hashPassword,
    comparePassword
}
