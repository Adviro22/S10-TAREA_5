const contenido = document.getElementById("contenido");

contenido.innerHTML = "Hola Programadores"

alert("Hola");

let nombre = "Josue Ortiz";
let edad = 12

let array = [ 23, 45, 2, 42]

contenido.innerHTML = "<h2>" + nombre + "</h2>"
contenido.innerHTML += "<h3>" + edad + "</h3>"


if(edad > 18){
    alert("Puedes entrar a la disco")
}else{
    alert("No puedes entrar")
}

for(let i = 6; i <10; i++){
    contenido.innerHTML += "<h3>  ${i} </h3>";
}

function addContent(newContent){
    contenido.innerHTML += newContent
}

addContent("Hola Programador");
const COLOR_ROJO = "#FF0000";

let resultado = "Nombre: " + nombre;

alert(resultado);

nombre = "Jennifer Lopez"

alert(nombre);
