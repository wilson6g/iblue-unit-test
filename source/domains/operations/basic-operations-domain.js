const sum = (request, response) => {
  const { numbers } = request.body;

  const sumResult = numbers.reduce(function (sumTotal, number) {
    return parseFloat(sumTotal) + parseFloat(number);
  });

  return sumResult;
}

const multiply = (request, response) => {
  const { numbers } = request.body;

  const multiplyResult = numbers.reduce(function (multiplyTotal, number) {
    return parseFloat(multiplyTotal) * parseFloat(number);
  });

  return multiplyResult;
}

const subtract = (request, response) => {
  const { numbers } = request.body;

  const subtractResult = numbers.reduce(function (subtractTotal, number) {
    return parseFloat(subtractTotal) - parseFloat(number);
  });

  return subtractResult;
}

const division = (request, response) => {
  const { numbers } = request.body;

  const divisionResult = numbers.reduce(function (divisionTotal, number) {
    return parseFloat(divisionTotal) / parseFloat(number);
  });

  return divisionResult;
}

module.exports = { sum, division, subtract, multiply };