function verificarPalindrome(palabra) {
  var palindrome = true;
  var normal = palabra.split("");
  var alreves = palabra.split("").reverse();

  for (var i = 0; i < normal.length; i++) {
    if (alreves[i] != normal[i]) {
      console.log("La palabra NO ES PALINDROME");
      palindrome = false;
      break;
    }
    console.log("La palabra ES PALINDROME");
  }
}
verificarPalindrome("manzana");
verificarPalindrome("anona");
