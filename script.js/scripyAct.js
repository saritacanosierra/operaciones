//1
function contarParesImpares() {
    const numeroInput = document.getElementById("numeroInput");
    const resultadoPar = document.getElementById("resultadoPar");
    const resultadoImpar = document.getElementById("resultadoImpar");
    const resultado = document.getElementById("resultado");    

    const numero = parseInt(numeroInput.value);

    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            contadorPares++;
        } else {
            contadorImpares++;
        }
    }

    resultado.textContent = `Cantidad de números pares: ${contadorPares}, impares: ${contadorImpares}`;
}

// 2
function calcularFactorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoFactorial = document.getElementById('resultadoFactorial');

    if (numero < 0) {
        resultadoFactorial.innerHTML = "El factorial de un número negativo no está definido.";
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        resultadoFactorial.innerHTML = `El factorial de ${numero} es ${factorial}.`;
    }
}


//3_
function validacionContraseña(){
    console.log("entrar")
        const contraseñaIngresada = document.getElementById('contraseña').value;
        const resultado3 = document.getElementById('resultado3');
        console.log(contraseñaIngresada)

        if (contraseñaIngresada === "secreto123") {
            resultado3.innerHTML = "Contraseña correcta. ¡Bienvenido!";
        } else {
            resultado3.innerHTML = "Contraseña incorrecta. ";
        }
        
     //   resultado3.textContent=`${contraseña}`;
}

//4
function tablasDeMultiplicar() {
    const numeroMultiplicar = parseInt(document.getElementById('numeroMultiplicar').value);
    const tabla = document.getElementById('tablaHTML');
   
    let tablaHTML = '<tr><th>Operación</th><th>Resultado</th></tr>';
    for (let i = 1; i <= 5; i++) {
        const resultado = numeroMultiplicar * i;
        tablaHTML += `<tr><td>${numeroMultiplicar} x ${i}</td><td>${resultado}</td></tr>`;
    }

    tabla.innerHTML = tablaHTML;

}
//5_
function verificarNumero(){
    const traerAdivinar=document.getElementById('adivinar')
    const numeroAleatorio= Math.floor((Math.random()*100)+1);
    const resultado5 = document.getElementById('resultado5');
    
let respuesta5="";

const numeroIngresado = parseInt(traerAdivinar.value);

if (numeroIngresado === numeroAleatorio) {
    respuesta5 = `¡felicitaciones! encontraste el número`;
        }
        else if (numeroIngresado < numeroAleatorio) {
            respuesta5 = `Demasiado bajo. Intenta nuevamente.`;
        } else {
            respuesta5 =  `Demasiado alto. Intenta nuevamente.`;
        }
               
        resultado5.innerHTML= respuesta5;
    }

//6_
function contarDigitos() {
    const numeroIngresado = document.getElementById('numeroIngresado').value;
    const numeroComoTexto = numeroIngresado.toString();
    const resultado6 = document.getElementById('resultado6');

    const cantidadDeDigitos = numeroComoTexto.length;
    resultado6.textContent = `El número ${numeroIngresado} tiene ${cantidadDeDigitos} dígitos.`;
}

//7
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function calcularSumaPrimos() {
    const n = parseInt(document.getElementById("n").value);

    if (n <= 0) {
        document.getElementById("resultado7").textContent = "Por favor, ingresa un número válido.";
        return;
    }

    let suma = 0;
    let contador = 0;
    let numero = 2;

    while (contador < n) {
        if (esPrimo(numero)) {
            suma += numero;
            contador++;
        }
        numero++;
    }

    document.getElementById("resultado7").textContent = `La suma de los primeros ${n} números primos es: ${suma}`;
}


//8
function generarFibonacci() {
    const termino = parseInt(document.getElementById("numeroFibonacciIngresado").value);

    if (termino <= 0) {
        document.getElementById("resultado8").textContent = "Por favor, ingresa un número válido.";
        return;
    }

    const fibonacci = [0, 1];
    for (let i = 2; i < termino; i++) {
        const nuevoTermino = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nuevoTermino);
    }

    document.getElementById("resultado8").textContent = "Secuencia de Fibonacci: " + fibonacci.join(", ");
}
   
    
//9
function palindromo() {
    const palabra = document.getElementById('palabraIngresada').value;
    const resultado9 = document.getElementById('resultado9');

    const palabraIngresada = palabra.toLowerCase().replace(/\s+/g, '');

    
    const palabraInvertida = palabraIngresada.split('').reverse().join('');

    if (palabraIngresada === palabraInvertida) {
        console.log(`${palabra} es un palíndromo`);
        resultado9.innerHTML = `${palabra} es un palíndromo`;
    } else {
        console.log(`${palabra} no es un palíndromo`);
        resultado9.innerHTML = `${palabra} no es un palíndromo`;
    }
}

//10
function convertirTemperatura() {
    const temperatura = parseFloat(document.getElementById('temperatura').value);
    const cambiar = document.getElementById('cambiar').value;
    let resultado = 0;

    if (cambiar === 'celsiusToFahrenheit') {
        resultado = (temperatura * 9/5) + 32;
        document.getElementById('resultado10').innerHTML = `${temperatura}°C equivale a ${resultado}°F.`;
        console.log(`${temperatura}°C equivale a ${resultado}°F.`);
    } else if (cambiar === 'fahrenheitToCelsius') {
        resultado = (temperatura - 32) * 5/9;
        document.getElementById('resultado10').innerHTML = `${temperatura}°F equivale a ${resultado}°C.`;
        console.log(`${temperatura}°F equivale a ${resultado}°C.`);
    }
}
//11
function contarVocalesYConsonantes() {
    const palabra = document.getElementById('palabra').value.toLowerCase();
    const resultado11 = document.getElementById('resultado11');
    let vocales = 0;
    let consonantes = 0;

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];

        if (letra.match(/[aeiouáéíóú]/)) {
            vocales++;
        } else if (letra.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            consonantes++;
        }
    }

    document.getElementById('resultado11').innerHTML = `Vocales: ${vocales}, Consonantes: ${consonantes}`;
}

//12
function calcularPotencia() {
    const base = parseFloat(document.getElementById('base').value);
    const exponente = parseInt(document.getElementById('exponente').value);
    const resultado12 = document.getElementById('resultado12');

    
    const resultado1 = base ** exponente;



    resultado12.innerHTML = `Resultado : ${resultado1}`;
}

//13
function jugar() {
    const opciones = ["piedra", "papel", "tijeras"];
    const opcionUsuario = document.getElementById('opcionUsuario').value.toLowerCase();
    const opcionComputadora = opciones[Math.floor(Math.random() * 3)];

    const resultado13 = document.getElementById('resultado13');

    if (opcionUsuario === opcionComputadora) {
        resultado13.innerHTML = `¡Empate! Ambos eligieron ${opcionUsuario}.`;
    } else if (
        (opcionUsuario === "piedra" && opcionComputadora === "tijeras") ||
        (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
        (opcionUsuario === "tijeras" && opcionComputadora === "papel")
    ) {
        resultado13.innerHTML = `¡Ganaste! ${opcionUsuario} vence a ${opcionComputadora}.`;
    } else {
        resultado13.innerHTML = `¡La computadora gana! ${opcionComputadora} vence a ${opcionUsuario}.`;
    }
}
