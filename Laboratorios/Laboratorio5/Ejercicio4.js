function numero(num) {
  var arreglo = Array();
  var ganar = false;

  console.log("los números eran:");
  for (var i = 0; i < 20; i++) {
    arreglo[i] = Math.floor(Math.random() * 100) + 1;
    console.log(arreglo[i]);
  }
  for (var j = 0; j < arreglo.length; j++) {
    function ordenar(arreglo) {
      var ordenado = false
      while (!ordenado) {
        ordenado = true;
        arreglo.forEach(function (element, indice, array) {
          if (element > array[indice + 1]) {
            array[indice] = array[indice + 1];
            array[indice + 1] = element;
            ordenado = false;
          }
        });
      }
      return arreglo;
    }

    console.log(ordenar([4, 5, 2, 3, 1, 10]));
    if (arreglo[j] == num) {
      console.log("FELICIDADES, ¡GANASTE!");
      ganar = true;
      break;
    }
  }
  if (ganar == false) {
    console.log("Perdiste:(");
  }
}
numero(15);

