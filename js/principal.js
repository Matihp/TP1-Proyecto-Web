document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-contacto');
    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            // ATENCIÓN: Intencionalmente no se incluye e.preventDefault()
            console.log('Formulario enviado');
            alert('Enviando formulario...');
        });
    }
});
