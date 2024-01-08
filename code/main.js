// Inicio

let respuestaCorrecta = "Cristian Gianoboli"; //Nombre de tutor que se encarga de la correción.
let intentos = 3; // Número de intentos permitidos.

while (intentos > 0) {
  let respuestaUsuario = prompt("¿Cuál es su nombre?");

  // Convertimos ambas respuestas a minúsculas antes de comparar.
  if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
    alert("¡Bienvenido! Ya puedes elegir que productos comprar.");
    // Colocamos el codigo que se ejecuta si la respuesta es correcta.

    break; // Sale del bucle ya que la respuesta es correcta.
  } else {
    alert("Respuesta incorrecta. Te quedan " + (intentos - 1) + " intentos.");
    intentos--;

    if (intentos === 0) {
      alert("Se han agotados los intentos. No tienes acceso.");
    }
  }
}
