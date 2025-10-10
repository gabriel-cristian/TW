//functie care verifica daca doua numere sund divizibile

function checkDivisible(n, divizor) {
  if (n % divizor === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));
