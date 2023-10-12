function createHeaderComponent() {
  const headerContainer = document.getElementById("headerContainer");

  const header = document.createElement("header");
  header.id = "inicio";

  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg bg-body-tertiary";

  const container = document.createElement("div");
  container.className = "container-fluid";

  const figure = document.createElement("figure");

  const logoLink = document.createElement("a");
  logoLink.href = "#";

  const logoImg = document.createElement("img");
  logoImg.className = "nav-logo";
  logoImg.src = "https://www.peru.travel/img/iconos/logo_encudre_rojo.svg";
  logoImg.alt = "logo";

  figure.appendChild(logoLink);
  logoLink.appendChild(logoImg);

  const toggleButton = document.createElement("button");
  toggleButton.className = "navbar-toggler";
  toggleButton.type = "button";
  toggleButton.setAttribute("data-bs-toggle", "collapse");
  toggleButton.setAttribute("data-bs-target", "#navbarSupportedContent");
  toggleButton.setAttribute("aria-controls", "navbarSupportedContent");
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-label", "Toggle navigation");

  const togglerIcon = document.createElement("span");
  togglerIcon.className = "navbar-toggler-icon";

  toggleButton.appendChild(togglerIcon);

  const collapseDiv = document.createElement("div");
  collapseDiv.className = "collapse navbar-collapse";
  collapseDiv.id = "navbarSupportedContent";

  // Agrega los elementos al DOM
  container.appendChild(figure);
  container.appendChild(toggleButton);
  container.appendChild(collapseDiv);
  nav.appendChild(container);
  header.appendChild(nav);
  headerContainer.appendChild(header);

  // Agregar la lista de navegación
  const ul = document.createElement("ul");
  ul.className = "navbar-nav me-auto mb-2 mb-lg-0";

  const navItems = [
    { text: "Inicio", href: "../index.html" },
    {
      text: "Nosotros",
      href: "https://www.peru.travel/en/about-peru",
      target: "_blank",
    },
    {
      text: "Servicios",
      href: "https://www.peru.travel/en/search-travel-services",
      target: "_blank",
    },
    {
      text: "Contactanos",
      href: "https://www.peru.travel/en/contact",
      target: "_blank",
    },
  ];

  navItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "nav-item";
    const a = document.createElement("a");
    a.className = "nav-link";
    a.textContent = item.text;
    a.href = item.href;
    if (item.target) {
      a.target = item.target;
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  const form = document.createElement("form");
  form.className = "d-flex";
  form.role = "search";

  const input = document.createElement("input");
  input.className = "form-control me-2";
  input.type = "search";
  input.placeholder = "Search";
  input.setAttribute("aria-label", "Search");

  const button = document.createElement("button");
  button.className = "btn btn-outline-success";
  button.type = "submit";
  button.textContent = "Search";

  form.appendChild(input);
  form.appendChild(button);

  // Agregar elementos al DOM
  collapseDiv.appendChild(ul);
  collapseDiv.appendChild(form);

  container.appendChild(figure);
  container.appendChild(toggleButton);
  container.appendChild(collapseDiv);
  nav.appendChild(container);
  header.appendChild(nav);
  headerContainer.appendChild(header);
}

createHeaderComponent();
