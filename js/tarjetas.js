document.addEventListener('DOMContentLoaded', function () {
    const btnMaria = document.getElementById('btn-maria');

    if (btnMaria) {
        btnMaria.addEventListener('click', cambiarFondoPagina);
    }

    const btnMatias = document.getElementById('btn-matias');
    if (btnMatias) {
        btnMatias.addEventListener('click', cambiarFondoTarjeta);
    }
});

function generarColorAleatorio() {
    return '#' + Math.floor(Math.random() * 12957385).toString(16);
}

function cambiarFondoPagina() {
    document.body.style.backgroundColor = generarColorAleatorio();
}

function cambiarFondoTarjeta() {
    const tarjeta = document.querySelector('.tarjeta');
    if (tarjeta) {
        tarjeta.style.backgroundColor = generarColorAleatorio();
    }
}
