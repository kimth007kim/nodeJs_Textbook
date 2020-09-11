function area(width, height) {
  var depth = 30;

  function volume() {
    return depth;
  }

  return width * height * volume();
}

area(10, 20);
