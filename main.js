const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

navToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("nav-menu-visible");

  if (navMenu.classList.contains("nav-menu-visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

body.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu-visible");
});

function extraerDato() {
  var horo = document.getElementById("signo").value;

  if (horo == "Aries") {
    Swal.fire(
      "Haras grandes cosas, simplemente porque te sentirás bastante en paz contigo misma y con tu entorno."
    );
  } else if (horo == "Tauro") {
    Swal.fire(
      "Aprovecha el dia saliendo con amigos y disfrutando a tope de este día de ocio"
    );
  } else if (horo == "Géminis") {
    Swal.fire(
      "Sueles tener a diario demasiadas dudas a la hora de decidir, Géminis. Piensa hoy que no es positivo que estés pensando todo el tiempo en si hacer o no una cosa por temor a equivocarte."
    );
  } else if (horo == "Cáncer") {
    Swal.fire(
      "No puedes pasar ni un día más infravalorándote, Cáncer, hoy mismo has de ponerle solución."
    );
  } else if (horo == "Leo") {
    Swal.fire(
      "La vida te está mostrando su cara más amable, Leo, y te ofrece a diario muchas oportunidades, algo fundamental para lograr avanzar."
    );
  } else if (horo == "Virgo") {
    Swal.fire(
      "Estás hoy en un momento muy bueno para estimular tu mente, Virgo. Ahora tienes facilidad para adquirir nuevos conocimientos y tu concentración aumenta a diario."
    );
  } else if (horo == "Libra") {
    Swal.fire(
      "Procura no ser tan despistada, Libra, y pon más atención a diario a lo que tienes entre manos, en especial en el trabajo."
    );
  } else if (horo == "Escorpio") {
    Swal.fire(
      "Estás pensando hoy, Escorpio, que a diario la vida te pone a ti las cosas más difíciles que a los demás. Quizá porque en estos días corren ciertos rumores en tu trabajo sobre una posible reducción de personal. No te creas ni una palabra"
    );
  } else if (horo == "Sagitario") {
    Swal.fire(
      "Estás pasando por unos momentos de tensión y no dejas de pensar a diario en algo que te atormenta, Sagitario. No aportas nada positivo a tu vida con tanto nerviosismo. Podrías pillar un estrés monumental y no te ayudaría en nada."
    );
  } else if (horo == "Capricornio") {
    Swal.fire(
      "Si hoy, Capricornio, estás viviendo una situación complicada que puede ser muy negativa para tu futuro, recuerda que en el pasado algunas personas te orientaron muy bien y te dieron buenos consejos a diario."
    );
  } else if (horo == "Acuario") {
    Swal.fire(
      "Es momento hoy de empezar a tomarte en serio el tema de la actividad física, Acuario. Recuerda que con sólo apuntarte al gimnasio no resuelves el asunt"
    );
  } else if (horo == "Piscis") {
    Swal.fire(
      "Tienes que aprender hoy a liberar tus emociones, Piscis, porque si las guardas dentro a diario acabarán perjudicando a tu organismo. "
    );
  } else {
    Swal.fire("eso no es un signo");
  }
}

function generarNumero() {
  let inicio = 1;
  let fin = 999;

  let aleatorio = inicio + Math.floor(Math.random() * fin);

  Swal.fire("tu numero de la suerte es: " + aleatorio);
}

function revelarCartas() {
  document.getElementById("cartasNuevas").style.display = "block";
  document.getElementById("cartasPrincipales").style.display = "none";
}
function atras() {
  document.getElementById("cartasNuevas").style.display = "none";
  document.getElementById("cartasPrincipales").style.display = "block";
}
