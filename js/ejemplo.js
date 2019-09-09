var boton=document.getElementById("button1");
boton.addEventListener("click", saludar);

function saludar(evento) {
  var nombre=document.getElementById("nombre").value;
  alert("Helloooo " + nombre);
}
