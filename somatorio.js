function soma(numeros) {
    var result = 0;
    for (var i = 0; i < numeros.length; i++) {
      result += numeros[i];
    }
    return result;
  }

  var numeros = [10, 20 , 30 , 40 , 50 ]; // INSIRA AQUI UM CONJUNTO DE NÚMERO PARA SEREM SOMADOS
  console.log(soma(numeros)); 