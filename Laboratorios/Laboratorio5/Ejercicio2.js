function operarArreglo(arreglo) {
  var promedio = 0;
  var sum = 0;

  for (var i = 0; i < arreglo.length; i++) {
    sum = sum + arreglo[i];
  }
  promedio = sum / arreglo.length;
  console.log("Suma:")
  console.log(sum);
  console.log("Promedio:")
  console.log(promedio);
}

operarArreglo([2, 5, 11]);
