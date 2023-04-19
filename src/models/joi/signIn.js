const Joi = require('joi')

const schema= Joi.object({
    email: Joi.string().email().min(6).lowercase().required(),
    password:Joi.required()
})
   
module.exports = schema ;