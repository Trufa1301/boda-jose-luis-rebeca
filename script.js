document.querySelector(".boton").addEventListener("click", function(e){
    e.preventDefault();

    document.querySelector("#formulario").scrollIntoView({
        behavior:"smooth"
    });
});
