function ocurrencias(datos) {
  var cont = 0;
  for (var i = 0; i < datos[0].length; i++) {
    if (datos[0][i] == datos[1]) {
      cont++;
    }
  }
  console.log(cont);
}
ocurrencias([[7,1,2,7,7,5,9,3, "hola"], 7]);
