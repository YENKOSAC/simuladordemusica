// primera tarea
// //alert("hola mundo")
// var nombre = prompt("hola dime tu nombre por favor")
// var edadQueTuve = 10
// var edad = "50"
// edadNumero = Number.parseInt(edad)
// console.log(nombre)
// console.log(edadNumero + edadQueTuve)





// segunda tarea 
// let precio= prompt("Escribe un numero")
// // let precioNumerico = Number.parseInt(precio)
// if (precio< 18) {
// alert("Eres menor de edad, cuando seas mayor de edad podemos jugar ")
// }
// else if (precio >= 18) {
// alert("Eres mayor de edad,podemos jugar")
// document.write("<h2>COMO ERES MAYOR DE EDAD AHORA SI PODEMOS HABLAR SOBRE CUANDO JUGAREMOS</h2>");
// }
// else{
// alert("ingresa una edad por favor !!!")
// }




// tercera Tarea
// let numeros= prompt("dame un numero del 1 al 20 para mostrarte sus multiplicaciones")
// let numerosDefinidos =Number.parseInt(numeros)

// if (numerosDefinidos <= 0 || isNaN (numerosDefinidos)){// PROFE EN ESTA PARTE NO SE COMO HACER PARA QUE SI ALGUIEN COLOCA UN STRING DIRECTAMENTE SEA COMO PONER "O", Y NO ME SALGA EN EL CONSOLE.LOG NaN, que deberia ponerle, gracias
//     alert("Te dije del 1 al 20, este no es un caracter valido, Adios")
//     document.write("<h1>ADIOOOOOOOOSSSSSSSS</h1>")
// }
// else if (true){

//     document.write("ESTE ES EL TITULO DE LA TABLA<br>")
//     for (i=1;i<=20;i++){
//         console.log(numerosDefinidos*i)   

//         if (i<=20 && numerosDefinidos<=20){
//         document.write(numerosDefinidos * i,"<br>");

//         }
//     }

// }
// while (numeros>20) {
//     // alert("hola")
//     document.write("<h1>Como colocaste un numero mayor a 20, no te mostraremos nada</h1>")
//     break
// }


// // 4ta tarea 
// 0let calcularEdad = parseInt(prompt("ingresa tu edad")) 
// function cualEsLaEdad (){
//     if (calcularEdad < 18 && calcularEdad >0 ){
//         alert("eres muy joven a ti no te podemos dejar entrar")
//     }
//     else if(calcularEdad >= 18 && calcularEdad <= 100){
//         alert("Eres adulto, me parece bien")
//     }
//     else if(calcularEdad <=0 || isNaN (calcularEdad)) {
//         alert("queeeeeee esssss esttoooooooo tu no existes")
//     }
//     else if(calcularEdad >100 ) {
//         alert ("al parecer eres inmortal, deberias usar crema para las arrugas")
//     }
//     else{
//         alert("No colocaste tu edad verdadera")
//     }
// }

// cualEsLaEdad()

// este sera el boton de prueba que sacamos de internet

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}