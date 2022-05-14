const Joi = require('joi');

const performsOperation = Joi.object().keys({
  numbers: Joi.array().items(Joi.number()).required().messages({
    'string.base': `"name" should be a type of 'text'`,
    'string.empty': `"name" cannot be an empty field`,
    'string.min': `"name" should have a minimum length of {#limit}`,
    'any.required': `"name" is a required field`
  }),
})

const validateFieldNumberForBasicOperations = (request, response) => {
  const validation = performsOperation.validate(request.body);

  const { error } = validation;
  if (error) {
    response.status(422).json({
      message: error.details[0].message,
      data: {
        message: validation.value,
      }
    });
  }
  return true;
}

module.exports = validateFieldNumberForBasicOperations;