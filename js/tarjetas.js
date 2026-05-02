document.addEventListener('DOMContentLoaded', function () {
    const btnMaria = document.getElementById('btn-maria');

    if (btnMaria) {
        btnMaria.addEventListener('click', function () {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        });
    }

    const btnMatias = document.getElementById('btn-matias');
    if (btnMatias) {
        btnMatias.addEventListener('click', function () {
            const randomColor = '#' + Math.floor(Math.random() * 15366).toString(16);
            const tarjeta = document.querySelector('.tarjeta ');
            if (tarjeta) {
                tarjeta.style.backgroundColor = randomColor;
            }
        });
    }
});
