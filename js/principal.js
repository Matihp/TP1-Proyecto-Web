document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', gestionarEnvioFormulario);
    }
});

function gestionarEnvioFormulario(e) {
    e.preventDefault();
    const mensajeEnv = document.getElementById('mensaje-enviado');
    mensajeEnv.textContent = '¡Se envio correctamente el mensaje! Nos comunicaremos pronto.';
    e.target.reset();
}

