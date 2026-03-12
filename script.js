document.addEventListener("DOMContentLoaded", () => {
  const elementoSaludo = document.getElementById("saludo");

  let nombreUsuario = localStorage.getItem("nombreUsuario");

  if (!nombreUsuario) {
    let nombreValido = false;
    const regex = /\d/;

    do {
      nombreUsuario = prompt("Introduce tu nombre (sin números):");

      if (nombreUsuario && !regex.test(nombreUsuario)) {
        nombreValido = true;
      } else {
        alert("Nombre inválido. No puede contener números.");
      }
    } while (!nombreValido);

    localStorage.setItem("nombreUsuario", nombreUsuario);
  }

  if (elementoSaludo) {
    elementoSaludo.textContent = `¡Hola, ${nombreUsuario}!`;
  }
});
