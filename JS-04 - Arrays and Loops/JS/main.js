//Parte 1
let nombres = ["Sofía","David","Juan"];

let divAlert = document.getElementById("divAlert");

//parte 2
nombres.push("Sara","Augustin");
//nombres.shift();

//Parte 1
divAlert.innerHTML += "<ol><li>" + nombres[0] + "</li>"
+"<li>" + nombres[1] + "</li>"
+"<li>" + nombres[2] + "</li>"
+"<li>" + nombres[3] + "</li>"
+"<li>" + nombres[4] + "</li>"
+"<li>" + nombres[5] + "</li></ol>";

//Parte 3

/*let nombres = ["Sofía", "David", "Juan"];
nombres.splice(0,1,"Renata",;
console.log(nombres);