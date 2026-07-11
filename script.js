
const fechaBoda = new Date(2026, 10, 24, 11, 30, 0);

function actualizarCuentaAtras() {
    const ahora = new Date();
    const diferencia = fechaBoda - ahora;

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

function copiarIBAN() {
    navigator.clipboard.writeText("ES2220803512713040052990");
    alert("¡IBAN copiado! ❤️");
}

function descargarWedShoots() {

    const ua = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(ua)) {
        window.open(
            "https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots",
            "_blank"
        );
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        window.open(
            "https://apps.apple.com/es/app/wedshoots/id549402355",
            "_blank"
        );
    } else {
        window.open(
            "https://www.wedshoots.com/",
            "_blank"
        );
    }
}
