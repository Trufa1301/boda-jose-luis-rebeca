const boda = new Date("October 24, 2026 11:30:00").getTime();

function actualizarCuentaAtras(){

    const ahora = new Date().getTime();
    const diferencia = boda - ahora;

    const dias = Math.floor(diferencia / (1000*60*60*24));
    const horas = Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));
    const minutos = Math.floor((diferencia % (1000*60*60))/(1000*60));
    const segundos = Math.floor((diferencia % (1000*60))/1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarCuentaAtras();
setInterval(actualizarCuentaAtras,1000);
