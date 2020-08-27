exports.abs = function (number) {
  if (0 < number) {
    return number;
  } else {
    return -number;
  }
};

exports.cicleArea = function (radius) {
  return radius * radius * Math.PI;
};
