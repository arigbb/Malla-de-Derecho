// Datos de cursos por ciclo
const cursosPorCiclo = {
  "I": [
    { nombre: "Filosofía", codigo: "FILOSOFIA", creditos: 4, requisitos: [], electivo: false },
    { nombre: "Historia del Perú", codigo: "HISTORIA_PERU", creditos: 3, requisitos: [], electivo: false },
    { nombre: "Introducción al Derecho", codigo: "INTRO_DERECHO", creditos: 4, requisitos: [], electivo: false },
    { nombre: "Lengua y Comunicación I", codigo: "LENGUA_I", creditos: 4, requisitos: [], electivo: false },
    { nombre: "Matemática", codigo: "MATEMATICA", creditos: 3, requisitos: [], electivo: false },
    { nombre: "Metodología del Trabajo Intelectual", codigo: "METODOLOGIA_TI", creditos: 3, requisitos: [], electivo: false }
  ],
  "II": [
    { nombre: "Antropología Filosófica", codigo: "ANTROPOLOGIA", creditos: 4, requisitos: ["FILOSOFIA"], electivo: false },
    { nombre: "Ciencias Naturales", codigo: "CIENCIAS_NATURALES", creditos: 3, requisitos: ["MATEMATICA"], electivo: false },
    { nombre: "Historia Universal", codigo: "HISTORIA_UNIV", creditos: 3, requisitos: ["HISTORIA_PERU"], electivo: false },
    { nombre: "Lengua y Comunicación II", codigo: "LENGUA_II", creditos: 4, requisitos: ["LENGUA_I"], electivo: false },
    { nombre: "Lógica", codigo: "LOGICA", creditos: 2, requisitos: ["MATEMATICA"], electivo: false },
    { nombre: "Metodología de la Investigación Científica", codigo: "METODOLOGIA_INV", creditos: 2, requisitos: ["METODOLOGIA_TI"], electivo: false },
    { nombre: "Programa de Cómputo I", codigo: "COMPUTO_I", creditos: 3, requisitos: [], electivo: false },
    { nombre: "Teoría del Derecho", codigo: "TEORIA_DERECHO", creditos: 4, requisitos: ["INTRO_DERECHO"], electivo: false }
  ],
  "III": [
    { nombre: "Derecho Constitucional I", codigo: "CONST_I", creditos: 5, requisitos: ["TEORIA_DERECHO"], electivo: false },
    { nombre: "Filosofía Moderna y Contemporánea", codigo: "FILOS_MODERNA", creditos: 4, requisitos: ["ANTROPOLOGIA"], electivo: false },
    { nombre: "Historia del Derecho", codigo: "HIST_DER", creditos: 4, requisitos: ["HISTORIA_UNIV"], electivo: false },
    { nombre: "Literatura", codigo: "LITERATURA", creditos: 4, requisitos: ["LENGUA_II"], electivo: false },
    { nombre: "Sociología y Realidad Social", codigo: "SOCIOLOGIA", creditos: 2, requisitos: ["HISTORIA_PERU"], electivo: false },
    { nombre: "Teología Dogmática", codigo: "TEO_DOGMATICA", creditos: 3, requisitos: ["ANTROPOLOGIA"], electivo: false }
  ],
  "IV": [
    { nombre: "Cultura Artística", codigo: "CULT_ARTISTICA", creditos: 2, requisitos: ["SOCIOLOGIA"], electivo: false },
    { nombre: "Derecho Constitucional II", codigo: "CONST_II", creditos: 4, requisitos: ["CONST_I"], electivo: false },
    { nombre: "Derecho Natural", codigo: "DER_NATURAL", creditos: 3, requisitos: ["FILOS_MODERNA", "TEORIA_DERECHO"], electivo: false },
    { nombre: "Derecho Romano", codigo: "DER_ROMANO", creditos: 4, requisitos: ["HIST_DER"], electivo: false },
    { nombre: "Economía", codigo: "ECONOMIA", creditos: 3, requisitos: ["MATEMATICA"], electivo: false },
    { nombre: "Inglés Básico I", codigo: "ING_BASICO", creditos: 3, requisitos: [], electivo: false },
    { nombre: "Principios del Derecho Civil y Personas", codigo: "PRIN_CIVIL", creditos: 4, requisitos: ["HIST_DER"], electivo: false },
    { nombre: "Teología Sacramentaria", codigo: "TEO_SACRAMENT", creditos: 3, requisitos: ["TEO_DOGMATICA"], electivo: false }
  ],
  "V": [
    { nombre: "Acto Jurídico", codigo: "ACTO_JURIDICO", creditos: 4, requisitos: ["DER_ROMANO"], electivo: false },
    { nombre: "Derecho Eclesiástico del Estado", codigo: "DER_ECLESIASTICO", creditos: 4, requisitos: ["CONST_II", "DER_NATURAL"], electivo: false },
    { nombre: "Derecho Penal I", codigo: "PENAL_I", creditos: 4, requisitos: ["CONST_II"], electivo: false },
    { nombre: "Ética", codigo: "ETICA", creditos: 4, requisitos: ["ANTROPOLOGIA", "CIENCIAS_NATURALES"], electivo: false },
    { nombre: "Inglés Especializado", codigo: "ING_ESP", creditos: 3, requisitos: ["ING_BASICO"], electivo: false },
    { nombre: "Personas Jurídicas", codigo: "PERS_JURIDICAS", creditos: 3, requisitos: ["DER_ROMANO"], electivo: false },
    { nombre: "Teología Moral", codigo: "TEO_MORAL", creditos: 3, requisitos: ["TEO_SACRAMENT"], electivo: false }
  ]
  "VI": [
    { nombre: "Contabilidad y Finanzas", codigo: "CONTAB_FIN", creditos: 3, requisitos: ["ECONOMIA"], electivo: false },
    { nombre: "Derecho Comercial I", codigo: "COMERCIAL_I", creditos: 4, requisitos: ["ACTO_JURIDICO", "PERS_JURIDICAS"], electivo: false },
    { nombre: "Derecho de Obligaciones", codigo: "OBLIGACIONES", creditos: 5, requisitos: ["ACTO_JURIDICO", "PRIN_CIVIL"], electivo: false },
    { nombre: "Derecho Penal II", codigo: "PENAL_II", creditos: 4, requisitos: ["PENAL_I"], electivo: false },
    { nombre: "Derecho Procesal Civil I", codigo: "PROCESAL_CIVIL_I", creditos: 5, requisitos: ["CONST_II"], electivo: false },
    { nombre: "Derechos Reales", codigo: "DERECHOS_REALES", creditos: 4, requisitos: ["ACTO_JURIDICO"], electivo: false }
  ],
  "VII": [
    { nombre: "Derecho Administrativo I", codigo: "ADM_I", creditos: 5, requisitos: ["CONST_II", "ACTO_JURIDICO"], electivo: false },
    { nombre: "Derecho Comercial II", codigo: "COMERCIAL_II", creditos: 4, requisitos: ["COMERCIAL_I"], electivo: false },
    { nombre: "Derecho de Contratos I", codigo: "CONTRATOS_I", creditos: 5, requisitos: ["OBLIGACIONES"], electivo: false },
    { nombre: "Derecho Penal III", codigo: "PENAL_III", creditos: 5, requisitos: ["PENAL_II"], electivo: false },
    { nombre: "Derecho Procesal Civil II", codigo: "PROCESAL_CIVIL_II", creditos: 4, requisitos: ["PROCESAL_CIVIL_I"], electivo: false },
    { nombre: "Sistemas Alternativos de Solución de Conflictos", codigo: "SASC", creditos: 4, requisitos: ["ETICA", "CONST_II"], electivo: false }
  ],
  "VIII": [
    { nombre: "Derecho Administrativo II", codigo: "ADM_II", creditos: 4, requisitos: ["ADM_I"], electivo: false },
    { nombre: "Derecho Comercial III", codigo: "COMERCIAL_III", creditos: 4, requisitos: ["CONTRATOS_I", "COMERCIAL_II"], electivo: false },
    { nombre: "Derecho de Contratos II", codigo: "CONTRATOS_II", creditos: 4, requisitos: ["CONTRATOS_I"], electivo: false },
    { nombre: "Derecho Laboral I", codigo: "LABORAL_I", creditos: 4, requisitos: ["CONTRATOS_I", "ADM_I"], electivo: false },
    { nombre: "Derecho Notarial y Registral", codigo: "NOTARIAL", creditos: 3, requisitos: ["DERECHOS_REALES"], electivo: false },
    { nombre: "Derecho Procesal Penal", codigo: "PROCESAL_PENAL", creditos: 4, requisitos: ["PROCESAL_CIVIL_I", "PENAL_III"], electivo: false }
  ],
  "IX": [
    { nombre: "Derecho de Familia", codigo: "FAMILIA", creditos: 4, requisitos: ["PRIN_CIVIL"], electivo: false },
    { nombre: "Derecho Laboral II", codigo: "LABORAL_II", creditos: 4, requisitos: ["LABORAL_I", "PROCESAL_CIVIL_I"], electivo: false },
    { nombre: "Derecho Procesal Constitucional", codigo: "PROCESAL_CONST", creditos: 4, requisitos: ["CONST_II", "PROCESAL_PENAL"], electivo: false },
    { nombre: "Derecho Tributario I", codigo: "TRIBUTARIO_I", creditos: 4, requisitos: ["ADM_II"], electivo: false },
    { nombre: "Política Jurisdiccional", codigo: "POL_JURIS", creditos: 4, requisitos: ["ADM_II", "PROCESAL_PENAL"], electivo: false },
    { nombre: "Prácticas Pre Profesionales", codigo: "PRACTICAS", creditos: 3, requisitos: ["SASC", "PROCESAL_PENAL"], electivo: false },
    { nombre: "Razonamiento Jurídico", codigo: "RAZONAMIENTO", creditos: 2, requisitos: ["PROCESAL_CIVIL_II"], electivo: false }
  ],
  "X": [
    { nombre: "Derecho de Sucesiones", codigo: "SUCESIONES", creditos: 4, requisitos: ["FAMILIA"], electivo: false },
    { nombre: "Derecho Internacional Público", codigo: "DIP", creditos: 4, requisitos: ["PROCESAL_CONST"], electivo: false },
    { nombre: "Derecho Tributario II", codigo: "TRIBUTARIO_II", creditos: 4, requisitos: ["TRIBUTARIO_I"], electivo: false },
    { nombre: "Filosofía del Derecho", codigo: "FILOS_DER", creditos: 4, requisitos: ["DER_NATURAL"], electivo: false },
    { nombre: "Metodología de la Investigación Jurídica", codigo: "MET_INV_JUR", creditos: 2, requisitos: ["METODOLOGIA_INV"], electivo: false }
  ],
  "XI": [
    { nombre: "Deontología Jurídica", codigo: "DEONTOLOGIA", creditos: 3, requisitos: ["FILOS_DER"], electivo: false },
    { nombre: "Derecho Tributario III", codigo: "TRIBUTARIO_III", creditos: 4, requisitos: ["TRIBUTARIO_II"], electivo: false },
    { nombre: "Taller de Titulación I", codigo: "TALLER_I", creditos: 2, requisitos: ["MET_INV_JUR"], electivo: false },
    { nombre: "Técnicas de Litigación Oral", codigo: "LITIGACION", creditos: 3, requisitos: ["PROCESAL_CIVIL_II", "PROCESAL_PENAL"], electivo: false }
  ],
  "XII": [
    { nombre: "Derecho Ambiental", codigo: "AMBIENTAL", creditos: 3, requisitos: ["TRIBUTARIO_III"], electivo: false },
    { nombre: "Dirección de Personas", codigo: "DIRECCION", creditos: 3, requisitos: ["LABORAL_II", "COMERCIAL_III"], electivo: false },
    { nombre: "Doctrina Social de la Iglesia", codigo: "DOCTRINA", creditos: 3, requisitos: ["DEONTOLOGIA"], electivo: false },
    { nombre: "Taller de Titulación II", codigo: "TALLER_II", creditos: 2, requisitos: ["TALLER_I"], electivo: false }
  ]
};

const estadoCursos = {};
const malla = document.getElementById("malla");
const resumen = document.createElement("div");
resumen.id = "resumen";
resumen.style.margin = "20px 0";
resumen.style.fontWeight = "bold";
document.body.insertBefore(resumen, malla);

Object.entries(cursosPorCiclo).forEach(([ciclo, cursos]) => {
  const seccion = document.createElement("div");
  seccion.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso");
    div.id = curso.codigo;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.disabled = curso.requisitos.length > 0;
    checkbox.addEventListener("change", () => {
      estadoCursos[curso.codigo] = checkbox.checked;
      actualizarDisponibilidad();
    });

    const label = document.createElement("label");
    label.innerHTML = `${curso.nombre} (${curso.creditos} créditos) ${curso.electivo ? '<em>(Electivo)</em>' : ''}`;

    div.appendChild(checkbox);
    div.appendChild(label);
    seccion.appendChild(div);

    estadoCursos[curso.codigo] = false;
  });
  malla.appendChild(seccion);
});

function actualizarDisponibilidad() {
  let totalCreditos = 0;
  Object.values(cursosPorCiclo).flat().forEach(curso => {
    const cumple = curso.requisitos.every(req => estadoCursos[req]);
    const divCurso = document.getElementById(curso.codigo);
    const checkbox = divCurso.querySelector("input");
    if (!checkbox.checked && curso.requisitos.length > 0) {
      checkbox.disabled = !cumple;
      divCurso.classList.toggle("bloqueado", !cumple);
    }
    if (checkbox.checked) {
      totalCreditos += curso.creditos;
    }
  });
  const totalCursos = Object.values(estadoCursos).filter(Boolean).length;
  resumen.textContent = `Cursos aprobados: ${totalCursos} | Créditos acumulados: ${totalCreditos}`;
}
  });
}

