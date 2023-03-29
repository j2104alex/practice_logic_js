//Ejercicio 1 operaciones

//Ejercicio 1-suma
function suma() {
    let numeroUno, numeroDos

    numeroUno = parseInt(document.getElementById("number1").value);
    numeroDos = parseInt(document.getElementById("number2").value);

    while (isNaN(numeroUno)) {
        numeroUno = parseInt(prompt("Ingrese un valor válido en el primer numero"));
        document.getElementById("number1").value = numeroUno;
    }
    while (isNaN(numeroDos)) {
        numeroDos = parseInt(prompt("Ingrese un valor válido en el segundo numero"));
        document.getElementById("number2").value = numeroDos;
    }
    let suma = numeroUno + numeroDos;
    console.log(`La suma de ${numeroUno} y ${numeroDos} es: ${suma}`)
}
//Ejercicio 11-resta
function resta() {
    let numeroUno, numeroDos

    numeroUno = parseInt(document.getElementById("number1").value);
    numeroDos = parseInt(document.getElementById("number2").value);

    while (isNaN(numeroUno)) {
        numeroUno = parseInt(prompt("Ingrese un valor válido en el primer numero"));
        document.getElementById("number1").value = numeroUno;
    }
    while (isNaN(numeroDos)) {
        numeroDos = parseInt(prompt("Ingrese un valor válido en el segundo numero"));
        document.getElementById("number2").value = numeroDos;
    }
    let resta = numeroUno - numeroDos;
    console.log(`La resta de ${numeroUno} y ${numeroDos} es: ${resta}`)
}
//Ejercicio 1-multiplicacion
function multiplicacion() {
    let numeroUno, numeroDos

    numeroUno = parseInt(document.getElementById("number1").value);
    numeroDos = parseInt(document.getElementById("number2").value);

    while (isNaN(numeroUno)) {
        numeroUno = parseInt(prompt("Ingrese un valor válido en el primer numero"));
        document.getElementById("number1").value = numeroUno;
    }
    while (isNaN(numeroDos)) {
        numeroDos = parseInt(prompt("Ingrese un valor válido en el segundo numero"));
        document.getElementById("number2").value = numeroDos;
    }
    let multiplicacion = numeroUno * numeroDos;
    console.log(`La multiplicación de ${numeroUno} y ${numeroDos} es: ${multiplicacion}`);
}
//Ejercicio 1-division
function division() {
    let numeroUno, numeroDos

    numeroUno = parseInt(document.getElementById("number1").value);
    numeroDos = parseInt(document.getElementById("number2").value);

    while (isNaN(numeroUno)) {
        numeroUno = parseInt(prompt("Ingrese un valor válido en el primer numero"));
        document.getElementById("number1").value = numeroUno;
    }
    while (isNaN(numeroDos)) {
        numeroDos = parseInt(prompt("Ingrese un valor válido en el segundo numero"));
        document.getElementById("number2").value = numeroDos;
    }

    while (numeroDos == 0) {
        alert("El número es indeterminado");
        numeroDos = parseInt(prompt("Ingrese un valor válido en el segundo numero"));
        document.getElementById("number2").value = numeroDos;
    }

    let division = numeroUno / numeroDos;
    console.log(`La división de ${numeroUno} y ${numeroDos} es: ${division}`)
}

//Ejercicio 2 conversion grados
//Ejercicio 2-°F a °C
function gradosConversion1() {
    let farenheit = parseFloat(document.getElementById("gradosConvertir").value);

    let celsius = (farenheit - 32) / 1.8;
    celsius = celsius.toFixed(2);
    alert(farenheit + "°F corresponde a: " + celsius + " °C");
}
//Ejercicio 2-°C a °F
function gradosConversion2() {
    let celsius = parseFloat(document.getElementById("gradosConvertir").value);

    let farenheit = (celsius * 1.8) + 1.8;
    farenheit = farenheit.toFixed(2);
    alert(celsius + "°C corresponde a: " + farenheit + " °F");
}

//Ejercicio 3 horas-minutos
function convertirHoras() {
    let horasIngresadas = parseFloat(document.getElementById("horas_Ingresadas").value);
    let horas = Math.floor(horasIngresadas / 60);
    let minutos = horasIngresadas % 60;
    console.log(horasIngresadas + " corresponde a un total de: " + horas + " horas y " + minutos + " minutos")
}

//Ejercicio 4-Descuento
function calcularDescuento() {
    let descuento = document.getElementById("descuento").value;
    let valorCompra = parseFloat(document.getElementById("valorCompra").value);
    descuento = parseFloat(descuento.replace("%", ""));
    let valorDescuento = (valorCompra * descuento) / 100;
    let valorTotal = valorCompra - ((valorCompra * descuento) / 100);
    console.log("El valor de la compra es de: $" + valorCompra + " , el valor de descuento es de: $" + valorDescuento + " , el valor total a pagar es: $" + valorTotal + ".")
}
//Ejercicio 5-Exposición validar
function validar() {
    let nombre = document.getElementById("nombre").value;
    let articulacion = document.getElementById("articulacion").value;
    let edad = parseInt(document.getElementById("edad").value);
    let sostenimimento = document.getElementById("sostenimiento").value;
    let promedio = parseInt(document.getElementById("promedio").value);

    if (articulacion == "si" || articulacion == "Si" || articulacion == "SI") {
        articulacion = false;
    }
    else {
        articulacion = true;
    }

    if (edad < 18) {
        edad = false;
    }
    else {
        edad = true;
    }

    if (sostenimimento == "si" || sostenimimento == "Si" || sostenimimento == "SI") {
        sostenimimento = false
    }
    else {
        sostenimimento = true
    }

    if (promedio < 3) {
        promedio = false
    }
    else {
        promedio = true
    }

    if (articulacion == true && edad == true && sostenimimento == true && promedio == true) {
        alert("Estimado " + nombre + " usted puede participar en el apoyo de sostenimiento");
    }
    else {
        alert("Estimado " + nombre + " usted no puede participar en el apoyo de sostenimiento")
    }
}

//Ejercicio 6-Exposición edad
function edad() {
    let edadIngresada = parseInt(document.getElementById("edadIngresada").value);
    if (edadIngresada < 18) {
        alert("Usted es menor de edad");
    }
    else if (edadIngresada >= 18 && edadIngresada <= 20) {
        alert("Usted es un joven");
    }
    else if (edadIngresada > 20 && edadIngresada <= 55) {
        alert("Usted es un adulto");
    }
    else {
        alert("Usted es un adulto mayor");
    }
}

//Ejercicio 7-Parejas numeros
function calcularPareja() {
    let primerNumero = parseInt(document.getElementById("primerNumero").value);
    let segundoNumero = parseInt(document.getElementById("segundoNumero").value);
    let tercerNumero = parseInt(document.getElementById("tercerNumero").value);

    if (primerNumero + segundoNumero == tercerNumero || segundoNumero + tercerNumero == primerNumero || primerNumero + tercerNumero == segundoNumero) {
        alert("Son iguales");
    }
    else {
        alert("Son distintos");
    }
}

//Ejercicio 8 Divisas
function calcularDivisas() {
    let pesosIngresados = parseFloat(document.getElementById("pesosIngresados").value);
    let mesIngresado = document.getElementById("mesIngresado").value;
    let mesFinal = document.getElementById("mesFinal").value;
    let equivalenteDolares = 0;
    const DOLAR = 3800;

    mesIngresado = Number(mesIngresado);
    mesFinal = Number(mesFinal);


    if (pesosIngresados <= 0) {
        alert("Ingrese una cantidad en pesos válida");
    }
    else if (mesIngresado > mesFinal) {
        alert("el mes inicial no puede ser superior al mes final");
    }
    else {
        equivalenteDolares = pesosIngresados / DOLAR;
        valorTotal = equivalenteDolares;
        if (mesIngresado > 0 && mesIngresado < 4) {
            switch (mesFinal) {
                case (mesFinal > 0 && mesFinal < 4):
                    valorTotal = equivalenteDolares;
                    break;
                case (mesFinal > 3 && mesFinal < 7):
                    valorTotal = obtenerFluctuacion(valorTotal, -0.6);
                    break;
                case (mesFinal > 7 && mesFinal < 10):
                    valorTotal = obtenerFluctuacion(valorTotal, -0.6);
                    break;
                default:
                    valorTotal = obtenerFluctuacion(valorTotal, 0.03);
                    break;
            }
        }
        else if (mesIngresado > 3 && mesIngresado < 7) {
            switch (mesFinal) {
                case (mesFinal > 3 && mesFinal < 7):
                    valorTotal = obtenerFluctuacion(valorTotal, -0.6);
                    break;
                case (mesFinal > 7 && mesFinal < 10):
                    valorTotal = obtenerFluctuacion(valorTotal, -0.6);
                    break;
                default:
                    valorTotal = obtenerFluctuacion(valorTotal, 0.03);
                    break;
            }
        }
        else if (mesIngresado > 6 && mesIngresado < 10) {
            switch (mesFinal) {
                case (mesFinal > 7 && mesFinal < 10):
                    valorTotal = equivalenteDolares;
                    break;
                default:
                    valorTotal = obtenerFluctuacion(valorTotal, 0.09);
                    break;
            }
        }
        else {
            valorTotal = obtenerFluctuacion(valorTotal, 0.09);
        }
    }
    alert(`El valor acumulado en el mes seleccionado en dólares es $${Math.round(valorTotal * 100) / 100}`);
}

function obtenerFluctuacion(dolares, tasa) {
    let total = dolares + tasa;
    return total;
}
//Ejercicio 9 caracter
function caracter() {
    let caracterIngresado = document.getElementById("caracter").value;
    if (!isNaN(caracterIngresado)) {
        alert("Ingrese una letra de la 'a' a la 'z'");
    }
    else {
        caracterIngresado = caracterIngresado.toLowerCase();
        if (caracterIngresado == "i" || caracterIngresado == "j" || caracterIngresado == "k" || caracterIngresado == "l" || caracterIngresado == "m") {
            alert("El caracter ingresado esta comprendido entre la letra i y m");
        }
        else {
            alert("El caracter ingresado no esta comprendido entre la letra i y m");
        }
    }
}
//Ejercicio 10 coordenadas
function coordenadas() {
    let ejeX = parseFloat(document.getElementById("x").value);
    let ejeY = parseFloat(document.getElementById("y").value);

    if (ejeX >= 0 && ejeY >= 0) {
        alert("La coordenada se encuentre en el primer cuadrante");
    }
    else if (ejeX < 0 && ejeY >= 0) {
        alert("La coordenada se encuentra en el segundo cuadrante");
    }
    else if (ejeX <= 0 && ejeY <= 0) {
        alert("La coordenada se encuentra en el tercer cuadrante");
    }
    else {
        alert("La coordenada se encuentra en el cuarto cuadrante");
    }
}
//Ejercicio 11 horas
function calcularTiempo() {
    let inicial = document.getElementById("hora_inicial").value;
    let final = document.getElementById("hora_final").value;
    inicial = inicial.replace(":", "");
    final = final.replace(":", "");

    let h1 = Number(inicial.split("")[0] + inicial.split("")[1]);
    let m1 = Number(inicial.split("")[2] + inicial.split("")[3]);

    let h2 = Number(final.split("")[0] + final.split("")[1]);
    let m2 = Number(final.split("")[2] + final.split("")[3]);

    if (h1 < h2) {
        alert("La hora final debe ser mayor a la inicial");
        return;
    }
    else if (topeHora(h1)) {
        alert("La hora inicial debe ocupar un rango de 0 a 23");
        return;
    }
    else if (topeMinutos(m1)) {
        alert("Los minutos de la hora inicial deben estar en un rango de 0 a 59");
        return;
    }
    else if (topeHora(h2)) {
        alert("La hora final debe ocupar un rango de 0 a 23");
        return;
    }
    else if (topeMinutos(m2)) {
        alert("Los minutos de la hora final deben estar en un rango de 0 a 59");
        return;
    }
    else {
        let hf = h2 - h1;
        let mf = m2 - m1;
        alert(`El tiempo entre la hora inicial y la hora final son: ${hf} horas y ${mf} minutos`);
    }
}
//Ejercicio 11-Funcion para validar el tope de horas
function topeHora(hora) {
    return hora > 23 || hora < 0
}
//Ejercicio 11-Funcion para validar el tope de minutos
function topeMinutos(minutos) {
    return minutos > 59 || minutos < 0
}

//Ejercicio 12 Exposició bucles-for
function evaluar() {
    let ejercicio = document.getElementById("ejercicio").value;
    let numeroIngresado = 0;
    switch (ejercicio) {
        case '01':
            let tope = 0
            let centinela = 0
            let variableUno = 0
            let variableDos = 1

            let topeIngresado = parseInt(prompt("Ingrese un número"));

            while (tope !== topeIngresado) {

                centinela = variableUno + variableDos;
                variableDos = variableUno;
                variableUno = centinela
                document.getElementById("bucle").innerHTML += ` ${variableDos}`;
                tope++
            }
            break;

        case '02':
            do {
                numeroIngresado = parseInt(prompt("Ingrese un número que no esté entre el 1 y el 100"));
            } while (numeroIngresado >= 1 && numeroIngresado <= 100);

    }
}
//Ejercicio 13 conversion
function conversion() {
    let conversionEjercicio = document.getElementById("conversion_ejercicio").value;
    let valorInicial = parseFloat(prompt("Ingrese el valor a convertir"));
    switch (conversionEjercicio) {
        //Pulgadas a centímetros
        case '01':
            let centimetrosTotales = valorInicial * 2.54;
            centimetrosTotales = centimetrosTotales.toFixed(2);
            alert(`${valorInicial} Pulgadas equivale a ${centimetrosTotales} Centímetros`);
            break;
        //Centimetros a pulgadas
        case '02':
            let pulgadasTotales = valorInicial / 2.54;
            pulgadasTotales = pulgadasTotales.toFixed(2);
            alert(`${valorInicial} Centimetros equivale a ${pulgadasTotales} Pulgadas`);
            break;
        //Kilometros a metros
        case '03':
            let metrosTotales = valorInicial * 1000;
            metrosTotales = metrosTotales.toFixed(2);
            alert(`${valorInicial} Kilometros equivale a ${metrosTotales} Metros`);
            break;
        //Milimetros a metros
        case '04':
            let mmetrosTotales = valorInicial / 1000;
            mmetrosTotales = mmetrosTotales.toFixed(2);
            alert(`${valorInicial} Milimetros equivale a ${mmetrosTotales} Metros`);
            break;
    }
}
//Ejercicio 14 valor x
function calcularY() {
    let valorX = parseFloat(document.getElementById("valor_X").value);
    let valorY = 0;
    if (valorX < -5) {
        valorY = -(valorX);
        alert(`El valor de Y es ${valorY}`);
    }
    else if (valorX >= -5 && valorX <= 2) {
        valorY = (Math.pow(valorX, 2)) + 3;
        alert(`El valor de Y es ${valorY}`);
    }
    else if (valorX >= 3 && valorX <= 4) {
        valorY = valorX;
        alert(`El valor de Y es ${valorY}`);
    }
    else {
        valorY = 10;
        alert(`El valor de Y es ${valorY}`);
    }
}
//Ejercicio 15 Categoria vendedor
function ventas() {
    let categoriaIngresada = document.getElementById("categorias").value;
    let ingresos = document.getElementById("ingresos").value;
    let pago = 0
    let basico = 0
    if (ingresos < 0) {
        alert("Ingrese un valor válido");
    }
    switch (categoriaIngresada) {
        case '0':
            alert("Seleccione por favor una categoría");
            break;
        case '1':
            basico = 100000
            pago = basico + (ingresos * 0.03);
            alert(`El pago a recibir es $${pago}`);
            break;
        case '2':
            basico = 200000
            pago = basico + (ingresos * 0.02);
            alert(`El pago a recibir es $${pago}`);
            break;
        case '3':
            basico = 300000
            pago = basico + (ingresos * 0.01);
            alert(`El pago a recibir es $${pago}`);
            break;
        case '4':
            basico = 1000000
            pago = basico + (ingresos * 0.00);
            alert(`El pago a recibir es $${pago}`);
            break;
        case '5':
            if (ingresos <= 1000000) {
                basico = 0
                pago = basico + (ingresos * 0.03);
                alert(`El pago a recibir es $${pago}`);
            }
            else if (ingresos > 1000000 && ingresos <= 2000000) {
                basico = 100000
                pago = basico + (ingresos * 0.05);
                alert(`El pago a recibir es $${pago}`);
            }
            else {
                basico = 200000
                pago = basico + (ingresos * 0.10);
                alert(`El pago a recibir es $${pago}`);
            }
            break;
    }
}
//Ejercicio 16 Arbol
function hacerArbol() {
    let result = parseInt(document.getElementById("result").value);
    let heigth = parseInt(document.getElementById("tamañoNumero").value);
    let tree = "";
    let dot = '*';

    if (heigth < 0) {
        alert("Ingrese una altura válida");
    }

    for (let i = 0; i < heigth; i++) {
        let space = '_';
        let gap = space.repeat(heigth - i);
        let line = gap + dot + gap;
        tree += line + "<br>";
        dot += "**";
    }
    document.getElementById("result").innerHTML = tree;
}
//PARCIAL OJO
function ejercicioParcial() {
    let categoriaIngresada = document.getElementById("categoria").value;
    switch (categoriaIngresada) {
        case '0':
            alert("Seleccione por favor una categoría");
            break;
        case '1':
            let numeroIngresado = 0;
            let longitud = 0;
            do {
                numeroIngresado = (prompt("Ingrese un número de 5 cifras"));
                console.log(numeroIngresado);
                longitud = numeroIngresado.length;
                console.log(longitud);
            } while (longitud != 5);

            console.log(numeroIngresado);
            let n1 = parseInt(numeroIngresado.split("")[0]);
            let n2 = parseInt(numeroIngresado.split("")[1]);
            let n3 = parseInt(numeroIngresado.split("")[2]);
            let n4 = parseInt(numeroIngresado.split("")[3]);
            let n5 = parseInt(numeroIngresado.split("")[4]);
            /*while (isNaN(n1)) {
                numeroIngresado = parseInt(prompt("Evite ingresar otro tipo de caracteres, por favor ingrese por favor un número con 5 dígitos"));
            }
            while (isNaN(n2)) {
                numeroIngresado = parseInt(prompt("Evite ingresar otro tipo de caracteres, por favor ingrese por favor un número con 5 dígitos"));
            }
            while (isNaN(n3)) {
                numeroIngresado = parseInt(prompt("Evite ingresar otro tipo de caracteres, por favor ingrese por favor un número con 5 dígitos"));
            }
            while (isNaN(n4)) {
                numeroIngresado = parseInt(prompt("Evite ingresar otro tipo de caracteres, por favor ingrese por favor un número con 5 dígitos"));
            }
            while (isNaN(n5)) {
                numeroIngresado = parseInt(prompt("Evite ingresar otro tipo de caracteres, por favor ingrese por favor un número con 5 dígitos"));
            }*/
            alert(`${n5}${n4}${n3}${n2}${n1} y ${n1},${n2},${n3},${n4},${n5}`);
            break;
        case '2':
            let peso1, peso2, peso3, peso4, peso5;
            let centinela;
            do {
                peso1 = parseFloat(prompt("Ingrese el peso del primer estudiante"));
            } while (peso1 <= 0);
            do {
                peso2 = parseFloat(prompt("Ingrese el peso del segundo estudiante"));
            } while (peso2 <= 0);
            do {
                peso3 = parseFloat(prompt("Ingrese el peso del tecer estudiante"));
            } while (peso3 <= 0);
            do {
                peso4 = parseFloat(prompt("Ingrese el peso del cuarto estudiante"));
            } while (peso4 <= 0);
            do {
                peso5 = parseFloat(prompt("Ingrese el peso del quinto estudiante"));
            } while (peso5 <= 0);

            if (peso1 == peso2) {
                centinela = peso1;
                if (centinela == peso3) {
                    centinela = peso3;
                    if (centinela == peso4) {
                        centinela = peso4;
                        if (centinela = peso5) {
                            centinela = peso5;
                        }
                    }
                }
            }

            let promedio = ((peso1 + peso2 + peso3 + peso4 + peso5));
            promedio = promedio.toFixed(2);
            alert(`El promedio del peso de los estudiantes es:  ${promedio} Kg y la moda es ${centinela}`);
            break;
        case '3':
            const numero = 5;
            let centinelas = 0;

            while (centinelas <= 9) {
                let resultado = numero * centinelas;
                console.log(`${numero}x${centinelas}=${resultado}`);
                centinelas++;
            }
            break;
        case '4':
            let tipoVehiculo;
            let valorPagar;
            let precio;

            do {
                tipoVehiculo = (prompt("Ingrese el tipo de vehículo: 1 moto o 2 carro"));

            }
            while (tipoVehiculo != "1" && tipoVehiculo != "2");

            do {
                fraccion = parseFloat(prompt("Ingrese la hora o fracción a pagar"));
            }
            while (isNaN(fraccion));

            do {
                tipoJornada = (prompt("Tipo jornada: 1 diurna, 2 nocturna"));
            }
            while (tipoJornada != "1" && tipoJornada != "2");

            switch (tipoVehiculo) {
                case "1":
                    precio = 1100
                    if (tipoJornada == "1") {
                        valorPagar = (fraccion * precio);
                        alert(`El valor a pagar es ${valorPagar}`);
                    }
                    else {
                        valorPagar = (fraccion * precio) + ((fraccion * precio) * 0.05);
                        alert(`El valor a pagar es ${valorPagar}`);
                    }
                    break;
                case "2":
                    precio = 2500
                    if (tipoJornada == "1") {
                        valorPagar = (fraccion * precio);
                        alert(`El valor a pagar es ${valorPagar}`);
                    }
                    else {
                        valorPagar = (fraccion * precio) + ((fraccion * precio) * 0.5);
                        alert(`El valor a pagar es ${valorPagar}`);
                    }
                    break;
            }
    }
}
