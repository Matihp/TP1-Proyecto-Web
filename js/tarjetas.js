document.addEventListener('DOMContentLoaded', function () {
    const btnMaria = document.getElementById('btn-maria');

    if (btnMaria) {
        btnMaria.addEventListener('click', function () {
            const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        });
    }
});
