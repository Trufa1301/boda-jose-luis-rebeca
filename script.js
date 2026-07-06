const fechaBoda = new Date(2026, 9, 24, 11, 30, 0);

function actualizarCuentaAtras() {

    const ahora = new Date();
    const diferencia = fechaBoda.getTime() - ahora.getTime();

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarCuentaAtras();
setInterval(actualizarCuentaAtras, 1000);
