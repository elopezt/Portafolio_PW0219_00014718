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