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
    
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    if (elementoReloj) {
      elementoReloj.textContent = `${horas}:${minutos}:${segundos}`;
    }
  }

  actualizarReloj();

  setInterval(actualizarReloj, 1000);
//2.2------------------------------------------------
  const frases = [
    ['Motivación', '¡Cada día es una nueva oportunidad!'],
    ['Humor', 'El código funciona y no sé por qué. Falla y tampoco sé por qué.'],
    ['Productividad', 'No cuentes los días, haz que los días cuenten.'],
    ['Filosofía Jedi', 'Hazlo o no lo hagas, pero no lo intentes.'],
    ['Sabiduría', 'El único modo de hacer un gran trabajo es amar lo que haces.']
  ];

  const btnFrase = document.getElementById("btn-frase");
  const elCategoria = document.getElementById("categoria-frase");
  const elTextoFrase = document.getElementById("texto-frase");

  // 3. Registramos el evento de clic de forma moderna (obligatorio en la rúbrica)
  if (btnFrase) {
    btnFrase.addEventListener("click", () => {
      // Math.random() saca un número entre 0 y 0.99. 
      // Lo multiplicamos por la longitud del array (5) y Math.floor() le quita los decimales.
      // Así siempre nos dará un índice válido: 0, 1, 2, 3 o 4.
      const indiceAleatorio = Math.floor(Math.random() * frases.length);
      
      // Extraemos los datos
      const fraseSeleccionada = frases[indiceAleatorio];
      const categoria = fraseSeleccionada[0];
      const texto = fraseSeleccionada[1];

      // Inyectamos en el HTML
      if (elCategoria && elTextoFrase) {
        elCategoria.textContent = categoria;
        elTextoFrase.textContent = texto;
      }
    });
  }

    // 3.1------------------
    const inputTarea = document.getElementById("input-tarea");
    const btnAnadir = document.getElementById("btn-anadir");
    const listaTareas = document.getElementById("lista-tareas");

    function crearNuevaTarea(texto) {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = texto + " ";

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";

        nuevoLi.appendChild(btnEliminar);
        listaTareas.appendChild(nuevoLi);

        inputTarea.value = "";

        // 3.2 -----------
        nuevoLi.addEventListener("click", () => {
        console.log(texto);
        });

        btnEliminar.addEventListener("click", (e) => {
        e.stopPropagation();
        nuevoLi.remove();
        });
    }

    if (btnAnadir) {
        btnAnadir.addEventListener("click", () => {
        const texto = inputTarea.value.trim();
        if (texto !== "") {
            crearNuevaTarea(texto);
        }
        });
    }
    
    //4---------------------------------
    if (inputTarea) {
        inputTarea.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); 
            
            const textoTarea = inputTarea.value.trim();
            if (textoTarea !== "") {
            crearNuevaTarea(textoTarea);
            }
        }
        });
    }
    
  //5.1

    const btnModoOscuro = document.getElementById("btn-modo-oscuro");
    const body = document.body;

    const modoGuardado = localStorage.getItem("modoOscuro");
    
    if (modoGuardado === "activado") {
        body.classList.add("dark-mode");
    }

    if (btnModoOscuro) {
        btnModoOscuro.addEventListener("click", () => {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("modoOscuro", "activado");
            } else {
                localStorage.setItem("modoOscuro", "desactivado");
            }
        });
    }
//5.2-----------------------
    const spanWidth = document.getElementById("window-width");
    const spanHeight = document.getElementById("window-height");

    function actualizarDimensiones() {
        if (spanWidth && spanHeight) {
        spanWidth.textContent = window.innerWidth;
        spanHeight.textContent = window.innerHeight;
        }
    }
    actualizarDimensiones();

    window.addEventListener("resize", actualizarDimensiones);
});
