const materias = [
  // Nivel 1
  {
    nivel: 1,
    items: [
      { nombre: "APH: Primeros Auxilios", creditos: 2 },
      { nombre: "Salud y Sociedad I", creditos: 5 },
      { nombre: "Comunicación I", creditos: 4 },
      { nombre: "Informática Médica I", creditos: 2 },
      { nombre: "Biología de la Célula I", creditos: 10 }
    ]
  },
  // Nivel 2
  {
    nivel: 2,
    items: [
      { nombre: "Biología de la Célula II", creditos: 3, prerequisitos: ["Biología de la Célula I"] },
      { nombre: "Comunicación II", creditos: 4, prerequisitos: ["Comunicación I"] },
      { nombre: "Neurociencias", creditos: 9, prerequisitos: ["Biología de la Célula I"] },
      { nombre: "Endocrinología y Metabolismo I", creditos: 4, prerequisitos: ["Biología de la Célula I"] },
      { nombre: "Autorregulación y Autoconservación", creditos: 4, prerequisitos: ["Biología de la Célula I"] }
    ]
  },
  // Nivel 3
  {
    nivel: 3,
    items: [
      { nombre: "Formación Ciudadana y Constitución", creditos: 0 },
      { nombre: "Salud y Sociedad II", creditos: 3, prerequisitos: ["Salud y Sociedad I"] },
      { nombre: "Cardiorrespiratorio", creditos: 7, prerequisitos: ["Autorregulación y Autoconservación"] },
      { nombre: "Movimiento y Postura", creditos: 7, prerequisitos: ["Neurociencias", "Cardiorrespiratorio"] },
      { nombre: "Hematología", creditos: 3, prerequisitos: ["Autorregulación y Autoconservación"] },
      { nombre: "Sexualidad", creditos: 2, prerequisitos: ["Hematología", "Endocrinología y Metabolismo I"] }
    ]
  },
  // Nivel 4
  {
    nivel: 4,
    items: [
      { nombre: "Inmunología", creditos: 4, prerequisitos: ["Hematología"] },
      { nombre: "Salud e Infección I", creditos: 8, prerequisitos: ["Biología de la Célula II"] },
      { nombre: "Gastroenterología y Nutrición", creditos: 7, prerequisitos: ["Cardiorrespiratorio"] }
    ]
  },
  // Nivel 5
  {
    nivel: 5,
    items: [
      { nombre: "Informática Médica II", creditos: 2, prerequisitos: ["Informática Médica I"] },
      { nombre: "Salud e Infección II", creditos: 3, prerequisitos: ["Inmunología", "Salud e Infección I"] },
      { nombre: "Acto Médico", creditos: 16, prerequisitos: ["Inmunología", "Salud e Infección I", "Comunicación II", "Movimiento y Postura"] }
    ]
  },
  // Nivel 6
  {
    nivel: 6,
    items: [
      { nombre: "Niñez I: Cuidado Integral del Niño", creditos: 12, prerequisitos: ["Acto Médico"] },
      { nombre: "Salud y Sociedad III", creditos: 3, prerequisitos: ["Niñez I", "Adolescente I"] },
      { nombre: "Adolescente I: Cuidado Integral del Adolescente", creditos: 6, prerequisitos: ["Niñez I", "Salud y Sociedad III"] }
    ]
  },
  // Nivel 7
  {
    nivel: 7,
    items: [
      { nombre: "Epidemiología Clínica I", creditos: 3, prerequisitos: ["Salud y Sociedad II"] },
      { nombre: "Niñez II", creditos: 11, prerequisitos: ["Adolescente I", "Acto Médico"] },
      { nombre: "Adolescencia II", creditos: 6, prerequisitos: ["Salud y Sociedad III", "Sexualidad", "Acto Médico"] }
    ]
  },
  // Nivel 8
  {
    nivel: 8,
    items: [
      { nombre: "Adultez I: Problemas Médicos de la Adultez", creditos: 15, prerequisitos: ["Epidemiología Clínica I", "Acto Médico"] },
      { nombre: "Adultez I: Salud Mental", creditos: 6, prerequisitos: ["Epidemiología Clínica I", "Adolescencia II"] },
      { nombre: "Endocrinología y Metabolismo II", creditos: 3, prerequisitos: ["Adultez I: Problemas Médicos de la Adultez", "Endocrinología y Metabolismo I", "Acto Médico"] }
    ]
  },
  // Nivel 9
  {
    nivel: 9,
    items: [
      { nombre: "Epidemiología Clínica II", creditos: 2, prerequisitos: ["Epidemiología Clínica I"] },
      { nombre: "Adultez II: Urgencias Médicas", creditos: 9, prerequisitos: ["Adultez I: Problemas Médicos de la Adultez", "Acto Médico"] },
      { nombre: "Adultez II: Urgencias Quirúrgicas", creditos: 10, prerequisitos: ["Adultez II: Urgencias Médicas", "Adultez I: Problemas Médicos de la Adultez", "Acto Médico"] }
    ]
  },
  // Nivel 10
  {
    nivel: 10,
    items: [
      { nombre: "Adultez III: Gestación Humana", creditos: 10, prerequisitos: ["Adultez II: Urgencias Médicas", "Adultez II: Urgencias Quirúrgicas"] },
      { nombre: "Adultez III: Salud y Género", creditos: 10, prerequisitos: ["Adultez III: Gestación Humana"] }
    ]
  },
  // Nivel 11
  {
    nivel: 11,
    items: [
      { nombre: "Vejez", creditos: 6, prerequisitos: ["Adultez III: Salud y Género"] },
      { nombre: "Cáncer", creditos: 5, prerequisitos: ["Adultez II: Urgencias Médicas"] },
      { nombre: "Adultez IV: Responsabilidad del Acto Médico y Dolor", creditos: 1, prerequisitos: ["Vejez", "Cáncer", "Adultez II: Urgencias Quirúrgicas"] }
    ]
  },
  // Nivel 12
  {
    nivel: 12,
    items: [
      { nombre: "Atención Integral del Niño y el Adolescente", creditos: 10, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor", "Cáncer", "Vejez"] },
      { nombre: "Atención Integral de la Mujer", creditos: 10, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor", "Cáncer", "Vejez"] },
      { nombre: "Atención Integral del Adulto", creditos: 10, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor", "Cáncer", "Vejez"] },
      { nombre: "Urgencias Médicas", creditos: 10, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor", "Cáncer", "Vejez"] },
      { nombre: "Urgencias Quirúrgicas", creditos: 10, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor", "Cáncer", "Vejez"] },
      { nombre: "Atención Primaria en Salud I", creditos: 4, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor", "Cáncer", "Vejez"] }
    ]
  },
  // Nivel 13
  {
    nivel: 13,
    items: [
      { nombre: "Integración de Habilidades en el Manejo del Paciente Crítico", creditos: 5, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor", "Cáncer", "Vejez"] },
      { nombre: "Urgencias Ortopédicas", creditos: 4, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor"] },
      { nombre: "Atención Primaria en Salud II", creditos: 4, prerequisitos: ["Adultez IV: Responsabilidad del Acto Médico y Dolor"] }
    ]
  }
];

// Inicializar créditos
let creditosTotales = 0;

function renderPensum() {
  const contenedor = document.getElementById("pensum");
  materias.forEach(nivel => {
    const divNivel = document.createElement("div");
    divNivel.className = "nivel";
    const titulo = document.createElement("h2");
    titulo.textContent = `Nivel ${nivel.nivel}`;
    divNivel.appendChild(titulo);

    nivel.items.forEach(materia => {
      const divMateria = document.createElement("div");
      divMateria.className = "materia bloqueada";
      divMateria.textContent = `${materia.nombre} (${materia.creditos} créditos)`;

      divMateria.dataset.nombre = materia.nombre;
      divMateria.dataset.creditos = materia.creditos;
      divMateria.dataset.estado = "pendiente";

      divMateria.addEventListener("click", () => {
        if (divMateria.classList.contains("bloqueada")) return;

        if (!divMateria.classList.contains("completada")) {
          divMateria.classList.add("completada");
          divMateria.dataset.estado = "completada";
          creditosTotales += parseInt(divMateria.dataset.creditos);
          actualizarCreditos();
          desbloquearMaterias();
        }
      });

      divNivel.appendChild(divMateria);
    });

    contenedor.appendChild(divNivel);
  });

  desbloquearMaterias();
}

function actualizarCreditos() {
  document.getElementById("creditos-totales").textContent = creditosTotales;
}

function desbloquearMaterias() {
  document.querySelectorAll(".materia").forEach(m => {
    const nombre = m.dataset.nombre;
    const estado = m.dataset.estado;
    if (estado === "pendiente") {
      const materia = encontrarMateria(nombre);
      if (!materia.prerequisitos || materia.prerequisitos.every(p => estaCompletada(p))) {
        m.classList.remove("bloqueada");
      }
    }
  });
}

function encontrarMateria(nombre) {
  for (const nivel of materias) {
    const materia = nivel.items.find(m => m.nombre === nombre);
    if (materia) return materia;
  }
  return null;
}

function estaCompletada(nombre) {
  const materiaDOM = [...document.querySelectorAll(".materia")].find(m => m.dataset.nombre === nombre);
  return materiaDOM && materiaDOM.dataset.estado === "completada";
}

renderPensum();
