const sum = (request, response) => {
  const { numbers } = request.body;

  const sumResult = numbers.reduce(function (sumTotal, number) {
    return sumTotal + number;
  });

  return sumResult;
}

const multiply = (request, response) => {
  const { numbers } = request.body;

  const multiplyResult = numbers.reduce(function (multiplyTotal, number) {
    return multiplyTotal * number;
  });

  return multiplyResult;
}

const subtract = (request, response) => {
  const { numbers } = request.body;

  const subtractResult = numbers.reduce(function (subtractTotal, number) {
    return subtractTotal - number;
  });

  return subtractResult;
}

const division = (request, response) => {
  const { numbers } = request.body;
  
  const divisionResult = numbers.reduce(function (divisionTotal, number) {
    return divisionTotal / number;
  });

  return divisionResult;
}

module.exports = { sum, division, subtract, multiply };