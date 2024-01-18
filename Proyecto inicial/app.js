//la variable va del lado izquierdo (<)
//El valor va del lado derecho (>)
// una llave cerrada {} es un bloque de codigo
//alert('Hola Mundo');
//let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert('Bienvenidos al juego del número secreto');

let numeroUsuario = prompt('indique un numero del entre el 1 y 10');
let numeroSecreto = 6;

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert(`adivinaste, el numero es: ${numeroUsuario}`);
}
else{
    alert('Lo siento no es el numero secreto' + 'el numero que elegiste fue' + numeroSecreto, 'pero elegiste: ' + numeroUsuario)
};
