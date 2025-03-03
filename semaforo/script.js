// Seleccionamos el botón y el contenedor del semáforo
const toggleButton = document.getElementById("toggleButton");
const semaforo = document.querySelector(".container");

// Variable para rastrear el estado del semáforo
let semaforoActivo = false;

// Función para alternar el estado del semáforo
toggleButton.addEventListener("click", () => {
    semaforoActivo = !semaforoActivo; // Cambiamos el estado

    if (semaforoActivo) {
        semaforo.classList.add("active"); // Activamos el semáforo
        toggleButton.textContent = "Desactivar Semáforo"; // Cambiamos el texto del botón
    } else {
        semaforo.classList.remove("active"); // Desactivamos el semáforo
        toggleButton.textContent = "Activar Semáforo"; // Cambiamos el texto del botón
    }
});