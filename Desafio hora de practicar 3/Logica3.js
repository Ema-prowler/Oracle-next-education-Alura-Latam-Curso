let contador = 1;
let contador2 = 10;
let contador3 = 0;
while (contador <= 10) {
  console.log("Ejecutando la iteración " + contador);
  contador = contador + 1;
}
//---
while (contador2 >= 0) {
  console.log("Ejecutando la iteracion en decremento " + contador2);
  contador2 = contador2 - 1;
}

contador3 = prompt("ingrese un numero y se hara una cuenta regresiva");
while (contador3 >= 0) {
  console.log("cuenta regresiva de t- :" + contador3);
  contador3 -= 1;
}
