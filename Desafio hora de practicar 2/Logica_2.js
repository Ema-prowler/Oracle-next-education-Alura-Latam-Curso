let dia = prompt ('que dia de la semana es ?');
if (dia == 'sabado' || dia == 'domingo' ) {
    alert('buen fin de semana');
}else{alert('buena semana')}

let verificacion = prompt ('escribe un numero positivo o negativo: ');
if (verificacion > 0) {
    alert('el numero es positivo');
} else if (verificacion < 0){
    alert('el numero es negativo')
}
alert('Bienevindo al juego adivina la palabra');
alert('elija una de estas palabras y obtendra 120 puntos si es la correcta :divine,exalted,chaos');
let palabra = prompt('Escriba la palabra');
let puntuacion = 0;
let palabraSecreta = 'divine'; 
if (palabra == palabraSecreta) {
    puntuacion =+ 120;
    alert('Es correcto obtiene 120 puntos');
} else {
    alert('no es correcto ja');
}
alert('su puntuacion es: ' + puntuacion);

alert('Ahora se mostrara el saldo actual de su cuenta');
let saldo = 9999999999;
alert(`su saldo actual es: ${saldo}` + ' Pesos');

let nombre = prompt ('por favor ingrese su nombre');
alert(`bienvenido : ${nombre}`);
