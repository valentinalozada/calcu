var operandoa;
var operandob;
var operacion;

function init() {
    //variables
    var resultado = document.getElementById ("resultado");
    var reset = document.getElementById ("reset");
    var suma = document.getElementById ("sumar");
    var resta = document.getElementById ("restar");
    var multiplicacion = document.getElementById ("multiplicar");
    var division = document.getElementById ("dividir");
    var igual = document.getElementById ("igual");
    var uno = document.getElementById ("uno");
    var dos = document.getElementById ("dos");
    var tres = document.getElementById ("tres");
    var cuatro = document.getElementById ("cuatro");
    var cinco = document.getElementById ("cinco");
    var seis = document.getElementById ("seis");
    var siete = document.getElementById ("siete");
    var ocho = document.getElementById ("ocho");
    var nueve = document.getElementById ("nueve");
    var cero = document.getElementById ("cero"); //document.getElementById= buscar y concatenar el id con la variable de JS

    //eventos
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1"
    }// onclick= cuando se hace click - resultado.textContent = imprimir un texto en el cuadro de resultado

    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0"
    }
    reset.onclick = function(e) {
        resetear();
    }
    suma.onclick = function(e) {
     operandoa = resultado.textContent;
     operacion = "+";
     limpiar();
    }
    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
     }
    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    igual.onclick = function(e) {
        operandob = resultado.textContent;
        resolver();
       }
function limpiar() {
        resultado.textContent = "";
    }// deja en blanco la 
function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}// no solo deja en blanco el texto del resultado sino que vuelve a cero todos los operadores y anula la operacion
function resolver() {
    var res = 0
    switch (operacion) {
        case "+":
             res = parseFloat(operandoa) + parseFloat(operandob)
            break;
        
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob)
             break;
    
        case "*":
           res = parseFloat(operandoa) * parseFloat(operandob)
             break;

        case "/":
           res = parseFloat(operandoa) / parseFloat(operandob)
             break;
    }// condicional de operadoraciones matematicas 
    resetear();
    resultado.textContent = res;
    
}

}