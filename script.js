document.querySelector(".boton").addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector("#formulario").scrollIntoView({
        behavior:"smooth"
    });
});
const fechaBoda = new Date("2026-10-24T00:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

  if (distancia < 0) {
    document.querySelector(".contador").innerHTML = "<h2>¡Hoy es el gran día! 💍</h2>";
  }
}

setInterval(actualizarContador, 1000);
actualizarContador();
