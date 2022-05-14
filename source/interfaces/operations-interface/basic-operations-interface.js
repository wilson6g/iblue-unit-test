const express = require('express');
const basicOperationsInterface = express.Router();
const { sum, subtract, division, multiply } = require('../../domains/operations/basic-operations-domain');
const validateFieldNumberForBasicOperations = require('../../controllers/basic-operations/verify-inputs');

basicOperationsInterface.post('/api/sum', (request, response) => {
  const isValid = validateFieldNumberForBasicOperations(request, response);

  if (isValid != true) return response.status(400).json(isValid).send();

  const sumResult = sum(request, response);

  return response.status(201).json(sumResult).send();
})

basicOperationsInterface.post('/api/subtract', (request, response) => {
  const isValid = validateFieldNumberForBasicOperations(request, response);

  if (isValid != true) return response.status(400).json(isValid).send();

  const subtractResult = subtract(request, response);

  return response.status(201).json(subtractResult).send();
})

basicOperationsInterface.post('/api/multiply', (request, response) => {
  const isValid = validateFieldNumberForBasicOperations(request, response);

  if (isValid != true) return response.status(400).json(isValid).send();

  const multiplyResult = multiply(request, response);

  return response.status(201).json(multiplyResult).send();
})

basicOperationsInterface.post('/api/division', (request, response) => {
  const isValid = validateFieldNumberForBasicOperations(request, response);

  if (isValid != true) return response.status(400).json(isValid).send();

  const divisionResult = division(request, response);

  return response.status(201).json(divisionResult).send();
})

module.exports = basicOperationsInterface;