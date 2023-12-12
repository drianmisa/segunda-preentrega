console.log('Hola Jugador 1');
let nombreJugador = prompt('Cual es tu nombre?');
console.log(`Hola ${nombreJugador}`);
console.log(`Responde responde lo que se te solicita`);
let arrRespuestasPreguntas=[];
let pregunta1 = String(prompt(`Eres mayor de edad?`)).toLocaleLowerCase();
let personajes =
[
    {
      "nombre": "Sakura Haruno",
      "serie": "Naruto",
      "apariencia": {
        "color_cabello": "Rosa",
        "altura": "160 cm",
        "peso": "45 kg",
        "color_ojos": "Verdes"
      }
    },
    {
      "nombre": "Asuna Yuuki",
      "serie": "Sword Art Online",
      "apariencia": {
        "color_cabello": "Castaño",
        "altura": "165 cm",
        "peso": "50 kg",
        "color_ojos": "Cafés"
      }
    },
    {
      "nombre": "Mikasa Ackerman",
      "serie": "Attack on Titan",
      "apariencia": {
        "color_cabello": "Negro",
        "altura": "170 cm",
        "peso": "55 kg",
        "color_ojos": "Gris azulado"
      }
    },
    {
      "nombre": "Bulma",
      "serie": "Dragon Ball",
      "apariencia": {
        "color_cabello": "Azul",
        "altura": "165 cm",
        "peso": "55 kg",
        "color_ojos": "Azules"
      }
    },
    {
      "nombre": "Lucy Heartfilia",
      "serie": "Fairy Tail",
      "apariencia": {
        "color_cabello": "Rubio",
        "altura": "165 cm",
        "peso": "48 kg",
        "color_ojos": "Cafés"
      }
    },
    {
      "nombre": "Rukia Kuchiki",
      "serie": "Bleach",
      "apariencia": {
        "color_cabello": "Negro",
        "altura": "150 cm",
        "peso": "45 kg",
        "color_ojos": "Violetas"
      }
    },
    {
      "nombre": "Nami",
      "serie": "One Piece",
      "apariencia": {
        "color_cabello": "Naranja",
        "altura": "170 cm",
        "peso": "60 kg",
        "color_ojos": "Marrones"
      }
    }
  ]
  
; 
if(pregunta1 === 'si'){
    let preguntaEdad = Number(prompt('Que edad tienes?'));
    console.log(`Haz dicho que tu edad es ${preguntaEdad} y ahora podras acceder al mejor sitio de juegos hen que podras encontrar ;)`);
    console.log('Comencemos');
    
}
else{
    console.log(`Lo siento chiquitin eres un tanto pequeño pero no te preocupes podemos buscar algo para ti...`);
}

