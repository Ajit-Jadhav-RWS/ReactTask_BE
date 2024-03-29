const Joi=require('joi')
const cartSchema = Joi.object({
 
      id: Joi.number().required(),
      price: Joi.string().required(),
      images: Joi.array().items(Joi.string()).required(),
      title:Joi.string().required(),
      description:Joi.string().required(),
      brand: Joi.string().required(),
      rating: Joi.number().required(),
      quantity:Joi.number().required(),
      thumbnail:Joi.string().required(),
      category:Joi.string().required(),
      stock:Joi.number().required(),
      discountPercentage:Joi.number().optional(),
    
});
module.exports = cartSchema;
