function fibonacci(n) {
    var a = 0, b = 1, c;
    if (n === 0) return a;
    if (n === 1) return b;
    for (var i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  console.log(fibonacci(8)); // Insira um número