function conversion(num) {
    var numBinario = "";
    while (num > 0) {
        numBinario = num % 2 + numBinario;
        num = Math.floor(num / 2);
    }
    return numBinario;
}

console.log(conversion(15));