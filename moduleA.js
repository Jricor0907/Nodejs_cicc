// create arrow function accept number of arguments using the REST operator
exports.mySum = (...num) => {
  return num.reduce((prev, cur) => {
    return prev + cur;
  });
};
