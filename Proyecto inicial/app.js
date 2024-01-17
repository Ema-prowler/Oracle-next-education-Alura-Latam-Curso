//la variable va del lado izquierdo (<)
//El valor va del lado derecho (>)
// una llave cerrada {} es un bloque de codigo
//alert('Hola Mundo');
let mensajeDeBienvenida = 'Bienvenido a la aplicación';
alert(mensajeDeBienvenida);

let numeroUsuario = prompt("Me puedes decir un numero por favor :");
let numeroSecreto = 6;
console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('adivinaste el numero');
}
else{alert('Lo siento no es el numero secreto')};