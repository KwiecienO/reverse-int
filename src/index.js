module.exports = function reverse (n) {
  var stringOfN = String(n);
  var i = 0;
  var result = '';
if (n < 0 ) {
  var positiveN = n * (-1);
  var stringOfPositiveN = String(positiveN);
  while (i < stringOfPositiveN.length) {
    result = stringOfPositiveN[i] + result;
    i++;
  }
}
  else {
    while (i < stringOfN.length) {
        result = stringOfN[i] + result;
        i++;
      }

  }

  return Number(result);
};
