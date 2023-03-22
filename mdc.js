function mdc(a, b) {
    while (b !== 0) {
      var temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

console.log(mdc(12, 18)); // 6
