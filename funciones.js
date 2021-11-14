/**Boton limpiar**/ 

function limpiar() {
    document.getElementById('formulario').reset();
}
/**Sumar */
function sumar() {
    var num1= parseInt(document.getElementById('vl1').value);
    var num2=parseInt(document.getElementById('vl2').value);

    document.getElementById('resultado').innerHTML=num1+num2;
}

/**Restar */
function restar() {
    var num1= parseInt(document.getElementById('vl1').value);
    var num2=parseInt(document.getElementById('vl2').value);

    document.getElementById('resultado').innerHTML=num1-num2;
}

/**Multiplicar */
function multiplicar() {
    var num1= parseInt(document.getElementById('vl1').value);
    var num2=parseInt(document.getElementById('vl2').value);

    document.getElementById('resultado').innerHTML=num1*num2;
}

/**Dividir */

function dividir() {
    var num1= parseInt(document.getElementById('vl1').value);
    var num2=parseInt(document.getElementById('vl2').value);

    document.getElementById('resultado').innerHTML=num1/num2;
}