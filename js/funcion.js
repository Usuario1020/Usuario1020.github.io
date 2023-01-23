//modo claro/oscuro
function modo_oscuro() {
  document.body.style.backgroundColor = "black";
  document.body.style.color="white";
  }
function modo_claro() {
  document.body.style.backgroundColor = "lightgrey";
  document.body.style.color="black";
  }


//Texto en experiencia
function comunicaciones1() {
  document.getElementById("comunicaciones").style.fontSize = "x-large";
}

function comunicaciones2() {
  document.getElementById("comunicaciones").style.fontSize = "100%";
}

function marketing1() {
  document.getElementById("marketing").style.fontSize = "x-large";
}

function marketing2() {
  document.getElementById("marketing").style.fontSize = "100%";
}

function diseño1() {
  document.getElementById("diseño").style.fontSize = "x-large";
}

function diseño2() {
  document.getElementById("diseño").style.fontSize = "100%";
}


//Texto en educacion

function primaria() {
  alert("Completada");
}

function secundaria() {
  alert("Promedio 8");
}

function universidad() {
  alert("Titulo en Administracion de Sistemas");
}

//mouseover y mouseout en Logros

document.getElementById("logro1").addEventListener("mouseover", mouseOver);
document.getElementById("logro1").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("logro1").innerHTML = "01/01/2022";

}

function mouseOut() {
  document.getElementById("logro1").innerHTML = "Logro1";
}

document.getElementById("logro2").addEventListener("mouseover", mouseOver1);
document.getElementById("logro2").addEventListener("mouseout", mouseOut1);

function mouseOver1() {
  document.getElementById("logro2").innerHTML = "01/01/2023";

}

function mouseOut1() {
  document.getElementById("logro2").innerHTML = "logro2";
}

//footer
function cheatsheet(){
	document.getElementById("footer").innerHTML = "Cheatsheet: Modo Claro/Oscuro en menu, MouseUp/MouseDown en Experiencia, alerts en educacion y Mouseover/Mouseout en logros"
}