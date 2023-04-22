const express = require("express");
const Router = express.Router();
const router = require("./");

// auth routes
Router.post("/signUp", router.signUp);
Router.post("/signIn", router.signIn);
Router.get("/verify",router.verifyAccessToken)

// product routes
Router.post("/addProduct",router.addProduct)
Router.get("/getAllProduct",router.getAllProduct)
Router.get("/getById/:id",router.getById)

// cart routes
Router.post("/addToCart",router.addToCart)
Router.patch("/removeFromCart/:id",router.removeFromCart)
Router.get("/getAllFromCart",router.getAllFromCart)


module.exports = Router;
