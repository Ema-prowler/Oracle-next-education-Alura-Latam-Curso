//la variable va del lado izquierdo (<)
//El valor va del lado derecho (>)
// una llave cerrada {} es un bloque de codigo
//alert('Hola Mundo');
//let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert("Bienvenidos al juego del número secreto");

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt("indique un numero del entre el 1 y 10"));

  console.log(typeof numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    //                                        ┌--------------------------------------------------┐
    alert(
      `adivinaste, el numero es: ${numeroUsuario} lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      }`
    ); //Usando TEMPLATE STRING
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    //intentos = intentos + 1;
    //intentos += 1;
    intentos++;

    // palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`Supero el maximo de intentos ${maximosIntentos}`);
      break;
    }
  }
}
