const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".reservation-form");

if (toggle && nav) {
  const closeNav = () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    form.querySelector(".form-note").textContent =
      "Sol·licitud registrada en aquesta maqueta. Connecta el formulari a un servei extern per rebre reserves reals.";
  });
}
