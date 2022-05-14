const Joi = require('joi');

const performsOperation = Joi.object().keys({
  numbers: Joi.array().items(Joi.string().regex(/^\d+(?:\.\d+)?$/))
}).required().messages({
  'string.base': `"numbers" should be a type of 'number'`,
  'string.empty': `"numbers" cannot be an empty field`,
  'string.min': `"numbers" should have a minimum length of {#limit}`,
  'any.required': `"numbers" is a required field`
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