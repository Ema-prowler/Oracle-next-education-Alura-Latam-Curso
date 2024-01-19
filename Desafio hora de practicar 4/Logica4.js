console.log("bienvenido al programa");
let nombre = "Emanuel";
console.log("hola " + nombre);
alert("Hola " + nombre);
let respuesta = prompt("Cual es tu lenguaje de programacion favorito ?: ");
console.log(respuesta);
let valor1 = 5;
let valor2 = 10;
let resultado = 0;
resultado = valor1 + valor2;
console.log("La suma de: " + valor1, "y " + valor2, "Es: " + resultado);
resultado = valor1 - valor2;
console.log("La resta de: " + valor1, "y " + valor2, "Es: " + resultado);
let edad = prompt(
  "ingrese su edad y se comprobara si es mayor o menor de edad"
);
if (edad >= 18) {
  alert("es mayor de edad");
} else {
  alert("es menor de edad");
}
let numero = prompt(
  "ingrese un numero para verificar si es positivo o negativo"
);
if (numero > 0) {
  alert("su numero es positivo");
} else if (numero < 0) {
  alert("el numero ingresado es negativo");
} else {
  alert("el numero ingresado es 0");
}
let ciclo = 1;
while (ciclo <= 10) {
  console.log(ciclo);
  ciclo++;
}
let nota = prompt("ingrese una nota");
if (nota >= 7) {
  alert("aprobado");
} else {
  alert("desaprobado");
}
let randomNumber = Math.random();
console.log(randomNumber);
let numeroAleatorio1a10 = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorio1a10);
let numeroAleatorio1a1000 = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorio1a1000);
