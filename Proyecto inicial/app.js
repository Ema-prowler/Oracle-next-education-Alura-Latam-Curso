//la variable va del lado izquierdo (<)
//El valor va del lado derecho (>)
// una llave cerrada {} es un bloque de codigo
//alert('Hola Mundo');
//let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert("Bienvenidos al juego del número secreto");

let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = "vez";

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("indique un numero del entre el 1 y 10");

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    //                                        ┌--------------------------------------------------┐
    alert(
      `adivinaste, el numero es: ${numeroUsuario} lo hiciste en ${intentos} ${palabraVeces}`
    ); //Usando TEMPLATE STRING
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    intentos = intentos + 1;
    palabraVeces = "veces";
  }
}
