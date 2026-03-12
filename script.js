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

  //2.1 -------------------------------------------------------------
  const elementoReloj = document.getElementById("reloj");

  function actualizarReloj() {
    const ahora = new Date();

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    if (elementoReloj) {
      elementoReloj.textContent = `${horas}:${minutos}:${segundos}`;
    }
  }

  actualizarReloj();

  setInterval(actualizarReloj, 1000);

  //2.2------------------------------------------------
  const frases = [
    ["Motivación", "¡Cada día es una nueva oportunidad!"],
    [
      "Humor",
      "El código funciona y no sé por qué. Falla y tampoco sé por qué.",
    ],
    ["Productividad", "No cuentes los días, haz que los días cuenten."],
    ["Filosofía Jedi", "Hazlo o no lo hagas, pero no lo intentes."],
    [
      "Sabiduría",
      "El único modo de hacer un gran trabajo es amar lo que haces.",
    ],
  ];

  const btnFrase = document.getElementById("btn-frase");
  const elCategoria = document.getElementById("categoria-frase");
  const elTextoFrase = document.getElementById("texto-frase");

  if (btnFrase) {
    btnFrase.addEventListener("click", () => {
      const indiceAleatorio = Math.floor(Math.random() * frases.length);

      const fraseSeleccionada = frases[indiceAleatorio];
      const categoria = fraseSeleccionada[0];
      const texto = fraseSeleccionada[1];

      if (elCategoria && elTextoFrase) {
        elCategoria.textContent = categoria;
        elTextoFrase.textContent = texto;
      }
    });
  }

  //3.1 -----------------
  const inputTarea = document.getElementById("input-tarea");
  const btnAnadir = document.getElementById("btn-anadir");
  const listaTareas = document.getElementById("lista-tareas");

  if (btnAnadir) {
    btnAnadir.addEventListener("click", () => {
      const texto = inputTarea.value.trim();

      if (texto !== "") {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = texto + " ";

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        nuevoLi.appendChild(btnEliminar);
        listaTareas.appendChild(nuevoLi);

        inputTarea.value = "";

        //3.2 -----------------------
        nuevoLi.addEventListener("click", () => {
          console.log(texto);
        });

        btnEliminar.addEventListener("click", (e) => {
          e.stopPropagation();
          nuevoLi.remove();
        });
      }
    });
  }
});
