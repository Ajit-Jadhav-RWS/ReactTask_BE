const Joi = require('joi')
const passwordComplexity = require("joi-password-complexity");
    const complexityOptions = {
        min: 8,
        max: 15,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 2,
    };
      const schema= Joi.object({
        first_name: Joi.string().regex(/^[a-zA-Z ,.']{3,30}$/).required(),
        last_name: Joi.string().regex(/^[a-zA-Z ,.']{3,30}$/).required(),
        email: Joi.string().email().min(6).lowercase().required(),
        password: passwordComplexity(complexityOptions).required()
       })
   
module.exports = schema ;