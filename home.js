// punto 1 //
// a. Definir dos constantes (variables) llamadas usuario y password y asignar el valor administrador y 1234 respectivamente //
// b. Preguntar al usuario que ingresa al sitio a través de dos prompts el usuario y la contraseña del sistema // 
// c. Si el usuario y la contraseña coinciden con las del sistema (variable usuario y password) mostrar en el navegador un mensaje de bienvenida //
// d. Si no coinciden mostrar usuario o contraseña incorrectos //

$.when(Saludo());

// let usser = prompt('introduzca su usuario'); //
// let pass = parseInt(prompt('introduzca su pass')); // 

var usser = "administrador";
var pass = 1234;

function login(){
    let usuario = document.getElementById("usser").value;
    console.log("usuario ingresado", usuario);
    let password = document.getElementById("pass").value;
    console.log("password ingresado", password);

    if (usuario == usser && password == pass){
        console.log('bienvenido');
        alert("bienvenido");
    } else{
    console.log('Pass o Usser equivocado!'); 
    alert("vuelva a colocar su uss y pass");
}
}

// punto 2 //
// Permitir al usuario ingresar 3 números dentro de la plataforma. Mostrar (por consola) una vez terminado el proceso cual es el mayor y cual el menor. usar operaciones racionales con if //

function minMax(){
    let num1 = parseInt(prompt('Intruduzca el 1° Número: '));
    let num2 = parseInt(prompt('Introduzca el 2° Número: '));
    let num3 = parseInt(prompt('Introduzca el 3° Número: '));
    
    if(num1 == num2 && num2 == num3){
        console.log("Los números son iguales");
    }else if(num1 > num2 && num1 > num3) {
        console.log(num1, "es el mayor");
    }else if(num1 > num2 && num1 < num3) {
        console.log(num3, "es el mayor");
        console.log(num2, 'es el menor')
    }else if(num2 > num3 && num2 > num1) {
        console.log(num2, "es el mayor");
    }else if(num2 > num3 && num2 < num1) {
        console.log(num1, "es el mayor");
        console.log(num3, 'es el menor')
    }else if(num3 > num1 && num3 > num2) {
        console.log(num3, "es el mayor");
    }else if(num3 > num1 && num3 < num2) {
        console.log(num2, "es el mayor");
        console.log(num1, 'es el menor')
    }

    if(num1 < num2 && num1 < num3) {
        console.log(num1, "es el menor");
    }else if(num2 < num3 && num2 < num1) {
        console.log(num2, "es el menor");
    }else if(num3 < num1 && num3 < num2) {
        console.log(num3, "es el menor");
    } 
}

// punto 3 //
// Definir una variable del tipo cadena cuyo contenido sea �Hola Mundo�. //
// Cuando el usuario presiona un botón �Mostrar mensaje�, hacer que se muestre el contenido de la variable por consola. //

function Saludo() {
    let saludo = "hola" + "mundo" + "!";
    alert(saludo);
    console.log(saludo);
}

//en el html5 hice el botton "mostrar mensaje", ahi llame la funcion
