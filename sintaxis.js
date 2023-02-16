console.log("Hola Mundo");

/**Elemento boton queremos que cuando se haga clic en el cuadradito cuyo id es boton, haga algo*/

document.getElementById('boton').onclick = function(){
document.getElementById("demo").innerHTML = "daisy.palmer@example.com";
}

document.getElementById('boton3').onclick = function(){
document.getElementById("demo3").innerHTML = "8484 Samaritan Dr";
}


document.getElementById('boton2').onclick = function(){
document.getElementById("demo2").innerHTML = "(218) 975-6766";
}

document.getElementById('boton4').onclick = function(){
document.getElementById("demo4").innerHTML = "30 años";
}

document.getElementById('boton5').onclick = function(){
document.getElementById("demo5").innerHTML = "Tareas administrativas: Atención al cliente, facturación, cobranzas y trámites bancarios";
}

document.getElementById('boton6').onclick = function(){
document.getElementById("demo6").innerHTML = "Analista de impuestos: Ingresos brutos-ARBA etc";
 }

document.getElementById('boton7').onclick = function(){
document.getElementById("demo7").innerHTML = "Jefa de Impuestos";
}

document.getElementById('boton8').onclick = function(){
document.getElementById("demo8").innerHTML = "Bachiller Normal 8 Presidente Julio A.Roca";
}

document.getElementById('boton9').onclick = function(){
document.getElementById("demo9").innerHTML = "Facultad de Ciencias Económicas - Universidad de Buenos Aires";
}

document.getElementById('boton10').onclick = function(){
document.getElementById("demo10").innerHTML = "Viajar, ir al cine, observación de aves";
}

/** esta ultima sentencia indica que se toma todo el documento (document) y se busca el id demo, innerhtml es una funcion que cambia el texto*/