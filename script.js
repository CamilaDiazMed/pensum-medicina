const materias = [
  {
    codigo: "3020101",
    nombre: "Salud y Sociedad I",
    prerrequisitos: [],
  },
  {
    codigo: "3021102",
    nombre: "Biología de la Célula I",
    prerrequisitos: [],
  },
  {
    codigo: "3021023",
    nombre: "Biología de la Célula II",
    prerrequisitos: ["3021102"],
  },
  {
    codigo: "3023201",
    nombre: "Comunicación II",
    prerrequisitos: [],
  },
  {
    codigo: "3029004",
    nombre: "Movimiento y Postura",
    prerrequisitos: ["3028004", "3025201"],
  },
  {
    codigo: "3035051",
    nombre: "Acto Médico",
    prerrequisitos: ["3033401", "3030401", "3033401", "3023201", "3029004"],
  },
  {
    codigo: "3033051",
    nombre: "Salud e Infección II",
    prerrequisitos: ["3030401", "3033401"],
  },
  {
    codigo: "3020601",
    nombre: "Salud y Sociedad III",
    prerrequisitos: ["3031067", "3036607"],
  },
  {
    codigo: "3036607",
    nombre: "Adolescencia I: Cuidado del Adolescente",
    prerrequisitos: ["3020601", "3031067"],
  },
  {
    codigo: "3037108",
    nombre: "Adultez II: Salud y Género",
    prerrequisitos: ["3037105", "3037111"],
  },
  {
    codigo: "3037105",
    nombre: "Adultez III: Gestión Humana",
    prerrequisitos: ["3037110", "3037111", "3037106"],
  },
  {
    codigo: "3037106",
    nombre: "Adultez II: Salud y Género",
    prerrequisitos: ["3037105", "3037111"],
  },
  {
    codigo: "3014011",
    nombre: "Electiva 2",
    prerrequisitos: ["3014010"],
  },
  // Puedes seguir agregando todas las demás materias...
];

function crearMalla() {
  const container = document.getElementById("malla-container");

  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.classList.add("materia");
    div.innerText = materia.nombre;

    const desbloqueada = materia.prerrequisitos.every((codigo) =>
      localStorage.getItem(codigo) === "true"
    );

    if (!desbloqueada && materia.prerrequisitos.length > 0) {
      div.classList.add("bloqueada");
    }

    div.addEventListener("click", () => {
      if (!div.classList.contains("bloqueada")) {
        div.classList.toggle("cursada");
        const cursada = div.classList.contains("cursada");
        localStorage.setItem(materia.codigo, cursada);
        location.reload(); // recarga para desbloquear otras materias
      }
    });

    if (localStorage.getItem(materia.codigo) === "true") {
      div.classList.add("cursada");
    }

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
