
const inputNombre = document.querySelector('#input-nombre');
const btnSaludar = document.querySelector('#btn-saludar');
const btnLimpiar = document.querySelector('#btn-limpiar');
const mensajeResultado = document.querySelector('#mensaje-resultado');

function generarSaludo(nombre) {
    if (nombre.trim() === "") {
        return "⚠️ Por favor, ingresa un nombre válido.";
    }
    return `¡Bienvenido/a a la UETS, ${nombre}! Éxitos en tu periodo académico.`;
}

btnSaludar.addEventListener('click', function () {
    const textoNombre = inputNombre.value;
    const resultado = generarSaludo(textoNombre);

    mensajeResultado.textContent = resultado; 

    if (textoNombre.trim() === "") {
        mensajeResultado.style.color = "#DC2626";
    } else {
        mensajeResultado.style.color = "#16A34A";
    }
});

btnLimpiar.addEventListener('click', function () {
    inputNombre.value = "";
    mensajeResultado.textContent = "Esperando interacción...";
    mensajeResultado.style.color = "#000000";
});
