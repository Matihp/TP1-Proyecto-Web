document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            // AHORA: Probando incorporar e.preventDefault() en el formulario
            e.preventDefault();
            console.log('Formulario enviado');
            alert('Enviando formulario...');
        });
    }
});

