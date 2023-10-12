const url = "/datos/datos.json";

const divDestinos = document.querySelector(".destinos");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const destinosHTML = data.map(
      (destino) => `
      <div class="destino">
        <img class="destino-img" src="../../img/destinos/${destino.img}" alt="${destino.nombre}" />
        <div class="destino-descripcion">
        <h2 class="destino-nombre">${destino.nombre}</h2>
        <p class="destino-text">${destino.descripción}</p>
        </div>
      </div>
    `
    );

    // Inserta el contenido en el <div>
    divDestinos.innerHTML = destinosHTML;
  })
  .catch((error) => {
    console.error("Hubo un error al cargar el JSON:", error);
  });
