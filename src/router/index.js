const signUp = require("./router/signUp");
const signIn = require("./router/signIn");
const verifyAccessToken = require("./router/verifyAccessToken");
const addToCart = require("./router/addToCart");
const removeFromCart = require("./router/removeFromCart");
const getAllFromCart = require("./router/getAllFromCart");
const addProduct = require("./router/addProduct");
const getAllProduct = require("./router/getAllProduct");

const getById = require("./router/getById");
module.exports = {
  signUp,
  signIn,
  verifyAccessToken,
  addToCart,
  removeFromCart,
  getAllFromCart,
  addProduct,
  getAllProduct,
  getById
};
