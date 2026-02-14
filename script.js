const container = document.getElementById("img");
const slides = document.querySelectorAll("#img a");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let idx = 0;

function mostrarSlide() {
    container.style.transform = `translateX(-${idx * 100}%)`;
}

function proximo() {
    idx++;
    if (idx >= slides.length) {
        idx = 0;
    }
    mostrarSlide();
}

function anterior() {
    idx--;
    if (idx < 0) {
        idx = slides.length - 1;
    }
    mostrarSlide();
}

next.addEventListener("click", proximo);
prev.addEventListener("click", anterior);

setInterval(proximo, 3000);
