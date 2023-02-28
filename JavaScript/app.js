console.log("si funciono la insercion del js");

function abrirModal() {
  var modal = document.getElementById("myModal");
  modal.classList.add("zoomIn");
  modal.style.display = "block";
}

function cerrarModal() {
  var modal = document.getElementById("myModal");
  modal.classList.remove("zoomIn");
  modal.classList.add("zoomOut");
  setTimeout(function() { modal.style.display = "none"; }, 600); // Esperar a que la animación termine antes de ocultar el modal
}

// Cerrar el modal al hacer clic en cualquier parte de la pantalla
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    cerrarModal();
  }
}

// Cerrar el modal al presionar la tecla Escape
document.onkeydown = function(evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    cerrarModal();
  }
};

// deshabilitar el clic derecho y arrojar un mensaje

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
  alert("Por seguridad, el clic derecho está deshabilitado 😥🥴😬");
}, false);

// Evitar que el texto del index pueda ser seleccionado

document.addEventListener('DOMContentLoaded', function() {
  disableSelection(document.body);
});

function disableSelection(element) {
  element.style.userSelect = 'none';
  element.style.webkitUserSelect = 'none';
  element.style.MozUserSelect = 'none';
  element.style.msUserSelect = 'none';
}


/*  Probé distintas maneras de evitar que se puedan tomar screenshot de la web pero niguna dio resultado
imagino que la funcion impt pt esta en un nivel superior al que funciona el navegador y por eso no se puede
en el caso de desenfocar la web al presionar impt pt, funciona pero tiene un delay que hace que sea posible
capturar la web. En fin, un vago intento de darle "seguridad" a la web. 
Deberia borrar este comentario infinito y ese codigo innecesario? Si, pero me da pena, asi que tomemoslo como una 
especie de Easter Egg. Saludos

//Desenfocar toda la página web si se intenta tomar un screenshot

document.addEventListener('keydown', function() {
  document.body.style.filter = 'blur(5px)';
});
document.addEventListener('keyup', function() {
  document.body.style.filter = 'none';
});


// Desactivar la tecla "Impr Pant"
document.addEventListener('keydown', function(event) {
  if (event.key === 'PrintScreen') {
    event.preventDefault();
  }
});

*/