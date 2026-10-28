// Controller assembly animation: parts fly in (CSS), then the controller "powers on".
const stage = document.querySelector(".controller-stage");
const ASSEMBLY_MS = 2800;
let timer;

function assemble() {
  clearTimeout(timer);
  stage.classList.remove("assembling", "powered");
  void stage.offsetWidth; // restart CSS animations
  stage.classList.add("assembling");
  timer = setTimeout(() => stage.classList.add("powered"), ASSEMBLY_MS);
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  stage.classList.add("powered");
} else {
  assemble();
  stage.addEventListener("click", assemble);
}

// Booking form has no backend yet; confirm locally.
const form = document.querySelector("#booking-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements.name.value.trim().split(" ")[0] || "there";
  form.querySelector(".form-note").textContent =
    `Thanks ${name}! We'll be in touch within one business day.`;
  form.reset();
});

document.querySelector("#year").textContent = new Date().getFullYear();
