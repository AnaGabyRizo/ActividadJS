console.log("*************** EJERCICIO 1 *************");
//Parte 1
let nombres = ["Sofía","David","Juan"];

let divAlert = document.getElementById("divAlert");

//parte 2
nombres.push("Sara","Augustin");
nombres.shift();

//Parte 1
divAlert.innerHTML += "<ol><li>" + nombres[0] + "</li>"
+"<li>" + nombres[1] + "</li>"
+"<li>" + nombres[2] + "</li>"
+"<li>" + nombres[3] + "</li></ol>";

//Parte 3
nombres.splice(1,0,"Renata");
nombres.push("Elena");
console.log(nombres);

//Parte 2
for (index = 0; index<nombres.length; index ++){
    console.log(nombres[index]);
}

console.log("*************** EJERCICIO 2 *************");


   let asteriscos = [];
   for (let index = 0; index <= 5; index++) {
        asteriscos.push("*");
        console. log (asteriscos.join(" "));
    }

console.log("*************** EJERCICIO 3 *************");

console.log("Parte 1");
for (let xValue = 5; xValue > 0; xValue-=0.5) {
    console.log(xValue);
}

console.log("Parte 2");
for (let index = 1; index < 100; index+=2) {
    console.log(index); 
}

console.log("Parte 3");

let print = [];
let valor= 1;
let n = 10;

while (n>=1){
    print.push("["+valor+"]");
    n--;
    valor++;
}
console.log(print.join(" "));

console.log("Parte 4");

let data = 4; 
let number = 1;
let resultado = 0;


while (data>=1) {
    resultado += number;
    number++;
    data--;
}
console.log(resultado);