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
