var infoVisible = false; // Variable de estado para controlar la visibilidad de la información

function mostrarDirecciones() {
  var listaDirecciones = document.getElementById("lista-direcciones");
  var contenidoTexto = document.getElementById("contenido-texto");

  if (infoVisible) {
    listaDirecciones.innerHTML = "";
    contenidoTexto.innerHTML = "";
    infoVisible = false;
  } else {
    var AboutPerus = [
      "Economía",
      "Historia",
      "Turismo",
      "Los productos estrella del Perú",
    ];
    listaDirecciones.innerHTML = "";

    var ul = document.createElement("ul");

    for (var i = 0; i < AboutPerus.length; i++) {
      var AboutPeru = AboutPerus[i];
      var li = document.createElement("li");
      li.classList.add("list-group-item");
      // Agrega un evento de clic para llamar a la función mostrarTexto() sin redireccionar
      li.innerHTML = `<a href="#" onclick="mostrarTexto(event, '${AboutPeru}')">${AboutPeru}</a>`;
      ul.appendChild(li);
    }

    listaDirecciones.appendChild(ul);

    // Mostrar la primera información por defecto
    mostrarTexto(null, AboutPerus[0]);
    infoVisible = true;
  }
}

function mostrarTexto(event, AboutPeru) {
  if (event) {
    event.preventDefault(); // Evita la redirección solo si se hace clic en un enlace
  }

  var contenidoTexto = document.getElementById("contenido-texto");

  // Aquí puedes establecer el texto correspondiente a cada elemento
  var texto = "";

  if (AboutPeru === "Economía") {
    texto =
      "La costa peruana es reconocida por sus recursos marinos y su sector agroindustrial de exportación, que incluye importantes productos como espárragos, arándanos, uvas de mesa, aguacates, plátanos orgánicos y pimentón. Por su parte, la cuenca del Amazonas posee grandes reservas de petróleo y gas natural, además de abundantes recursos forestales.";
  } else if (AboutPeru === "Historia") {
    texto =
      "Caral fue la culminación del primer proceso cultural del Perú, conocido como Período Inicial, y sus principales características son la construcción de templos escalonados de adobe, plazas circulares y pequeños pueblos que rodean centros administrativos y ceremoniales. De esta época datan importantes sitios arqueológicos como Sechín, en la costa de Áncash, y el Templo de las Manos Cruzadas de Kotosh, en Huánuco.";
  } else if (AboutPeru === "Turismo") {
    texto =
      "Gracias a una larga historia definida por importantes civilizaciones antiguas, Perú alberga más de 5000 sitios arqueológicos. Muchas de ellas siguen envueltas en un velo de misterio, pero aún son capaces de transportar a los visitantes a los períodos en que tales sociedades florecían. Por ejemplo, una visita a Machu Picchu revela la perfección del imperio Inca; A esta ciudad sagrada se puede llegar a bordo de lujosos trenes que recorren imponentes paisajes montañosos salpicados de coloridos pueblos andinos.";
  } else if (AboutPeru === "Los productos estrella del Perú") {
    texto =
      "Desde febrero de 2018, la marca Super Foods Perú viene dejando huella en los eventos y ferias gastronómicas más representativos del mundo. Super Foods Perú muestra las cualidades de funcionalidad y bienestar que ofrecen los recursos naturales del Perú y los múltiples beneficios para la salud de los productos alimenticios del país.";
  }

  contenidoTexto.innerHTML = texto;
}

// eventos gallery

function mostrarImagen(imagen) {
  var contenedorImagen = document.getElementById("imagen-en-pantalla");
  var imagenAmpliada = document.getElementById("imagen-ampliada");

  imagenAmpliada.src = imagen.src;
  contenedorImagen.style.display = "flex";

  contenedorImagen.addEventListener("click", cerrarImagen);
}

function cerrarImagen(event) {
  if (event.target.id === "imagen-en-pantalla") {
    var contenedorImagen = document.getElementById("imagen-en-pantalla");
    contenedorImagen.style.display = "none";
  }
}
