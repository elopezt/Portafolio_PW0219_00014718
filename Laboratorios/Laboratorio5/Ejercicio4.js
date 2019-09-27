function numero(num) {
  var arreglo = Array();
  var ganar = false;

  console.log("los números eran:");
  for (var i = 0; i < 20; i++) {
    arreglo[i] = Math.floor(Math.random() * 100) + 1;
    console.log(arreglo[i]);
  }
  for (var j = 0; j < arreglo.length; j++) {
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

