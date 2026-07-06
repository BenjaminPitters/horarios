// Datos de horarios del Colegio Querer - v11 (con momentos para la pestaña Turnos).
window.HORARIOS = {
 "meta": {
  "centro": "Colegio Querer",
  "curso": "2026-27",
  "dias": [
   "Lunes",
   "Martes",
   "Miércoles",
   "Jueves",
   "Viernes"
  ],
  "colores_asignatura": {
   "Lengua": "#BBE5B3",
   "Matemáticas": "#A8D5BA",
   "Escritura": "#C9E4C5",
   "Ciencias": "#9FD8A0",
   "Conocimiento del Entorno": "#B8E0A8",
   "Prerrequisitos de Aprendizaje": "#CDE7C5",
   "Prerrequisitos de Grafomotricidad": "#D4ECC8",
   "Estimulación del Lenguaje": "#8FCB9B",
   "Prerrequisitos de Lectoescritura": "#BBE5B3",
   "Asamblea": "#F8D7DA",
   "Asamblea Conjunta": "#F8D7DA",
   "Capacitación Digital": "#F1A7B8",
   "Actividades de la Vida Diaria": "#F5C6CB",
   "Inteligencia Emocional": "#F2A9B8",
   "Música": "#F4B8C1",
   "Inglés": "#F8C471",
   "Juego": "#AED6F1",
   "Educación Física": "#A9CCE3",
   "Educación Física (1h)": "#A9CCE3",
   "Educación Física (conj.)": "#A9CCE3",
   "Psicomotricidad": "#AEB6E8",
   "Snack": "#BFD7EA",
   "Autonomía": "#B3D4E0",
   "Cuentacuentos": "#C5DCE8",
   "Arrowsmith": "#E6D2B5",
   "Arte": "#D5D8DC"
  },
  "colores_estado": {
   "no_lectivo": "#E7EEE2",
   "comida": "#EFE7DA",
   "fuera": "#DDDDDD",
   "lectivo": "#FFFFFF"
  },
  "colores_vigilancia": {
   "patio": "#DCC6EE",
   "comedor_tutor": "#F8D2A6",
   "Comedor Estrella": "#FFF2B2",
   "Comedor Sol": "#FFCC99",
   "Comedor Norte": "#A8D8D0",
   "Comedor EBO/Luna": "#B3C7F0"
  }
 },
 "clases": {
  "Estrella": {
   "tutor": "T1",
   "tutor_nombre": "María C.",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "asig": "Asamblea",
       "adultos": [
        "T1"
       ]
      },
      "Martes": {
       "asig": "Asamblea",
       "adultos": [
        "T1"
       ]
      },
      "Miércoles": {
       "asig": "Asamblea",
       "adultos": [
        "T1"
       ]
      },
      "Jueves": {
       "asig": "Asamblea",
       "adultos": [
        "EF1"
       ]
      },
      "Viernes": {
       "asig": "Asamblea",
       "adultos": [
        "T1"
       ]
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1"
       ],
       "salidas": [
        {
         "alumno": "Bernardo",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Martes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1",
        "T1"
       ]
      },
      "Miércoles": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1"
       ],
       "salidas": [
        {
         "alumno": "Naomi",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Jueves": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1",
        "T1"
       ]
      },
      "Viernes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1"
       ],
       "salidas": [
        {
         "alumno": "Lucía",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1",
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Cuentacuentos",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Naomi",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1",
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Cuentacuentos",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Lucía",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Viernes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1"
       ]
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "asig": "Snack",
       "adultos": [
        "T1",
        "L3"
       ]
      },
      "Martes": {
       "asig": "Snack",
       "adultos": [
        "T1",
        "L3"
       ]
      },
      "Miércoles": {
       "asig": "Snack",
       "adultos": [
        "T1",
        "L3"
       ]
      },
      "Jueves": {
       "asig": "Snack",
       "adultos": [
        "T1",
        "L3"
       ]
      },
      "Viernes": {
       "asig": "Snack",
       "adultos": [
        "T1",
        "L3"
       ]
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "label": "Patio 11:00–11:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T1",
        "TO1"
       ]
      },
      "Martes": {
       "asig": "Inglés",
       "adultos": [
        "I2"
       ],
       "salidas": [
        {
         "alumno": "Naomi",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Inés",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Jueves": {
       "asig": "Inglés",
       "adultos": [
        "I2"
       ],
       "salidas": [
        {
         "alumno": "Bernardo",
         "a": "O2",
         "a_nombre": "Sara"
        },
        {
         "alumno": "Inés",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Bernardo",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T1",
        "L3"
       ]
      },
      "Martes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Inés",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Bernardo",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Jueves": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Inés",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Lucía",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "T6"
       ]
      },
      "Martes": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "T6"
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "T6"
       ]
      },
      "Jueves": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "T6"
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "T6"
       ]
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "label": "Comida 13:00–13:45",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "label": "Patio tarde 13:45–14:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Juego",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Lucía",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Juego",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Naomi",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "T1",
        "EF1"
       ]
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Inés",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Martes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1"
       ],
       "salidas": [
        {
         "alumno": "Bernardo",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Lucía",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Jueves": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1"
       ]
      },
      "Viernes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Naomi",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "asig": "Autonomía",
       "adultos": [
        "T1",
        "O1"
       ]
      },
      "Martes": {
       "asig": "Autonomía",
       "adultos": [
        "T1",
        "O1"
       ]
      },
      "Miércoles": {
       "asig": "Autonomía",
       "adultos": [
        "T1",
        "O1"
       ]
      },
      "Jueves": {
       "asig": "Autonomía",
       "adultos": [
        "T1",
        "O1"
       ]
      },
      "Viernes": {
       "asig": "Música",
       "adultos": [
        "T1"
       ]
      }
     }
    }
   ]
  },
  "Sol": {
   "tutor": "T2",
   "tutor_nombre": "Carol",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "asig": "Asamblea",
       "adultos": [
        "T2"
       ]
      },
      "Martes": {
       "asig": "Asamblea",
       "adultos": [
        "T2"
       ]
      },
      "Miércoles": {
       "asig": "Asamblea",
       "adultos": [
        "T2"
       ]
      },
      "Jueves": {
       "asig": "Asamblea",
       "adultos": [
        "T7"
       ]
      },
      "Viernes": {
       "asig": "Asamblea",
       "adultos": [
        "T2"
       ]
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L3",
        "T2"
       ]
      },
      "Martes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L3"
       ],
       "salidas": [
        {
         "alumno": "Álvaro",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Miércoles": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L3",
        "T2"
       ]
      },
      "Jueves": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L3"
       ],
       "salidas": [
        {
         "alumno": "Santiago",
         "a": "O1",
         "a_nombre": "(por contratar)"
        },
        {
         "alumno": "Eva",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Viernes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L3"
       ],
       "salidas": [
        {
         "alumno": "Gonzalo",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T2",
        "L3"
       ]
      },
      "Martes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1",
        "EF1"
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Eva",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1",
        "EF1"
       ]
      },
      "Viernes": {
       "asig": "Música",
       "adultos": [
        "T2"
       ]
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "asig": "Snack",
       "adultos": [
        "T2",
        "L3"
       ]
      },
      "Martes": {
       "asig": "Snack",
       "adultos": [
        "T2",
        "L3"
       ]
      },
      "Miércoles": {
       "asig": "Snack",
       "adultos": [
        "T2",
        "L3"
       ]
      },
      "Jueves": {
       "asig": "Snack",
       "adultos": [
        "T2",
        "L3"
       ]
      },
      "Viernes": {
       "asig": "Snack",
       "adultos": [
        "T7",
        "L3"
       ]
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "label": "Patio 11:00–11:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T2"
       ]
      },
      "Martes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T2",
        "(TO2)"
       ],
       "salidas": [
        {
         "alumno": "Álvaro",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Miércoles": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Santiago",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T2",
        "TO2"
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Eva",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "asig": "Inglés",
       "adultos": [
        "I2"
       ],
       "salidas": [
        {
         "alumno": "Eva",
         "a": "L2",
         "a_nombre": "Sheila"
        },
        {
         "alumno": "Álvaro",
         "a": "O1",
         "a_nombre": "(por contratar)"
        },
        {
         "alumno": "Santiago",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Martes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Gonzalo",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Miércoles": {
       "asig": "Inglés",
       "adultos": [
        "I2"
       ],
       "salidas": [
        {
         "alumno": "Gonzalo",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Jueves": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Álvaro",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Santiago",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "asig": "Juego",
       "adultos": [
        "T2",
        "T6"
       ]
      },
      "Martes": {
       "asig": "Juego",
       "adultos": [
        "TO2",
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Santiago",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T2",
        "T6"
       ]
      },
      "Jueves": {
       "asig": "Juego",
       "adultos": [
        "T2",
        "T6"
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "TO2",
        "T6"
       ]
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "label": "Comida 13:00–13:45",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "label": "Patio tarde 13:45–14:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "asig": "Juego",
       "adultos": [
        "T2",
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Juego",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Gonzalo",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T2",
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Juego",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Eva",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "T2",
        "EF1"
       ]
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1"
       ]
      },
      "Martes": {
       "asig": "Cuentacuentos",
       "adultos": [
        "T2",
        "T7"
       ]
      },
      "Miércoles": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1"
       ],
       "salidas": [
        {
         "alumno": "Álvaro",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Cuentacuentos",
       "adultos": [
        "T2",
        "T7"
       ]
      },
      "Viernes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T2"
       ],
       "salidas": [
        {
         "alumno": "Gonzalo",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "asig": "Autonomía",
       "adultos": [
        "T2",
        "TO2"
       ]
      },
      "Martes": {
       "asig": "Autonomía",
       "adultos": [
        "T2",
        "TO2"
       ]
      },
      "Miércoles": {
       "asig": "Autonomía",
       "adultos": [
        "T2",
        "TO2"
       ]
      },
      "Jueves": {
       "asig": "Autonomía",
       "adultos": [
        "T2"
       ]
      },
      "Viernes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "TO1"
       ]
      }
     }
    }
   ]
  },
  "Norte": {
   "tutor": "T4",
   "tutor_nombre": "Marta O.",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "asig": "Asamblea",
       "adultos": [
        "T4"
       ]
      },
      "Martes": {
       "asig": "Asamblea",
       "adultos": [
        "T4"
       ]
      },
      "Miércoles": {
       "asig": "Asamblea",
       "adultos": [
        "T4"
       ]
      },
      "Jueves": {
       "asig": "Asamblea",
       "adultos": [
        "T4"
       ]
      },
      "Viernes": {
       "asig": "Asamblea",
       "adultos": [
        "T7"
       ]
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L2",
        "T4"
       ]
      },
      "Martes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L2"
       ],
       "salidas": [
        {
         "alumno": "Alejandra",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Miércoles": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L2"
       ],
       "salidas": [
        {
         "alumno": "CatalinaF",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L2",
        "T4"
       ]
      },
      "Viernes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L2",
        "TO2"
       ]
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "CatalinaF",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Martes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Alejandra",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T4",
        "TO2"
       ]
      },
      "Jueves": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Leonor",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Miguel",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "asig": "Snack",
       "adultos": [
        "T4",
        "L2"
       ]
      },
      "Martes": {
       "asig": "Snack",
       "adultos": [
        "T4",
        "L2"
       ]
      },
      "Miércoles": {
       "asig": "Snack",
       "adultos": [
        "T4",
        "L2"
       ]
      },
      "Jueves": {
       "asig": "Snack",
       "adultos": [
        "T4",
        "L2"
       ]
      },
      "Viernes": {
       "asig": "Snack",
       "adultos": [
        "T4"
       ]
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "label": "Patio 11:00–11:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Leonor",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Martes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Miguel",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T4",
        "(TO1)"
       ],
       "salidas": [
        {
         "alumno": "Leonor",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Jueves": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Alejandra",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T4",
        "TO1"
       ]
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Inglés",
       "adultos": [
        "I2"
       ]
      },
      "Miércoles": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Inglés",
       "adultos": [
        "I2"
       ]
      },
      "Viernes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "CatalinaF",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Alejandra",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Martes": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Miguel",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "CatalinaF",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Jueves": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Miguel",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Leonor",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "label": "Comida 13:00–13:45",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "label": "Patio tarde 13:45–14:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "asig": "Autonomía",
       "adultos": [
        "T4",
        "O1"
       ]
      },
      "Martes": {
       "asig": "Autonomía",
       "adultos": [
        "TO1",
        "O1"
       ]
      },
      "Miércoles": {
       "asig": "Autonomía",
       "adultos": [
        "T4",
        "O1"
       ]
      },
      "Jueves": {
       "asig": "Autonomía",
       "adultos": [
        "TO1",
        "O1"
       ]
      },
      "Viernes": {
       "asig": "Música",
       "adultos": [
        "T4"
       ]
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Leonor",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Martes": {
       "asig": "Cuentacuentos",
       "adultos": [
        "T4",
        "T6"
       ]
      },
      "Miércoles": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Miguel",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Jueves": {
       "asig": "Cuentacuentos",
       "adultos": [
        "T4",
        "T6"
       ]
      },
      "Viernes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T4",
        "TO1"
       ]
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "CatalinaF",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Martes": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ],
       "salidas": [
        {
         "alumno": "Alejandra",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Jueves": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "T4"
       ]
      }
     }
    }
   ]
  },
  "Luna": {
   "tutor": "T3",
   "tutor_nombre": "Silvia",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "asig": "Asamblea",
       "adultos": [
        "T6"
       ]
      },
      "Martes": {
       "asig": "Asamblea",
       "adultos": [
        "T3"
       ]
      },
      "Miércoles": {
       "asig": "Asamblea",
       "adultos": [
        "T3"
       ]
      },
      "Jueves": {
       "asig": "Asamblea",
       "adultos": [
        "T3"
       ]
      },
      "Viernes": {
       "asig": "Asamblea",
       "adultos": [
        "T3"
       ]
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Lectoescritura",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Darío",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Martes": {
       "asig": "Prerrequisitos de Lectoescritura",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Lucas",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Lectoescritura",
       "adultos": [
        "T3",
        "TO2"
       ]
      },
      "Jueves": {
       "asig": "Prerrequisitos de Lectoescritura",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "LuisL",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Lectoescritura",
       "adultos": [
        "T3",
        "T7"
       ]
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1",
        "T3"
       ]
      },
      "Martes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1"
       ],
       "salidas": [
        {
         "alumno": "LuisL",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Miércoles": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1",
        "T3"
       ]
      },
      "Jueves": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1",
        "T3"
       ]
      },
      "Viernes": {
       "asig": "Estimulación del Lenguaje",
       "adultos": [
        "L1",
        "T3"
       ]
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "asig": "Snack",
       "adultos": [
        "T3"
       ]
      },
      "Martes": {
       "asig": "Snack",
       "adultos": [
        "L1"
       ]
      },
      "Miércoles": {
       "asig": "Snack",
       "adultos": [
        "T3"
       ]
      },
      "Jueves": {
       "asig": "Snack",
       "adultos": [
        "L1"
       ],
       "salidas": [
        {
         "alumno": "Manuela",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Viernes": {
       "asig": "Snack",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Lucas",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "label": "Patio 11:00–11:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "LuisL",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Martes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Manuela",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T3",
        "TO2"
       ]
      },
      "Jueves": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Darío",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Aprendizaje",
       "adultos": [
        "T3",
        "I1"
       ]
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T3",
        "TO1"
       ]
      },
      "Martes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Manuela",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Miércoles": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T3",
        "TO1"
       ]
      },
      "Jueves": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Lucas",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Viernes": {
       "asig": "Prerrequisitos de Grafomotricidad",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Darío",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Lucas",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Martes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ]
      },
      "Miércoles": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Darío",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "LuisL",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Viernes": {
       "asig": "Psicomotricidad",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Manuela",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "label": "Comida 13:00–13:45",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "label": "Patio tarde 13:45–14:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Darío",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Martes": {
       "asig": "Inglés",
       "adultos": [
        "T4"
       ]
      },
      "Miércoles": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "LuisL",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Jueves": {
       "asig": "Inglés",
       "adultos": [
        "T4"
       ]
      },
      "Viernes": {
       "asig": "Conocimiento del Entorno",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Lucas",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "asig": "Inteligencia Emocional",
       "adultos": [
        "O1"
       ]
      },
      "Martes": {
       "asig": "Juego",
       "adultos": [
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Manuela",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T3"
       ]
      },
      "Jueves": {
       "asig": "Juego",
       "adultos": [
        "T3"
       ]
      },
      "Viernes": {
       "asig": "Música",
       "adultos": [
        "T3"
       ]
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "asig": "Autonomía",
       "adultos": [
        "T3",
        "TO1"
       ]
      },
      "Martes": {
       "asig": "Autonomía",
       "adultos": [
        "T3"
       ]
      },
      "Miércoles": {
       "asig": "Autonomía",
       "adultos": [
        "T3",
        "TO1"
       ]
      },
      "Jueves": {
       "asig": "Autonomía",
       "adultos": [
        "T3"
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "T3"
       ]
      }
     }
    }
   ]
  },
  "Este": {
   "tutor": "T5",
   "tutor_nombre": "Jesús",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "asig": "Asamblea",
       "adultos": [
        "T5"
       ]
      },
      "Martes": {
       "asig": "Asamblea",
       "adultos": [
        "T5"
       ]
      },
      "Miércoles": {
       "asig": "Asamblea",
       "adultos": [
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Asamblea",
       "adultos": [
        "T5"
       ]
      },
      "Viernes": {
       "asig": "Asamblea",
       "adultos": [
        "T5"
       ]
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "asig": "Lengua",
       "adultos": [
        "T5",
        "T7"
       ]
      },
      "Martes": {
       "asig": "Lengua",
       "adultos": [
        "T5",
        "T7"
       ]
      },
      "Miércoles": {
       "asig": "Lengua",
       "adultos": [
        "T5",
        "T7"
       ]
      },
      "Jueves": {
       "asig": "Lengua",
       "adultos": [
        "T5",
        "T7"
       ]
      },
      "Viernes": {
       "asig": "Matemáticas",
       "adultos": [
        "T5"
       ]
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "asig": "Lengua",
       "adultos": [
        "T5"
       ]
      },
      "Martes": {
       "asig": "Lengua",
       "adultos": [
        "T5"
       ]
      },
      "Miércoles": {
       "asig": "Lengua",
       "adultos": [
        "T5"
       ]
      },
      "Jueves": {
       "asig": "Lengua",
       "adultos": [
        "T5"
       ]
      },
      "Viernes": {
       "asig": "Matemáticas",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Martina",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "asig": "Escritura",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Manuel",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Martes": {
       "asig": "Escritura",
       "adultos": [
        "T5",
        "TO1"
       ],
       "salidas": [
        {
         "alumno": "CatalinaB",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Escritura",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Martina",
         "a": "TO1",
         "a_nombre": "Irene"
        },
        {
         "alumno": "Yago",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Jueves": {
       "asig": "Escritura",
       "adultos": [
        "T5",
        "TO1"
       ]
      },
      "Viernes": {
       "asig": "Escritura",
       "adultos": [
        "T5",
        "TO1"
       ]
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "label": "Patio 11:00–11:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "asig": "Educación Física",
       "adultos": [
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Matemáticas",
       "adultos": [
        "T5",
        "T1"
       ]
      },
      "Miércoles": {
       "asig": "Educación Física",
       "adultos": [
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Matemáticas",
       "adultos": [
        "T5",
        "T1"
       ],
       "salidas": [
        {
         "alumno": "Manuel",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Viernes": {
       "asig": "Educación Física",
       "adultos": [
        "EF1"
       ]
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "asig": "Matemáticas",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Marco",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Martes": {
       "asig": "Matemáticas",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Manuel",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        },
        {
         "alumno": "CatalinaB",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Miércoles": {
       "asig": "Matemáticas",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Martina",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Matemáticas",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Yago",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Viernes": {
       "asig": "Música",
       "adultos": [
        "T5"
       ]
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "asig": "Ciencias",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Yago",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Martes": {
       "asig": "Ciencias",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Martina",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Ciencias",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Manuel",
         "a": "L3",
         "a_nombre": "(por contratar)"
        },
        {
         "alumno": "Marco",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Jueves": {
       "asig": "Ciencias",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "CatalinaB",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Viernes": {
       "asig": "Ciencias",
       "adultos": [
        "T5"
       ]
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "label": "Comida 13:00–13:45",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "label": "Patio tarde 13:45–14:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Marco",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      },
      "Martes": {
       "asig": "Educación Física",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Marco",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ]
      },
      "Jueves": {
       "asig": "Educación Física",
       "adultos": [
        "EF1"
       ]
      },
      "Viernes": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "CatalinaB",
         "a": "TO1",
         "a_nombre": "Irene"
        }
       ]
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "asig": "Autonomía",
       "adultos": [
        "T5"
       ]
      },
      "Martes": {
       "asig": "Arte",
       "adultos": [
        "T5"
       ]
      },
      "Miércoles": {
       "asig": "Autonomía",
       "adultos": [
        "T5"
       ]
      },
      "Jueves": {
       "asig": "Inteligencia Emocional",
       "adultos": [
        "O1"
       ]
      },
      "Viernes": {
       "asig": "Autonomía",
       "adultos": [
        "T5"
       ]
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "asig": "Juego",
       "adultos": [
        "T5"
       ],
       "salidas": [
        {
         "alumno": "Yago",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Martes": {
       "asig": "Autonomía",
       "adultos": [
        "T5",
        "TO1"
       ]
      },
      "Miércoles": {
       "asig": "Juego",
       "adultos": [
        "T5"
       ]
      },
      "Jueves": {
       "asig": "Autonomía",
       "adultos": [
        "T5",
        "TO1"
       ]
      },
      "Viernes": {
       "asig": "Juego",
       "adultos": [
        "T5"
       ]
      }
     }
    }
   ]
  },
  "Oeste": {
   "tutor": "T6",
   "tutor_nombre": "Marta La.",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T7"
       ]
      },
      "Martes": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T6"
       ]
      },
      "Miércoles": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T7"
       ]
      },
      "Jueves": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T6"
       ]
      },
      "Viernes": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T6"
       ]
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "asig": "Lengua",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Noah",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Martes": {
       "asig": "Lengua",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Elvira",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Lengua",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Noah",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Jueves": {
       "asig": "Lengua",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Daniela",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Viernes": {
       "asig": "Lengua",
       "adultos": [
        "T6"
       ]
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "asig": "Lengua",
       "adultos": [
        "T6",
        "L2"
       ]
      },
      "Martes": {
       "asig": "Lengua",
       "adultos": [
        "T6",
        "L2"
       ]
      },
      "Miércoles": {
       "asig": "Lengua",
       "adultos": [
        "T6",
        "L2"
       ]
      },
      "Jueves": {
       "asig": "Lengua",
       "adultos": [
        "T6",
        "L2"
       ],
       "salidas": [
        {
         "alumno": "Micke",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Viernes": {
       "asig": "Escritura",
       "adultos": [
        "T6",
        "TO2"
       ]
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "asig": "Escritura",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Noah",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Martes": {
       "asig": "Escritura",
       "adultos": [
        "T6",
        "TO2"
       ]
      },
      "Miércoles": {
       "asig": "Escritura",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Emma",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Escritura",
       "adultos": [
        "T6",
        "TO2"
       ]
      },
      "Viernes": {
       "asig": "Música",
       "adultos": [
        "T6"
       ]
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "label": "Patio 11:00–11:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "asig": "Matemáticas",
       "adultos": [
        "T6"
       ]
      },
      "Martes": {
       "asig": "Matemáticas",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Emma",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Miércoles": {
       "asig": "Matemáticas",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Micke",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Matemáticas",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Daniel",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Viernes": {
       "asig": "Matemáticas",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Daniela",
         "a": "L2",
         "a_nombre": "Sheila"
        },
        {
         "alumno": "Daniel",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "asig": "Arte",
       "adultos": [
        "T6"
       ]
      },
      "Martes": {
       "asig": "Matemáticas",
       "adultos": [
        "T6",
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Daniela",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Miércoles": {
       "asig": "Matemáticas",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Daniel",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Matemáticas",
       "adultos": [
        "T6",
        "(EF1)"
       ],
       "salidas": [
        {
         "alumno": "Emma",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Viernes": {
       "asig": "Matemáticas",
       "adultos": [
        "T6",
        "T7"
       ]
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Elvira",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Martes": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Daniel",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Miércoles": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Micke",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Jueves": {
       "asig": "Inteligencia Emocional",
       "adultos": [
        "O2"
       ]
      },
      "Viernes": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Elvira",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "label": "Comida 13:00–13:45",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "label": "Patio tarde 13:45–14:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "asig": "Ciencias",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Emma",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Martes": {
       "asig": "Ciencias",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Elvira",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Miércoles": {
       "asig": "Ciencias",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Daniela",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Jueves": {
       "asig": "Ciencias",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Noah",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Viernes": {
       "asig": "Ciencias",
       "adultos": [
        "T6"
       ],
       "salidas": [
        {
         "alumno": "Micke",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Miércoles": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Actividades de la Vida Diaria",
       "adultos": [
        "TO2"
       ]
      },
      "Viernes": {
       "asig": "Educación Física (1h)",
       "adultos": [
        "EF1"
       ]
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Miércoles": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Actividades de la Vida Diaria",
       "adultos": [
        "TO2"
       ]
      },
      "Viernes": {
       "asig": "Educación Física (1h)",
       "adultos": [
        "EF1"
       ]
      }
     }
    }
   ]
  },
  "Sur": {
   "tutor": "T7",
   "tutor_nombre": "Raquel",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T7"
       ]
      },
      "Martes": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T6"
       ]
      },
      "Miércoles": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T7"
       ]
      },
      "Jueves": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T6"
       ]
      },
      "Viernes": {
       "asig": "Asamblea Conjunta",
       "adultos": [
        "T6"
       ]
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "asig": "Arrowsmith",
       "adultos": [
        "I1"
       ]
      },
      "Martes": {
       "asig": "Arrowsmith",
       "adultos": [
        "I1"
       ]
      },
      "Miércoles": {
       "asig": "Arrowsmith",
       "adultos": [
        "I1"
       ]
      },
      "Jueves": {
       "asig": "Arrowsmith",
       "adultos": [
        "I1"
       ]
      },
      "Viernes": {
       "asig": "Arrowsmith",
       "adultos": [
        "I1"
       ]
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "asig": "Lengua",
       "adultos": [
        "T7",
        "TO2"
       ]
      },
      "Martes": {
       "asig": "Lengua",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Silvana",
         "a": "L3",
         "a_nombre": "(por contratar)"
        },
        {
         "alumno": "Ángela",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Miércoles": {
       "asig": "Lengua",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Bosco",
         "a": "O2",
         "a_nombre": "Sara"
        },
        {
         "alumno": "Carmen M.",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Jueves": {
       "asig": "Lengua",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Ángela",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Viernes": {
       "asig": "Capacitación Digital",
       "adultos": [
        "I1"
       ]
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "asig": "Lengua",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Jacobo",
         "a": "O1",
         "a_nombre": "(por contratar)"
        },
        {
         "alumno": "Andrés",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Martes": {
       "asig": "Lengua",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Esther",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Lengua",
       "adultos": [
        "T7",
        "TO2"
       ]
      },
      "Jueves": {
       "asig": "Lengua",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Andrés",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Viernes": {
       "asig": "Capacitación Digital",
       "adultos": [
        "I1"
       ]
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "label": "Patio 11:00–11:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Bosco",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Martes": {
       "asig": "Inteligencia Emocional",
       "adultos": [
        "O1"
       ]
      },
      "Miércoles": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ]
      },
      "Jueves": {
       "asig": "Arte",
       "adultos": [
        "T7"
       ]
      },
      "Viernes": {
       "asig": "Lengua",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Silvana",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "asig": "Matemáticas",
       "adultos": [
        "T7"
       ]
      },
      "Martes": {
       "asig": "Matemáticas",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Jacobo",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Miércoles": {
       "asig": "Matemáticas",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Bosco",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Jueves": {
       "asig": "Matemáticas",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Esther",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Viernes": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Esther",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "asig": "Matemáticas",
       "adultos": [
        "T7",
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Carmen M.",
         "a": "L3",
         "a_nombre": "(por contratar)"
        }
       ]
      },
      "Martes": {
       "asig": "Matemáticas",
       "adultos": [
        "T7",
        "T3"
       ],
       "salidas": [
        {
         "alumno": "Ángela",
         "a": "L3",
         "a_nombre": "(por contratar)"
        },
        {
         "alumno": "Silvana",
         "a": "O2",
         "a_nombre": "Sara"
        }
       ]
      },
      "Miércoles": {
       "asig": "Matemáticas",
       "adultos": [
        "T7",
        "T3"
       ]
      },
      "Jueves": {
       "asig": "Inglés",
       "adultos": [
        "I1"
       ],
       "salidas": [
        {
         "alumno": "Andrés",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Viernes": {
       "asig": "Música",
       "adultos": [
        "T7"
       ]
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "label": "Comida 13:00–13:45",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "label": "Patio tarde 13:45–14:30",
       "tipo": "mediodia"
      },
      "Martes": {
       "label": "",
       "tipo": "mediodia"
      },
      "Miércoles": {
       "label": "",
       "tipo": "mediodia"
      },
      "Jueves": {
       "label": "",
       "tipo": "mediodia"
      },
      "Viernes": {
       "label": "",
       "tipo": "mediodia"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "asig": "Ciencias",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Andrés",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Martes": {
       "asig": "Ciencias",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Esther",
         "a": "L1",
         "a_nombre": "Luis"
        }
       ]
      },
      "Miércoles": {
       "asig": "Ciencias",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Silvana",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Jueves": {
       "asig": "Ciencias",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Jacobo",
         "a": "TO2",
         "a_nombre": "Aitana"
        },
        {
         "alumno": "Carmen M.",
         "a": "Ps3",
         "a_nombre": "Bárbara"
        }
       ]
      },
      "Viernes": {
       "asig": "Ciencias",
       "adultos": [
        "T7"
       ],
       "salidas": [
        {
         "alumno": "Ángela",
         "a": "O1",
         "a_nombre": "(por contratar)"
        }
       ]
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Miércoles": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Carmen M.",
         "a": "TO2",
         "a_nombre": "Aitana"
        }
       ]
      },
      "Jueves": {
       "asig": "Educación Física (1h)",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Bosco",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Viernes": {
       "asig": "Actividades de la Vida Diaria",
       "adultos": [
        "TO2",
        "T7"
       ]
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Martes": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Miércoles": {
       "asig": "Educación Física (conj.)",
       "adultos": [
        "EF1"
       ]
      },
      "Jueves": {
       "asig": "Educación Física (1h)",
       "adultos": [
        "EF1"
       ],
       "salidas": [
        {
         "alumno": "Jacobo",
         "a": "L2",
         "a_nombre": "Sheila"
        }
       ]
      },
      "Viernes": {
       "asig": "Actividades de la Vida Diaria",
       "adultos": [
        "TO2",
        "T7"
       ]
      }
     }
    }
   ]
  }
 },
 "tutoras": {
  "T1": {
   "nombre": "María C.",
   "aula": "Estrella",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "L · Asamblea Estrella",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Asamblea Estrella",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Asamblea Estrella",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "Coordinación",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Asamblea Estrella",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Cuentacuentos\n↗ Naomi→O2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Cuentacuentos\n↗ Lucía→O2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Grafomotricidad · TO1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas · T5 (Este)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Grafomotricidad\n↗ Inés→L1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Matemáticas · T5 (Este)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Grafomotricidad\n↗ Bernardo→L1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Aprendizaje · L3",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Inés→O2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Bernardo→L1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Inés→O2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Lucía→L1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Martes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Miércoles": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Jueves": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Viernes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego · EF1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Juego\n↗ Lucía→O2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego · EF1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego\n↗ Naomi→O2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego · EF1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "L · Conocimiento del Entorno\n↗ Inés→L1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Conocimiento del Entorno\n↗ Lucía→L1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Conocimiento del Entorno\n↗ Naomi→L1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "L · Autonomía · O1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Autonomía · O1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Autonomía · O1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Autonomía · O1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Música",
       "tipo": "lectivo"
      }
     }
    }
   ]
  },
  "T2": {
   "nombre": "Carol",
   "aula": "Sol",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "L · Asamblea Sol",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Asamblea Sol",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Asamblea Sol",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "Coordinación",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Asamblea Sol",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Aprendizaje · L3",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Eva→O1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Música",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Snack · L3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "Coordinación Equipo Directivo",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "Coordinación Equipo Directivo",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Conocimiento del Entorno",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Prerrequisitos de Grafomotricidad · TO2\n↗ Álvaro→L3",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Conocimiento del Entorno\n↗ Santiago→L3",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Prerrequisitos de Grafomotricidad · TO2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Grafomotricidad\n↗ Eva→O1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Gonzalo→O1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Álvaro→L3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Santiago→L3",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego · T6",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Martes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Miércoles": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Jueves": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Viernes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego · EF1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Juego\n↗ Gonzalo→TO2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego · EF1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego\n↗ Eva→L2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego · EF1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Cuentacuentos · T7",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Cuentacuentos · T7",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Conocimiento del Entorno\n↗ Gonzalo→L2",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "L · Autonomía · TO2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Autonomía · TO2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Autonomía · TO2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Autonomía",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    }
   ]
  },
  "T4": {
   "nombre": "Marta O.",
   "aula": "Norte",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "L · Asamblea Norte",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Asamblea Norte",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Asamblea Norte",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Asamblea Norte",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "Coordinación",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ CatalinaF→O1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Alejandra→Ps3",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Aprendizaje · TO2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Leonor→O1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Miguel→L2",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Snack · L2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Snack · L2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Snack · L2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Snack · L2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Snack",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Grafomotricidad\n↗ Leonor→O1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Grafomotricidad · TO1\n↗ Leonor→L2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Grafomotricidad · TO1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego\n↗ Alejandra→L2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Juego\n↗ Miguel→TO1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego\n↗ CatalinaF→TO1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego\n↗ Miguel→Ps3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego\n↗ Leonor→TO1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Martes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Miércoles": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Jueves": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Viernes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Autonomía · O1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Inglés (Luna)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Autonomía · O1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Inglés (Luna)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Música",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "L · Conocimiento del Entorno\n↗ Leonor→L2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Cuentacuentos · T6",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Conocimiento del Entorno\n↗ Miguel→L2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Cuentacuentos · T6",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Conocimiento del Entorno · TO1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego\n↗ CatalinaF→L2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego\n↗ Alejandra→L2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      }
     }
    }
   ]
  },
  "T3": {
   "nombre": "Silvia",
   "aula": "Luna",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "Coordinación",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Asamblea Luna",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Asamblea Luna",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Asamblea Luna",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Asamblea Luna",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Lectoescritura\n↗ Darío→O1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Prerrequisitos de Lectoescritura\n↗ Lucas→O1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Lectoescritura · TO2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Prerrequisitos de Lectoescritura\n↗ LuisL→TO1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Lectoescritura · T7",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Est.leng. (apoyo)",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Snack",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Snack",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Snack\n↗ Lucas→O1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ LuisL→L1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Manuela→TO1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Aprendizaje · TO2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Prerrequisitos de Aprendizaje\n↗ Darío→L1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Aprendizaje · I1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "L · Prerrequisitos de Grafomotricidad · TO1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Prerrequisitos de Grafomotricidad\n↗ Manuela→L1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Prerrequisitos de Grafomotricidad · TO1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Prerrequisitos de Grafomotricidad\n↗ Lucas→TO1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Prerrequisitos de Grafomotricidad\n↗ Darío→TO1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Matemáticas · T7 (Sur)",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas · T7 (Sur)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Matemáticas · T7 (Sur)",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Martes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Miércoles": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Jueves": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      },
      "Viernes": {
       "txt": "L · Comedor",
       "tipo": "comedor"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Conocimiento del Entorno\n↗ Darío→L1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Conocimiento del Entorno\n↗ LuisL→L1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Conocimiento del Entorno\n↗ Lucas→L1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Juego\n↗ Manuela→O1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Música",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "L · Autonomía · TO1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Autonomía",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Autonomía · TO1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Autonomía",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      }
     }
    }
   ]
  },
  "T5": {
   "nombre": "Jesús",
   "aula": "Este",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "L · Asamblea Este",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Asamblea Este",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "Coordinación",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Asamblea Este",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Asamblea Este",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "L · Lengua · T7",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Lengua · T7",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Lengua · T7",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Lengua · T7",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Matemáticas",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "L · Lengua",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Lengua",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Lengua",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Lengua",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Matemáticas\n↗ Martina→L3",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Escritura\n↗ Manuel→TO1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Escritura · TO1\n↗ CatalinaB→Ps3",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Escritura\n↗ Martina→TO1, Yago→L1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Escritura · TO1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Escritura · TO1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas · T1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Matemáticas · T1\n↗ Manuel→L3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "L · Matemáticas\n↗ Marco→L1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas\n↗ Manuel→Ps3, CatalinaB→L3",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Matemáticas\n↗ Martina→L3",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Matemáticas\n↗ Yago→Ps3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Música",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Ciencias\n↗ Yago→TO1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Ciencias\n↗ Martina→Ps3",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Ciencias\n↗ Manuel→L3, Marco→L1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Ciencias\n↗ CatalinaB→L3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Ciencias",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Viernes": {
       "txt": "L · Patio",
       "tipo": "patio"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "L · Autonomía",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Arte",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Autonomía",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Autonomía",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego\n↗ Yago→L1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Autonomía · TO1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Autonomía · TO1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego",
       "tipo": "lectivo"
      }
     }
    }
   ]
  },
  "T6": {
   "nombre": "Marta La.",
   "aula": "Oeste",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "L · Asamblea Luna",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Asamblea Sur",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "Coordinación",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Asamblea Oeste",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Asamblea Oeste",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "L · Lengua\n↗ Noah→TO2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Lengua\n↗ Elvira→O2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Lengua\n↗ Noah→O2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Lengua\n↗ Daniela→O2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Lengua",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "L · Lengua · L2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Lengua · L2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Lengua · L2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Lengua · L2\n↗ Micke→TO2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Escritura · TO2",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Escritura\n↗ Noah→L1",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Escritura · TO2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Escritura\n↗ Emma→O1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Escritura · TO2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Música",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Matemáticas",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas\n↗ Emma→L2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Matemáticas\n↗ Micke→O1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Matemáticas\n↗ Daniel→L2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Matemáticas\n↗ Daniela→L2, Daniel→TO2",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "L · Arte",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas · EF1\n↗ Daniela→TO2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Matemáticas\n↗ Daniel→O1",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Matemáticas · EF1\n↗ Emma→L2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Matemáticas · T7",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Juego (Est+Sol)",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Juego (Est+Sol)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Juego (Est+Sol)",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Juego (Est+Sol)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Juego (Est+Sol)",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Viernes": {
       "txt": "L · Patio",
       "tipo": "patio"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Ciencias\n↗ Emma→TO2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Ciencias\n↗ Elvira→L2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Ciencias\n↗ Daniela→L2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Ciencias\n↗ Noah→L1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Ciencias\n↗ Micke→L2",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Cuentacuentos · T4 (Norte)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Cuentacuentos · T4 (Norte)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    }
   ]
  },
  "T7": {
   "nombre": "Raquel",
   "aula": "Sur",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "L · Asamblea Sur",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "Coordinación",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Asamblea Oeste",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Asamblea Sol",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Asamblea Norte",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "L · Lengua · T5 (Este)",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Lengua · T5 (Este)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Lengua · T5 (Este)",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Lengua · T5 (Este)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Lengua · T3 (Luna)",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "L · Lengua · TO2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Lengua\n↗ Silvana→L3, Ángela→TO2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Lengua\n↗ Bosco→O2, Carmen M.→L3",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Lengua\n↗ Ángela→L3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Lengua\n↗ Jacobo→O1, Andrés→TO2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Lengua\n↗ Esther→O2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Lengua · TO2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Lengua\n↗ Andrés→O2",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Snack · L3 (Sol)",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Arte",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Lengua\n↗ Silvana→L3",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "L · Matemáticas",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas\n↗ Jacobo→L2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Matemáticas\n↗ Bosco→TO2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Matemáticas\n↗ Esther→L1",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Matemáticas · T6 (Oeste)",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Matemáticas · T3\n↗ Carmen M.→L3",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Matemáticas · T3\n↗ Ángela→L3, Silvana→O2",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Matemáticas · T3",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Música",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Viernes": {
       "txt": "L · Patio",
       "tipo": "patio"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Ciencias\n↗ Andrés→L2",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Ciencias\n↗ Esther→L1",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Ciencias\n↗ Silvana→TO2",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Ciencias\n↗ Jacobo→TO2, Carmen M.→Ps3",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Ciencias\n↗ Ángela→O1",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Cuentacuentos · T2 (Sol)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Cuentacuentos · T2 (Sol)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Actividades de la Vida Diaria · TO2",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "L · Actividades de la Vida Diaria · TO2",
       "tipo": "lectivo"
      }
     }
    }
   ]
  }
 },
 "especialistas": {
  "EF1": {
   "nombre": "Fernando",
   "rol": "Ed. Física",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "L · Asamblea Este",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Asamblea Estrella",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "L · Estrella: Psicomotricidad · TO1",
       "tipo": "lectivo",
       "aula": "Estrella"
      },
      "Martes": {
       "txt": "L · Sol: Psicomotricidad · TO1",
       "tipo": "lectivo",
       "aula": "Sol"
      },
      "Miércoles": {
       "txt": "L · Estrella: Psicomotricidad · TO1",
       "tipo": "lectivo",
       "aula": "Estrella"
      },
      "Jueves": {
       "txt": "L · Sol: Psicomotricidad · TO1",
       "tipo": "lectivo",
       "aula": "Sol"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Viernes": {
       "txt": "L · Patio",
       "tipo": "patio"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Este: Educación Física",
       "tipo": "lectivo",
       "aula": "Este"
      },
      "Martes": {
       "txt": "L · Norte: Psicomotricidad\n↗ Miguel→Ps3",
       "tipo": "lectivo",
       "aula": "Norte"
      },
      "Miércoles": {
       "txt": "L · Este: Educación Física",
       "tipo": "lectivo",
       "aula": "Este"
      },
      "Jueves": {
       "txt": "L · Norte: Psicomotricidad\n↗ Alejandra→Ps3",
       "tipo": "lectivo",
       "aula": "Norte"
      },
      "Viernes": {
       "txt": "L · Este: Educación Física",
       "tipo": "lectivo",
       "aula": "Este"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "L · Norte: Psicomotricidad",
       "tipo": "lectivo",
       "aula": "Norte"
      },
      "Martes": {
       "txt": "L · Oeste: Matemáticas · T6\n↗ Daniela→TO2",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Miércoles": {
       "txt": "L · Norte: Psicomotricidad",
       "tipo": "lectivo",
       "aula": "Norte"
      },
      "Jueves": {
       "txt": "L · Oeste: Matemáticas · T6\n↗ Emma→L2",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Viernes": {
       "txt": "L · Norte: Psicomotricidad\n↗ CatalinaF→L2",
       "tipo": "lectivo",
       "aula": "Norte"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Luna: Psicomotricidad\n↗ Lucas→L1",
       "tipo": "lectivo",
       "aula": "Luna"
      },
      "Martes": {
       "txt": "L · Luna: Psicomotricidad",
       "tipo": "lectivo",
       "aula": "Luna"
      },
      "Miércoles": {
       "txt": "L · Luna: Psicomotricidad\n↗ Darío→O1",
       "tipo": "lectivo",
       "aula": "Luna"
      },
      "Jueves": {
       "txt": "L · Luna: Psicomotricidad\n↗ LuisL→O1",
       "tipo": "lectivo",
       "aula": "Luna"
      },
      "Viernes": {
       "txt": "L · Luna: Psicomotricidad\n↗ Manuela→L1",
       "tipo": "lectivo",
       "aula": "Luna"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Viernes": {
       "txt": "L · Patio",
       "tipo": "patio"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Estrella: Juego · T1",
       "tipo": "lectivo",
       "aula": "Estrella"
      },
      "Martes": {
       "txt": "L · Este: Educación Física\n↗ Marco→Ps3",
       "tipo": "lectivo",
       "aula": "Este"
      },
      "Miércoles": {
       "txt": "L · Estrella: Juego · T1",
       "tipo": "lectivo",
       "aula": "Estrella"
      },
      "Jueves": {
       "txt": "L · Este: Educación Física",
       "tipo": "lectivo",
       "aula": "Este"
      },
      "Viernes": {
       "txt": "L · Estrella: Juego · T1",
       "tipo": "lectivo",
       "aula": "Estrella"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "L · Oeste: Educación Física (conj.)",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Martes": {
       "txt": "L · Oeste: Educación Física (conj.)",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Miércoles": {
       "txt": "L · Oeste: Educación Física (conj.)",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Jueves": {
       "txt": "L · Sur: Educación Física (1h)\n↗ Bosco→L2",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Viernes": {
       "txt": "L · Oeste: Educación Física (1h)",
       "tipo": "lectivo",
       "aula": "Oeste"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "L · Oeste: Educación Física (conj.)",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Martes": {
       "txt": "L · Oeste: Educación Física (conj.)",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Miércoles": {
       "txt": "L · Oeste: Educación Física (conj.)",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Jueves": {
       "txt": "L · Sur: Educación Física (1h)\n↗ Jacobo→L2",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Viernes": {
       "txt": "L · Oeste: Educación Física (1h)",
       "tipo": "lectivo",
       "aula": "Oeste"
      }
     }
    }
   ]
  },
  "I1": {
   "nombre": "Benjie",
   "rol": "Inglés + Arrowsmith/TICs",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "Gestión Organizativa",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Gestión Organizativa",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Gestión Organizativa",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Gestión Organizativa",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "Gestión Organizativa",
       "tipo": "otro"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "L · Sur: Arrowsmith",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Martes": {
       "txt": "L · Sur: Arrowsmith",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Miércoles": {
       "txt": "L · Sur: Arrowsmith",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Jueves": {
       "txt": "L · Sur: Arrowsmith",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Viernes": {
       "txt": "L · Sur: Arrowsmith",
       "tipo": "lectivo",
       "aula": "Sur"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "L · Sur: Capacitación Digital",
       "tipo": "lectivo",
       "aula": "Sur"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "L · Sur: Capacitación Digital",
       "tipo": "lectivo",
       "aula": "Sur"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "Programación TICS",
       "tipo": "otro"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Sur: Inglés\n↗ Bosco→L2",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Martes": {
       "txt": "Programación clases",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "L · Sur: Inglés",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Jueves": {
       "txt": "Programación clases",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "Programación TICS",
       "tipo": "otro"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Programación clases",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Programación clases",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "L · Sur: Inglés\n↗ Esther→TO2",
       "tipo": "lectivo",
       "aula": "Sur"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "L · Oeste: Inglés\n↗ Elvira→TO2",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Martes": {
       "txt": "L · Oeste: Inglés\n↗ Daniel→L2",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Miércoles": {
       "txt": "L · Oeste: Inglés\n↗ Micke→L2",
       "tipo": "lectivo",
       "aula": "Oeste"
      },
      "Jueves": {
       "txt": "L · Sur: Inglés\n↗ Andrés→L2",
       "tipo": "lectivo",
       "aula": "Sur"
      },
      "Viernes": {
       "txt": "L · Oeste: Inglés\n↗ Elvira→L2",
       "tipo": "lectivo",
       "aula": "Oeste"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "Proyecto Inglés",
       "tipo": "otro"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Martes": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Miércoles": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Jueves": {
       "txt": "Comida",
       "tipo": "comida"
      },
      "Viernes": {
       "txt": "Comida",
       "tipo": "comida"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "L · Este: Inglés\n↗ Marco→TO1",
       "tipo": "lectivo",
       "aula": "Este"
      },
      "Martes": {
       "txt": "Proyecto Digitalización Escolar",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "L · Este: Inglés",
       "tipo": "lectivo",
       "aula": "Este"
      },
      "Jueves": {
       "txt": "Proyecto Capacitación Digital",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "L · Este: Inglés\n↗ CatalinaB→TO1",
       "tipo": "lectivo",
       "aula": "Este"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "Proyecto Digitalización Escolar",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Proyecto Digitalización Escolar",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Proyecto Capacitación Digital",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Proyecto Capacitación Digital",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "L · Inglés rotativo",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "Proyecto Digitalización Escolar",
       "tipo": "otro"
      },
      "Martes": {
       "txt": "Proyecto Digitalización Escolar",
       "tipo": "otro"
      },
      "Miércoles": {
       "txt": "Proyecto Capacitación Digital",
       "tipo": "otro"
      },
      "Jueves": {
       "txt": "Proyecto Capacitación Digital",
       "tipo": "otro"
      },
      "Viernes": {
       "txt": "L · Inglés rotativo",
       "tipo": "lectivo"
      }
     }
    }
   ]
  },
  "I2": {
   "nombre": "(por contratar)",
   "rol": "Inglés",
   "filas": [
    {
     "franja": "F0",
     "hora": "9:00",
     "dias": {
      "Lunes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Martes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Miércoles": {
       "txt": "",
       "tipo": "fuera"
      },
      "Jueves": {
       "txt": "",
       "tipo": "fuera"
      },
      "Viernes": {
       "txt": "",
       "tipo": "fuera"
      }
     }
    },
    {
     "franja": "F1",
     "hora": "9:30",
     "dias": {
      "Lunes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Martes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Miércoles": {
       "txt": "",
       "tipo": "fuera"
      },
      "Jueves": {
       "txt": "",
       "tipo": "fuera"
      },
      "Viernes": {
       "txt": "",
       "tipo": "fuera"
      }
     }
    },
    {
     "franja": "F2",
     "hora": "10:00",
     "dias": {
      "Lunes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Martes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Miércoles": {
       "txt": "",
       "tipo": "fuera"
      },
      "Jueves": {
       "txt": "",
       "tipo": "fuera"
      },
      "Viernes": {
       "txt": "",
       "tipo": "fuera"
      }
     }
    },
    {
     "franja": "F3",
     "hora": "10:30",
     "dias": {
      "Lunes": {
       "txt": "L · Disponible (por asignar)",
       "tipo": "lectivo"
      },
      "Martes": {
       "txt": "L · Disponible (por asignar)",
       "tipo": "lectivo"
      },
      "Miércoles": {
       "txt": "L · Disponible (por asignar)",
       "tipo": "lectivo"
      },
      "Jueves": {
       "txt": "L · Disponible (por asignar)",
       "tipo": "lectivo"
      },
      "Viernes": {
       "txt": "L · Disponible (por asignar)",
       "tipo": "lectivo"
      }
     }
    },
    {
     "franja": "Patio",
     "hora": "11:00–11:30",
     "dias": {
      "Lunes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Martes": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Miércoles": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Jueves": {
       "txt": "L · Patio",
       "tipo": "patio"
      },
      "Viernes": {
       "txt": "L · Patio",
       "tipo": "patio"
      }
     }
    },
    {
     "franja": "F4",
     "hora": "11:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "L · Estrella: Inglés\n↗ Naomi→L1",
       "tipo": "lectivo",
       "aula": "Estrella"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "L · Estrella: Inglés\n↗ Bernardo→O2, Inés→TO1",
       "tipo": "lectivo",
       "aula": "Estrella"
      },
      "Viernes": {
       "txt": "L · Luna: Prerrequisitos de Aprendizaje · T3",
       "tipo": "lectivo",
       "aula": "Luna"
      }
     }
    },
    {
     "franja": "F5",
     "hora": "12:00",
     "dias": {
      "Lunes": {
       "txt": "L · Sol: Inglés\n↗ Eva→L2, Álvaro→O1, Santiago→TO2",
       "tipo": "lectivo",
       "aula": "Sol"
      },
      "Martes": {
       "txt": "L · Norte: Inglés",
       "tipo": "lectivo",
       "aula": "Norte"
      },
      "Miércoles": {
       "txt": "L · Sol: Inglés\n↗ Gonzalo→L2",
       "tipo": "lectivo",
       "aula": "Sol"
      },
      "Jueves": {
       "txt": "L · Norte: Inglés",
       "tipo": "lectivo",
       "aula": "Norte"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "F6",
     "hora": "12:30",
     "dias": {
      "Lunes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Martes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Miércoles": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Jueves": {
       "txt": "NL",
       "tipo": "no_lectivo"
      },
      "Viernes": {
       "txt": "NL",
       "tipo": "no_lectivo"
      }
     }
    },
    {
     "franja": "Comida",
     "hora": "13:00–13:45",
     "dias": {
      "Lunes": {
       "txt": "L · Comedor EBO/Luna",
       "tipo": "comedor"
      },
      "Martes": {
       "txt": "L · Comedor EBO/Luna",
       "tipo": "comedor"
      },
      "Miércoles": {
       "txt": "L · Comedor EBO/Luna",
       "tipo": "comedor"
      },
      "Jueves": {
       "txt": "L · Comedor EBO/Luna",
       "tipo": "comedor"
      },
      "Viernes": {
       "txt": "L · Comedor EBO/Luna",
       "tipo": "comedor"
      }
     }
    },
    {
     "franja": "Patio tarde",
     "hora": "13:45–14:30",
     "dias": {
      "Lunes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Martes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Miércoles": {
       "txt": "",
       "tipo": "fuera"
      },
      "Jueves": {
       "txt": "",
       "tipo": "fuera"
      },
      "Viernes": {
       "txt": "",
       "tipo": "fuera"
      }
     }
    },
    {
     "franja": "F7",
     "hora": "14:30",
     "dias": {
      "Lunes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Martes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Miércoles": {
       "txt": "",
       "tipo": "fuera"
      },
      "Jueves": {
       "txt": "",
       "tipo": "fuera"
      },
      "Viernes": {
       "txt": "",
       "tipo": "fuera"
      }
     }
    },
    {
     "franja": "F8",
     "hora": "15:00",
     "dias": {
      "Lunes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Martes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Miércoles": {
       "txt": "",
       "tipo": "fuera"
      },
      "Jueves": {
       "txt": "",
       "tipo": "fuera"
      },
      "Viernes": {
       "txt": "",
       "tipo": "fuera"
      }
     }
    },
    {
     "franja": "F9",
     "hora": "15:30",
     "dias": {
      "Lunes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Martes": {
       "txt": "",
       "tipo": "fuera"
      },
      "Miércoles": {
       "txt": "",
       "tipo": "fuera"
      },
      "Jueves": {
       "txt": "",
       "tipo": "fuera"
      },
      "Viernes": {
       "txt": "",
       "tipo": "fuera"
      }
     }
    }
   ]
  }
 },
 "terapeutas": {
  "psicologas": {
   "O1": {
    "nombre": "(por contratar)",
    "rol": "Orientadora (psicóloga)",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "Coord. Luna",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. Sur",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Coord. Oeste",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "Coord. Sol",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "Coord. Norte",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: Darío",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "L · Luna: Lucas",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Miércoles": {
        "txt": "L · Norte: CatalinaF",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Sol: Santiago",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Viernes": {
        "txt": "L · Sol: Gonzalo",
        "tipo": "lectivo",
        "aula": "Sol"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: CatalinaF",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "L · Luna: LuisL",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Miércoles": {
        "txt": "L · Sol: Eva",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Jueves": {
        "txt": "L · Norte: Leonor",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "L · Sur: Jacobo",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Oeste: Emma",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Jueves": {
        "txt": "L · Luna: Manuela",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Viernes": {
        "txt": "L · Luna: Lucas",
        "tipo": "lectivo",
        "aula": "Luna"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Viernes": {
        "txt": "L · Patio",
        "tipo": "patio"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: Leonor",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "L · Sur: Inteligencia Emocional",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "L · Oeste: Micke",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Sol: Eva",
        "tipo": "lectivo",
        "aula": "Sol"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "L · Sol: Álvaro",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Martes": {
        "txt": "L · Sol: Gonzalo",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Oeste: Daniel",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "L · Sol: Santiago",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Luna: Darío",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Jueves": {
        "txt": "L · Luna: LuisL",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Martes": {
        "txt": "Coord. psicopedag.",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Jueves": {
        "txt": "L · Comedor Estrella",
        "tipo": "comedor"
       },
       "Viernes": {
        "txt": "Comida",
        "tipo": "comida"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Martes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Miércoles": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Jueves": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Viernes": {
        "txt": "L · Patio",
        "tipo": "patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: Autonomía · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "L · Norte: Autonomía · TO1",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "L · Norte: Autonomía · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Norte: Autonomía · TO1",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Viernes": {
        "txt": "L · Sur: Ángela",
        "tipo": "lectivo",
        "aula": "Sur"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: Inteligencia Emocional",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "L · Luna: Manuela",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Miércoles": {
        "txt": "L · Sol: Álvaro",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Jueves": {
        "txt": "L · Este: Inteligencia Emocional",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Autonomía · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "L · Estrella: Autonomía · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "L · Estrella: Autonomía · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "L · Estrella: Autonomía · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     }
    ]
   },
   "O2": {
    "nombre": "Sara",
    "rol": "Psicóloga",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "Coord. Sur",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Coord. Oeste",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "Coord. Estrella",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Oeste: Elvira",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Miércoles": {
        "txt": "L · Oeste: Noah",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Jueves": {
        "txt": "L · Oeste: Daniela",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Estrella: Naomi",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "L · Sur: Bosco",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Jueves": {
        "txt": "L · Estrella: Lucía",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Sur: Esther",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Sur: Andrés",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Estrella: Bernardo",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Estrella: Inés",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Estrella: Inés",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Sur: Silvana",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Oeste: Inteligencia Emocional",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "Coord. psicopedag.",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Estrella: Lucía",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Estrella: Naomi",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Estrella: Bernardo",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     }
    ]
   },
   "Ps3": {
    "nombre": "Bárbara",
    "rol": "Psicóloga",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Norte: Alejandra",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Este: CatalinaB",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Norte: Miguel",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Norte: Alejandra",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Este: Manuel",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Este: Yago",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Este: Martina",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Norte: Miguel",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "Coord. psicopedag.",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "L · Este: Marco",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "L · Sur: Carmen M.",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     }
    ]
   }
  },
  "logopedas": {
   "L1": {
    "nombre": "Luis",
    "rol": "Logopeda",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "Coord. Luna",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. Sur",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Coord. Este/Oeste",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "Coord. Estrella",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Estimulación del Lenguaje\n↗ Bernardo→TO1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "L · Estrella: Estimulación del Lenguaje · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "L · Estrella: Estimulación del Lenguaje\n↗ Naomi→TO1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "L · Estrella: Estimulación del Lenguaje · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "L · Estrella: Estimulación del Lenguaje\n↗ Lucía→TO1",
        "tipo": "lectivo",
        "aula": "Estrella"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: Estimulación del Lenguaje · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "L · Luna: Estimulación del Lenguaje\n↗ LuisL→O1",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Miércoles": {
        "txt": "L · Luna: Estimulación del Lenguaje · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Jueves": {
        "txt": "L · Luna: Estimulación del Lenguaje · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Viernes": {
        "txt": "L · Luna: Estimulación del Lenguaje · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "L · Oeste: Noah",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Martes": {
        "txt": "L · Luna: Snack",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Miércoles": {
        "txt": "L · Este: Yago",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Jueves": {
        "txt": "L · Luna: Snack\n↗ Manuela→O1",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Viernes": {
        "txt": "Coordinación Equipo Directivo",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "Coordinación Equipo Directivo",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: LuisL",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "L · Estrella: Naomi",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "L · Estrella: Inés",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "L · Luna: Darío",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Viernes": {
        "txt": "L · Estrella: Bernardo",
        "tipo": "lectivo",
        "aula": "Estrella"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "L · Este: Marco",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Martes": {
        "txt": "L · Luna: Manuela",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Miércoles": {
        "txt": "L · Estrella: Bernardo",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "L · Sur: Esther",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "L · Estrella: Lucía",
        "tipo": "lectivo",
        "aula": "Estrella"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: Lucas",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Este: Marco",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Luna: Manuela",
        "tipo": "lectivo",
        "aula": "Luna"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "L · Comedor EBO/Luna",
        "tipo": "comedor"
       },
       "Martes": {
        "txt": "L · Comedor EBO/Luna",
        "tipo": "comedor"
       },
       "Miércoles": {
        "txt": "L · Comedor EBO/Luna",
        "tipo": "comedor"
       },
       "Jueves": {
        "txt": "L · Comedor EBO/Luna",
        "tipo": "comedor"
       },
       "Viernes": {
        "txt": "L · Comedor EBO/Luna",
        "tipo": "comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Martes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Miércoles": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Jueves": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Viernes": {
        "txt": "Comida",
        "tipo": "comida"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: Darío",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "L · Sur: Esther",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "L · Luna: LuisL",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Jueves": {
        "txt": "L · Oeste: Noah",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "L · Luna: Lucas",
        "tipo": "lectivo",
        "aula": "Luna"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Inés",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Estrella: Lucía",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Estrella: Naomi",
        "tipo": "lectivo",
        "aula": "Estrella"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "L · Este: Yago",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     }
    ]
   },
   "L2": {
    "nombre": "Sheila",
    "rol": "Logopeda",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. Sur",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Coord. Oeste",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "Coord. Sol",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "Coord. Norte",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: Estimulación del Lenguaje · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "L · Norte: Estimulación del Lenguaje\n↗ Alejandra→TO1",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "L · Norte: Estimulación del Lenguaje\n↗ CatalinaF→O1",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Norte: Estimulación del Lenguaje · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Viernes": {
        "txt": "L · Norte: Estimulación del Lenguaje · TO2",
        "tipo": "lectivo",
        "aula": "Norte"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "L · Oeste: Lengua · T6",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Martes": {
        "txt": "L · Oeste: Lengua · T6",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Miércoles": {
        "txt": "L · Oeste: Lengua · T6",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Jueves": {
        "txt": "L · Oeste: Lengua · T6\n↗ Micke→TO2",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "L · Norte: Miguel",
        "tipo": "lectivo",
        "aula": "Norte"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: Snack · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "L · Norte: Snack · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "L · Norte: Snack · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Norte: Snack · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "L · Sur: Bosco",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Martes": {
        "txt": "L · Oeste: Emma",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Miércoles": {
        "txt": "L · Norte: Leonor",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Oeste: Daniel",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "L · Oeste: Daniela",
        "tipo": "lectivo",
        "aula": "Oeste"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "L · Sol: Eva",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Martes": {
        "txt": "L · Sur: Jacobo",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "L · Sol: Gonzalo",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Jueves": {
        "txt": "L · Oeste: Emma",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "L · Norte: CatalinaF",
        "tipo": "lectivo",
        "aula": "Norte"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: Alejandra",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "L · Oeste: Daniel",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Miércoles": {
        "txt": "L · Oeste: Micke",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Jueves": {
        "txt": "L · Sur: Andrés",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "L · Oeste: Elvira",
        "tipo": "lectivo",
        "aula": "Oeste"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "L · Comedor Norte",
        "tipo": "comedor"
       },
       "Martes": {
        "txt": "L · Comedor Norte",
        "tipo": "comedor"
       },
       "Miércoles": {
        "txt": "L · Comedor Norte",
        "tipo": "comedor"
       },
       "Jueves": {
        "txt": "L · Comedor Norte",
        "tipo": "comedor"
       },
       "Viernes": {
        "txt": "L · Comedor Norte",
        "tipo": "comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Martes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Miércoles": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Jueves": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Viernes": {
        "txt": "Comida",
        "tipo": "comida"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "L · Sur: Andrés",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Martes": {
        "txt": "L · Oeste: Elvira",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Miércoles": {
        "txt": "L · Oeste: Daniela",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Jueves": {
        "txt": "L · Sol: Eva",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Viernes": {
        "txt": "L · Oeste: Micke",
        "tipo": "lectivo",
        "aula": "Oeste"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: Leonor",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Norte: Miguel",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Sur: Bosco",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "L · Sol: Gonzalo",
        "tipo": "lectivo",
        "aula": "Sol"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "L · Norte: CatalinaF",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Norte: Alejandra",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Sur: Jacobo",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     }
    ]
   },
   "L3": {
    "nombre": "(por contratar)",
    "rol": "Logopeda",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. Sur",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Coord. Este",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "Coord. Sol",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "L · Sol: Estimulación del Lenguaje · T2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Martes": {
        "txt": "L · Sol: Estimulación del Lenguaje\n↗ Álvaro→TO2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Sol: Estimulación del Lenguaje · T2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Jueves": {
        "txt": "L · Sol: Estimulación del Lenguaje\n↗ Santiago→O1, Eva→TO2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Viernes": {
        "txt": "L · Sol: Estimulación del Lenguaje\n↗ Gonzalo→O1",
        "tipo": "lectivo",
        "aula": "Sol"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "L · Sol: Prerrequisitos de Aprendizaje · T2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Martes": {
        "txt": "L · Sur: Silvana",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "L · Sur: Carmen M.",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Jueves": {
        "txt": "L · Sur: Ángela",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "L · Este: Martina",
        "tipo": "lectivo",
        "aula": "Este"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Snack · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "L · Estrella: Snack · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "L · Estrella: Snack · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "L · Estrella: Snack · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "L · Estrella: Snack · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Patio",
        "tipo": "patio"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "L · Sol: Álvaro",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Sol: Santiago",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Jueves": {
        "txt": "L · Este: Manuel",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Viernes": {
        "txt": "L · Sur: Silvana",
        "tipo": "lectivo",
        "aula": "Sur"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Prerrequisitos de Aprendizaje · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "L · Este: CatalinaB",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Miércoles": {
        "txt": "L · Este: Martina",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Jueves": {
        "txt": "L · Sol: Álvaro",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Viernes": {
        "txt": "L · Sol: Santiago",
        "tipo": "lectivo",
        "aula": "Sol"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "L · Sur: Carmen M.",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Martes": {
        "txt": "L · Sur: Ángela",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "L · Este: Manuel",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Jueves": {
        "txt": "L · Este: CatalinaB",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Martes": {
        "txt": "",
        "tipo": "fuera"
       },
       "Miércoles": {
        "txt": "",
        "tipo": "fuera"
       },
       "Jueves": {
        "txt": "",
        "tipo": "fuera"
       },
       "Viernes": {
        "txt": "",
        "tipo": "fuera"
       }
      }
     }
    ]
   }
  },
  "ocupacionales": {
   "TO1": {
    "nombre": "Irene",
    "rol": "T. Ocupacional",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "Coord. Luna",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Coord. Este",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "Coord. Estrella",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "Coord. Norte",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Bernardo",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "L · Norte: Alejandra",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "L · Estrella: Naomi",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "L · Luna: LuisL",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Viernes": {
        "txt": "L · Estrella: Lucía",
        "tipo": "lectivo",
        "aula": "Estrella"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Psicomotricidad · EF1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "L · Sol: Psicomotricidad · EF1",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Estrella: Psicomotricidad · EF1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Jueves": {
        "txt": "L · Sol: Psicomotricidad · EF1",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Viernes": {
        "txt": "L · Estrella: Psicomotricidad",
        "tipo": "lectivo",
        "aula": "Estrella"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "L · Este: Manuel",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Martes": {
        "txt": "L · Este: Escritura · T5\n↗ CatalinaB→Ps3",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Miércoles": {
        "txt": "L · Este: Martina",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Jueves": {
        "txt": "L · Este: Escritura · T5",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Viernes": {
        "txt": "L · Este: Escritura · T5",
        "tipo": "lectivo",
        "aula": "Este"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "L · Estrella: Prerrequisitos de Grafomotricidad · T1",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Martes": {
        "txt": "L · Luna: Manuela",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Miércoles": {
        "txt": "L · Norte: Prerrequisitos de Grafomotricidad · T4\n↗ Leonor→L2",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Estrella: Inés",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "L · Norte: Prerrequisitos de Grafomotricidad · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: Prerrequisitos de Grafomotricidad · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Luna: Prerrequisitos de Grafomotricidad · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Jueves": {
        "txt": "L · Luna: Lucas",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Viernes": {
        "txt": "L · Luna: Darío",
        "tipo": "lectivo",
        "aula": "Luna"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "L · Este: Yago",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Martes": {
        "txt": "L · Norte: Miguel",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "L · Norte: CatalinaF",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Norte: Leonor",
        "tipo": "lectivo",
        "aula": "Norte"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "L · Comedor Estrella",
        "tipo": "comedor"
       },
       "Martes": {
        "txt": "L · Comedor Estrella",
        "tipo": "comedor"
       },
       "Miércoles": {
        "txt": "L · Comedor Estrella",
        "tipo": "comedor"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Comedor Estrella",
        "tipo": "comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Martes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Miércoles": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Jueves": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Viernes": {
        "txt": "Comida",
        "tipo": "comida"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "L · Este: Marco",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Martes": {
        "txt": "L · Norte: Autonomía · O1",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "L · Norte: Autonomía · O1",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Viernes": {
        "txt": "L · Este: CatalinaB",
        "tipo": "lectivo",
        "aula": "Este"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "L · Sol: Psicomotricidad",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Martes": {
        "txt": "L · Estrella: Psicomotricidad\n↗ Bernardo→O2",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Miércoles": {
        "txt": "L · Sol: Psicomotricidad\n↗ Álvaro→O1",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Jueves": {
        "txt": "L · Estrella: Psicomotricidad",
        "tipo": "lectivo",
        "aula": "Estrella"
       },
       "Viernes": {
        "txt": "L · Norte: Conocimiento del Entorno · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "L · Luna: Autonomía · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Martes": {
        "txt": "L · Este: Autonomía · T5",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Miércoles": {
        "txt": "L · Luna: Autonomía · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Jueves": {
        "txt": "L · Este: Autonomía · T5",
        "tipo": "lectivo",
        "aula": "Este"
       },
       "Viernes": {
        "txt": "L · Sol: Psicomotricidad",
        "tipo": "lectivo",
        "aula": "Sol"
       }
      }
     }
    ]
   },
   "TO2": {
    "nombre": "Aitana",
    "rol": "T. Ocupacional",
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "Coord. Sur",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "Coord. Oeste",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "Coord. Sol",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "txt": "L · Oeste: Noah",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Martes": {
        "txt": "L · Sol: Álvaro",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Luna: Prerrequisitos de Lectoescritura · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Jueves": {
        "txt": "L · Sol: Eva",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Viernes": {
        "txt": "L · Norte: Estimulación del Lenguaje · L2",
        "tipo": "lectivo",
        "aula": "Norte"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "txt": "L · Sur: Lengua · T7",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Martes": {
        "txt": "L · Sur: Ángela",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Miércoles": {
        "txt": "L · Norte: Prerrequisitos de Aprendizaje · T4",
        "tipo": "lectivo",
        "aula": "Norte"
       },
       "Jueves": {
        "txt": "L · Oeste: Micke",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "L · Oeste: Escritura · T6",
        "tipo": "lectivo",
        "aula": "Oeste"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "txt": "L · Sur: Andrés",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Martes": {
        "txt": "L · Oeste: Escritura · T6",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Miércoles": {
        "txt": "L · Sur: Lengua · T7",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Jueves": {
        "txt": "L · Oeste: Escritura · T6",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Martes": {
        "txt": "Coord. terapéutica",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Jueves": {
        "txt": "L · Patio",
        "tipo": "patio"
       },
       "Viernes": {
        "txt": "L · Patio",
        "tipo": "patio"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "L · Sol: Prerrequisitos de Grafomotricidad · T2\n↗ Álvaro→L3",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Luna: Prerrequisitos de Aprendizaje · T3",
        "tipo": "lectivo",
        "aula": "Luna"
       },
       "Jueves": {
        "txt": "L · Sol: Prerrequisitos de Grafomotricidad · T2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Viernes": {
        "txt": "L · Oeste: Daniel",
        "tipo": "lectivo",
        "aula": "Oeste"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "txt": "L · Sol: Santiago",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Martes": {
        "txt": "L · Oeste: Daniela",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Miércoles": {
        "txt": "L · Sur: Bosco",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Sur: Esther",
        "tipo": "lectivo",
        "aula": "Sur"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "txt": "L · Oeste: Elvira",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Martes": {
        "txt": "L · Sol: Juego · T6\n↗ Santiago→O1",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Jueves": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Viernes": {
        "txt": "L · Sol: Juego · T6",
        "tipo": "lectivo",
        "aula": "Sol"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "txt": "L · Comedor Sol",
        "tipo": "comedor"
       },
       "Martes": {
        "txt": "L · Comedor Sol",
        "tipo": "comedor"
       },
       "Miércoles": {
        "txt": "L · Comedor Sol",
        "tipo": "comedor"
       },
       "Jueves": {
        "txt": "L · Comedor Sol",
        "tipo": "comedor"
       },
       "Viernes": {
        "txt": "L · Comedor Sol",
        "tipo": "comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Martes": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Miércoles": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Jueves": {
        "txt": "Comida",
        "tipo": "comida"
       },
       "Viernes": {
        "txt": "Comida",
        "tipo": "comida"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "txt": "L · Oeste: Emma",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Martes": {
        "txt": "L · Sol: Gonzalo",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Sur: Silvana",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Jueves": {
        "txt": "L · Sur: Jacobo",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Viernes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Martes": {
        "txt": "NL",
        "tipo": "no_lectivo"
       },
       "Miércoles": {
        "txt": "L · Sur: Carmen M.",
        "tipo": "lectivo",
        "aula": "Sur"
       },
       "Jueves": {
        "txt": "L · Oeste: Actividades de la Vida Diaria",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "L · Sur: Actividades de la Vida Diaria · T7",
        "tipo": "lectivo",
        "aula": "Sur"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "txt": "L · Sol: Autonomía · T2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Martes": {
        "txt": "L · Sol: Autonomía · T2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Miércoles": {
        "txt": "L · Sol: Autonomía · T2",
        "tipo": "lectivo",
        "aula": "Sol"
       },
       "Jueves": {
        "txt": "L · Oeste: Actividades de la Vida Diaria",
        "tipo": "lectivo",
        "aula": "Oeste"
       },
       "Viernes": {
        "txt": "L · Sur: Actividades de la Vida Diaria · T7",
        "tipo": "lectivo",
        "aula": "Sur"
       }
      }
     }
    ]
   }
  }
 },
 "alumnado": {
  "Estrella": {
   "Naomi Sánchez Moneo": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     }
    ]
   },
   "Inés Serra Lasala": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Jueves": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     }
    ]
   },
   "Lucía Benjumea Martín": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     }
    ]
   },
   "Bernardo Barreto-Saraiva": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Viernes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     }
    ]
   }
  },
  "Sol": {
   "Gonzalo Cuevas Navarrete": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     }
    ]
   },
   "Álvaro Regojo": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     }
    ]
   },
   "Santiago Deffi": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Miércoles": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     }
    ]
   },
   "Eva Pereda": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Viernes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     }
    ]
   }
  },
  "Norte": {
   "Catalina Figueroa": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Leonor Courtade": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Alejandra Rodríguez": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Miguel Rudeke": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Cuentacuentos"
       },
       "Miércoles": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Jueves": {
        "asig": "Cuentacuentos"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   }
  },
  "Luna": {
   "Darío Salamanca de Mingo": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Martes": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Lectoescritura"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Viernes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Inteligencia Emocional"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Luis López-Quiñones Rivera": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Martes": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Jueves": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Lectoescritura"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Inteligencia Emocional"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Manuela García": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Martes": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Lectoescritura"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Snack"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Psicomotricidad"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Conocimiento del Entorno"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Inteligencia Emocional"
       },
       "Martes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Lucas Martín Martínez": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Martes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Lectoescritura"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Lectoescritura"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Martes": {
        "asig": "Estimulación del Lenguaje"
       },
       "Miércoles": {
        "asig": "Estimulación del Lenguaje"
       },
       "Jueves": {
        "asig": "Estimulación del Lenguaje"
       },
       "Viernes": {
        "asig": "Estimulación del Lenguaje"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Snack"
       },
       "Martes": {
        "asig": "Snack"
       },
       "Miércoles": {
        "asig": "Snack"
       },
       "Jueves": {
        "asig": "Snack"
       },
       "Viernes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Martes": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Jueves": {
        "asig": "Prerrequisitos de Aprendizaje"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Aprendizaje"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Martes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Miércoles": {
        "asig": "Prerrequisitos de Grafomotricidad"
       },
       "Jueves": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Viernes": {
        "asig": "Prerrequisitos de Grafomotricidad"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Martes": {
        "asig": "Psicomotricidad"
       },
       "Miércoles": {
        "asig": "Psicomotricidad"
       },
       "Jueves": {
        "asig": "Psicomotricidad"
       },
       "Viernes": {
        "asig": "Psicomotricidad"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Conocimiento del Entorno"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Conocimiento del Entorno"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Inteligencia Emocional"
       },
       "Martes": {
        "asig": "Juego"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Juego"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   }
  },
  "Este": {
   "Manuel González": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Educación Física"
       },
       "Jueves": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Educación Física"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Educación Física"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Educación Física"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Arte"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Autonomía"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Martina Nuñez Rubiano": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Educación Física"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Educación Física"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Educación Física"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Educación Física"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Arte"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Autonomía"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Yago Regueras": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Educación Física"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Educación Física"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Educación Física"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Educación Física"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Arte"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Autonomía"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Catalina Belló": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Educación Física"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Educación Física"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Educación Física"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Educación Física"
       },
       "Viernes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Arte"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Autonomía"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   },
   "Marco Delgado Abad": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea"
       },
       "Martes": {
        "asig": "Asamblea"
       },
       "Miércoles": {
        "asig": "Asamblea"
       },
       "Jueves": {
        "asig": "Asamblea"
       },
       "Viernes": {
        "asig": "Asamblea"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Educación Física"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Educación Física"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "salida": "TO1",
        "dest_nombre": "Irene"
       },
       "Martes": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Educación Física"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Autonomía"
       },
       "Martes": {
        "asig": "Arte"
       },
       "Miércoles": {
        "asig": "Autonomía"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Autonomía"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Juego"
       },
       "Martes": {
        "asig": "Autonomía"
       },
       "Miércoles": {
        "asig": "Juego"
       },
       "Jueves": {
        "asig": "Autonomía"
       },
       "Viernes": {
        "asig": "Juego"
       }
      }
     }
    ]
   }
  },
  "Oeste": {
   "Daniel Ramírez": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Viernes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Arte"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     }
    ]
   },
   "Elvira Cermeño": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Arte"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     }
    ]
   },
   "Daniela Vacas": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Arte"
       },
       "Martes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     }
    ]
   },
   "Micke Ocaña": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Arte"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     }
    ]
   },
   "Emma Soto": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Escritura"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Arte"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     }
    ]
   },
   "Noah Skelt": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Escritura"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Martes": {
        "asig": "Escritura"
       },
       "Miércoles": {
        "asig": "Escritura"
       },
       "Jueves": {
        "asig": "Escritura"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Arte"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Matemáticas"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inglés"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Inteligencia Emocional"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Actividades de la Vida Diaria"
       },
       "Viernes": {
        "asig": "Educación Física (1h)"
       }
      }
     }
    ]
   }
  },
  "Sur": {
   "Carmen Mazarrasa": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Arrowsmith"
       },
       "Martes": {
        "asig": "Arrowsmith"
       },
       "Miércoles": {
        "asig": "Arrowsmith"
       },
       "Jueves": {
        "asig": "Arrowsmith"
       },
       "Viernes": {
        "asig": "Arrowsmith"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inteligencia Emocional"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Arte"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "salida": "Ps3",
        "dest_nombre": "Bárbara"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     }
    ]
   },
   "Bosco Alonso": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Arrowsmith"
       },
       "Martes": {
        "asig": "Arrowsmith"
       },
       "Miércoles": {
        "asig": "Arrowsmith"
       },
       "Jueves": {
        "asig": "Arrowsmith"
       },
       "Viernes": {
        "asig": "Arrowsmith"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Martes": {
        "asig": "Inteligencia Emocional"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Arte"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     }
    ]
   },
   "Ángela Carmona": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Arrowsmith"
       },
       "Martes": {
        "asig": "Arrowsmith"
       },
       "Miércoles": {
        "asig": "Arrowsmith"
       },
       "Jueves": {
        "asig": "Arrowsmith"
       },
       "Viernes": {
        "asig": "Arrowsmith"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inteligencia Emocional"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Arte"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     }
    ]
   },
   "Esther Juncan Wang": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Arrowsmith"
       },
       "Martes": {
        "asig": "Arrowsmith"
       },
       "Miércoles": {
        "asig": "Arrowsmith"
       },
       "Jueves": {
        "asig": "Arrowsmith"
       },
       "Viernes": {
        "asig": "Arrowsmith"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inteligencia Emocional"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Arte"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Viernes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "salida": "L1",
        "dest_nombre": "Luis"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     }
    ]
   },
   "Andrés E. Paz": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Arrowsmith"
       },
       "Martes": {
        "asig": "Arrowsmith"
       },
       "Miércoles": {
        "asig": "Arrowsmith"
       },
       "Jueves": {
        "asig": "Arrowsmith"
       },
       "Viernes": {
        "asig": "Arrowsmith"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inteligencia Emocional"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Arte"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     }
    ]
   },
   "Silvana Ospina Ramírez": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Arrowsmith"
       },
       "Martes": {
        "asig": "Arrowsmith"
       },
       "Miércoles": {
        "asig": "Arrowsmith"
       },
       "Jueves": {
        "asig": "Arrowsmith"
       },
       "Viernes": {
        "asig": "Arrowsmith"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inteligencia Emocional"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Arte"
       },
       "Viernes": {
        "salida": "L3",
        "dest_nombre": "(por contratar)"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "salida": "O2",
        "dest_nombre": "Sara"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Jueves": {
        "asig": "Ciencias"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     }
    ]
   },
   "Jacobo Llopis": {
    "filas": [
     {
      "franja": "F0",
      "hora": "9:00",
      "dias": {
       "Lunes": {
        "asig": "Asamblea Conjunta"
       },
       "Martes": {
        "asig": "Asamblea Conjunta"
       },
       "Miércoles": {
        "asig": "Asamblea Conjunta"
       },
       "Jueves": {
        "asig": "Asamblea Conjunta"
       },
       "Viernes": {
        "asig": "Asamblea Conjunta"
       }
      }
     },
     {
      "franja": "F1",
      "hora": "9:30",
      "dias": {
       "Lunes": {
        "asig": "Arrowsmith"
       },
       "Martes": {
        "asig": "Arrowsmith"
       },
       "Miércoles": {
        "asig": "Arrowsmith"
       },
       "Jueves": {
        "asig": "Arrowsmith"
       },
       "Viernes": {
        "asig": "Arrowsmith"
       }
      }
     },
     {
      "franja": "F2",
      "hora": "10:00",
      "dias": {
       "Lunes": {
        "asig": "Lengua"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "F3",
      "hora": "10:30",
      "dias": {
       "Lunes": {
        "salida": "O1",
        "dest_nombre": "(por contratar)"
       },
       "Martes": {
        "asig": "Lengua"
       },
       "Miércoles": {
        "asig": "Lengua"
       },
       "Jueves": {
        "asig": "Lengua"
       },
       "Viernes": {
        "asig": "Capacitación Digital"
       }
      }
     },
     {
      "franja": "Patio",
      "hora": "11:00–11:30",
      "dias": {
       "Lunes": {
        "label": "Recreo"
       },
       "Martes": {
        "label": "Recreo"
       },
       "Miércoles": {
        "label": "Recreo"
       },
       "Jueves": {
        "label": "Recreo"
       },
       "Viernes": {
        "label": "Recreo"
       }
      }
     },
     {
      "franja": "F4",
      "hora": "11:30",
      "dias": {
       "Lunes": {
        "asig": "Inglés"
       },
       "Martes": {
        "asig": "Inteligencia Emocional"
       },
       "Miércoles": {
        "asig": "Inglés"
       },
       "Jueves": {
        "asig": "Arte"
       },
       "Viernes": {
        "asig": "Lengua"
       }
      }
     },
     {
      "franja": "F5",
      "hora": "12:00",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Matemáticas"
       },
       "Viernes": {
        "asig": "Inglés"
       }
      }
     },
     {
      "franja": "F6",
      "hora": "12:30",
      "dias": {
       "Lunes": {
        "asig": "Matemáticas"
       },
       "Martes": {
        "asig": "Matemáticas"
       },
       "Miércoles": {
        "asig": "Matemáticas"
       },
       "Jueves": {
        "asig": "Inglés"
       },
       "Viernes": {
        "asig": "Música"
       }
      }
     },
     {
      "franja": "Comida",
      "hora": "13:00–13:45",
      "dias": {
       "Lunes": {
        "label": "Comedor"
       },
       "Martes": {
        "label": "Comedor"
       },
       "Miércoles": {
        "label": "Comedor"
       },
       "Jueves": {
        "label": "Comedor"
       },
       "Viernes": {
        "label": "Comedor"
       }
      }
     },
     {
      "franja": "Patio tarde",
      "hora": "13:45–14:30",
      "dias": {
       "Lunes": {
        "label": "Patio"
       },
       "Martes": {
        "label": "Patio"
       },
       "Miércoles": {
        "label": "Patio"
       },
       "Jueves": {
        "label": "Patio"
       },
       "Viernes": {
        "label": "Patio"
       }
      }
     },
     {
      "franja": "F7",
      "hora": "14:30",
      "dias": {
       "Lunes": {
        "asig": "Ciencias"
       },
       "Martes": {
        "asig": "Ciencias"
       },
       "Miércoles": {
        "asig": "Ciencias"
       },
       "Jueves": {
        "salida": "TO2",
        "dest_nombre": "Aitana"
       },
       "Viernes": {
        "asig": "Ciencias"
       }
      }
     },
     {
      "franja": "F8",
      "hora": "15:00",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "asig": "Educación Física (1h)"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     },
     {
      "franja": "F9",
      "hora": "15:30",
      "dias": {
       "Lunes": {
        "asig": "Educación Física (conj.)"
       },
       "Martes": {
        "asig": "Educación Física (conj.)"
       },
       "Miércoles": {
        "asig": "Educación Física (conj.)"
       },
       "Jueves": {
        "salida": "L2",
        "dest_nombre": "Sheila"
       },
       "Viernes": {
        "asig": "Actividades de la Vida Diaria"
       }
      }
     }
    ]
   }
  }
 },
 "momentos": [
  {
   "titulo": "Entrada y Asamblea (9:00–9:30) — titular por aula  ·  verde = coordinación del tutor (cubre otro)",
   "filas": [
    {
     "label": "Estrella (T1)",
     "dias": {
      "Lunes": [
       "Asamblea: T1"
      ],
      "Martes": [
       "Asamblea: T1"
      ],
      "Miércoles": [
       "Asamblea: T1"
      ],
      "Jueves": [
       "Asamblea: EF1\n(T1 coordina)"
      ],
      "Viernes": [
       "Asamblea: T1"
      ]
     }
    },
    {
     "label": "Sol (T2)",
     "dias": {
      "Lunes": [
       "Asamblea: T2"
      ],
      "Martes": [
       "Asamblea: T2"
      ],
      "Miércoles": [
       "Asamblea: T2"
      ],
      "Jueves": [
       "Asamblea: T7\n(T2 coordina)"
      ],
      "Viernes": [
       "Asamblea: T2"
      ]
     }
    },
    {
     "label": "Norte (T4)",
     "dias": {
      "Lunes": [
       "Asamblea: T4"
      ],
      "Martes": [
       "Asamblea: T4"
      ],
      "Miércoles": [
       "Asamblea: T4"
      ],
      "Jueves": [
       "Asamblea: T4"
      ],
      "Viernes": [
       "Asamblea: T7\n(T4 coordina)"
      ]
     }
    },
    {
     "label": "Luna (T3)",
     "dias": {
      "Lunes": [
       "Asamblea: T6\n(T3 coordina)"
      ],
      "Martes": [
       "Asamblea: T3"
      ],
      "Miércoles": [
       "Asamblea: T3"
      ],
      "Jueves": [
       "Asamblea: T3"
      ],
      "Viernes": [
       "Asamblea: T3"
      ]
     }
    },
    {
     "label": "Este (T5)",
     "dias": {
      "Lunes": [
       "Asamblea: T5"
      ],
      "Martes": [
       "Asamblea: T5"
      ],
      "Miércoles": [
       "Asamblea: EF1\n(T5 coordina)"
      ],
      "Jueves": [
       "Asamblea: T5"
      ],
      "Viernes": [
       "Asamblea: T5"
      ]
     }
    },
    {
     "label": "Oeste + Sur (conjunta)\n(T6, T7)",
     "dias": {
      "Lunes": [
       "Conjunta: T7\n(T6 sale a cubrir)"
      ],
      "Martes": [
       "Conjunta: T6\n(T7 coordina)"
      ],
      "Miércoles": [
       "Conjunta: T7\n(T6 coordina)"
      ],
      "Jueves": [
       "Conjunta: T6\n(T7 sale a cubrir)"
      ],
      "Viernes": [
       "Conjunta: T6\n(T7 sale a cubrir)"
      ]
     }
    },
    {
     "label": "Coordinan (tutor+terapeutas):",
     "dias": {
      "Lunes": [
       "Luna: T3+L1+O1+TO1"
      ],
      "Martes": [
       "Sur: T7+L1+L2+L3+O1+O2+TO2"
      ],
      "Miércoles": [
       "Este: T5+L1+L3+TO1\nOeste: T6+L1+L2+O1+O2+TO2"
      ],
      "Jueves": [
       "Estrella: T1+L1+O2+TO1\nSol: T2+L2+L3+O1+TO2"
      ],
      "Viernes": [
       "Norte: T4+L2+O1+TO1"
      ]
     }
    }
   ]
  },
  {
   "titulo": "Patio de mañana (11:00–11:30)",
   "filas": [
    {
     "label": "Patio",
     "dias": {
      "Lunes": [
       "T5 Jesús",
       "T7 Raquel",
       "EF1 Fernando",
       "I2 (por contratar)",
       "TO2 Aitana"
      ],
      "Martes": [
       "T4 Marta O.",
       "T7 Raquel",
       "EF1 Fernando",
       "I2 (por contratar)"
      ],
      "Miércoles": [
       "T4 Marta O.",
       "T7 Raquel",
       "EF1 Fernando",
       "I2 (por contratar)",
       "TO2 Aitana"
      ],
      "Jueves": [
       "EF1 Fernando",
       "I2 (por contratar)",
       "O1 (por contratar)",
       "TO2 Aitana"
      ],
      "Viernes": [
       "EF1 Fernando",
       "I2 (por contratar)",
       "O1 (por contratar)",
       "L3 (por contratar)",
       "TO2 Aitana"
      ]
     }
    }
   ]
  },
  {
   "titulo": "Comedores (13:00–13:45)",
   "filas": [
    {
     "label": "Estrella",
     "dias": {
      "Lunes": [
       "T1 María C.",
       "TO1 Irene"
      ],
      "Martes": [
       "T1 María C.",
       "TO1 Irene"
      ],
      "Miércoles": [
       "T1 María C.",
       "TO1 Irene"
      ],
      "Jueves": [
       "T1 María C.",
       "O1 (por contratar)"
      ],
      "Viernes": [
       "T1 María C.",
       "TO1 Irene"
      ]
     }
    },
    {
     "label": "Sol",
     "dias": {
      "Lunes": [
       "T2 Carol",
       "TO2 Aitana"
      ],
      "Martes": [
       "T2 Carol",
       "TO2 Aitana"
      ],
      "Miércoles": [
       "T2 Carol",
       "TO2 Aitana"
      ],
      "Jueves": [
       "T2 Carol",
       "TO2 Aitana"
      ],
      "Viernes": [
       "T2 Carol",
       "TO2 Aitana"
      ]
     }
    },
    {
     "label": "Norte",
     "dias": {
      "Lunes": [
       "T4 Marta O.",
       "L2 Sheila"
      ],
      "Martes": [
       "T4 Marta O.",
       "L2 Sheila"
      ],
      "Miércoles": [
       "T4 Marta O.",
       "L2 Sheila"
      ],
      "Jueves": [
       "T4 Marta O.",
       "L2 Sheila"
      ],
      "Viernes": [
       "T4 Marta O.",
       "L2 Sheila"
      ]
     }
    },
    {
     "label": "EBO/Luna",
     "dias": {
      "Lunes": [
       "T3 Silvia",
       "I2 (por contratar)",
       "L1 Luis"
      ],
      "Martes": [
       "T3 Silvia",
       "I2 (por contratar)",
       "L1 Luis"
      ],
      "Miércoles": [
       "T3 Silvia",
       "I2 (por contratar)",
       "L1 Luis"
      ],
      "Jueves": [
       "T3 Silvia",
       "I2 (por contratar)",
       "L1 Luis"
      ],
      "Viernes": [
       "T3 Silvia",
       "I2 (por contratar)",
       "L1 Luis"
      ]
     }
    }
   ]
  },
  {
   "titulo": "Patio de tarde (13:45–14:30)",
   "filas": [
    {
     "label": "Patio tarde",
     "dias": {
      "Lunes": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O1 (por contratar)"
      ],
      "Martes": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "Ps3 Bárbara"
      ],
      "Miércoles": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O1 (por contratar)"
      ],
      "Jueves": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O2 Sara",
       "Ps3 Bárbara"
      ],
      "Viernes": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O1 (por contratar)"
      ]
     }
    }
   ]
  },
  {
   "titulo": "Comida · turno 13:00–13:45",
   "filas": [
    {
     "label": "Turno 1",
     "dias": {
      "Lunes": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O1 (por contratar)"
      ],
      "Martes": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando"
      ],
      "Miércoles": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O1 (por contratar)"
      ],
      "Jueves": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O2 Sara"
      ],
      "Viernes": [
       "T5 Jesús",
       "T6 Marta La.",
       "T7 Raquel",
       "EF1 Fernando",
       "O1 (por contratar)"
      ]
     }
    }
   ]
  },
  {
   "titulo": "Comida · turno 13:45–14:30",
   "filas": [
    {
     "label": "Turno 2",
     "dias": {
      "Lunes": [
       "T1 María C.",
       "T2 Carol",
       "T4 Marta O.",
       "T3 Silvia",
       "I1 Benjie",
       "L1 Luis",
       "L2 Sheila",
       "TO1 Irene",
       "TO2 Aitana"
      ],
      "Martes": [
       "T1 María C.",
       "T2 Carol",
       "T4 Marta O.",
       "T3 Silvia",
       "I1 Benjie",
       "O1 (por contratar)",
       "O2 Sara",
       "L1 Luis",
       "L2 Sheila",
       "TO1 Irene",
       "TO2 Aitana"
      ],
      "Miércoles": [
       "T1 María C.",
       "T2 Carol",
       "T4 Marta O.",
       "T3 Silvia",
       "I1 Benjie",
       "L1 Luis",
       "L2 Sheila",
       "TO1 Irene",
       "TO2 Aitana"
      ],
      "Jueves": [
       "T1 María C.",
       "T2 Carol",
       "T4 Marta O.",
       "T3 Silvia",
       "I1 Benjie",
       "O1 (por contratar)",
       "L1 Luis",
       "L2 Sheila",
       "TO1 Irene",
       "TO2 Aitana"
      ],
      "Viernes": [
       "T1 María C.",
       "T2 Carol",
       "T4 Marta O.",
       "T3 Silvia",
       "I1 Benjie",
       "L1 Luis",
       "L2 Sheila",
       "TO1 Irene",
       "TO2 Aitana"
      ]
     }
    }
   ]
  }
 ]
};
