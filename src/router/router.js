const express = require("express");
const Router = express.Router();
const router = require("./");
Router.post("/signUp", router.signUp);
Router.post("/signIn", router.signIn);
Router.get("/verify",router.verifyAccessToken)
Router.post("/addToCart",router.addToCart)
Router.patch("/removeFromCart",router.removeFromCart)
module.exports = Router;
