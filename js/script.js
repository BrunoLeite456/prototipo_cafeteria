// Café da Claudinha — script.js
// Funções compartilhadas entre as páginas do site.

document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();
  setupContactForm();
  setupMenuFilter();
  setupDocNav();
});

// Abre/fecha o menu no celular
function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => links.classList.remove("open"));
  });
}

// Simula o envio do formulário de contato (RF04)
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successBox = document.getElementById("form-success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.querySelector("#nome").value.trim();
    const email = form.querySelector("#email").value.trim();
    const mensagem = form.querySelector("#mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      return;
    }

    // Sem backend: apenas simula o envio, como pedido nos requisitos.
    successBox.classList.add("visible");
    form.reset();

    setTimeout(() => successBox.classList.remove("visible"), 4000);
  });
}

// Filtro de categorias no cardápio (RF02)
function setupMenuFilter() {
  const tabs = document.querySelectorAll(".category-tab");
  const cards = document.querySelectorAll(".product-card");
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.dataset.category;

      cards.forEach((card) => {
        const match = category === "todos" || card.dataset.category === category;
        card.style.display = match ? "" : "none";
      });
    });
  });
}

// Navegação lateral da página de Documentação
function setupDocNav() {
  const buttons = document.querySelectorAll(".doc-nav button");
  const panels = document.querySelectorAll(".doc-panel");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });
}
