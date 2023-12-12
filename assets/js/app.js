console.log('Bienvenido a GAMEHEN');
let nombreJugador = prompt('Cual es tu nombre?');
console.log(`Hola ${nombreJugador}`);
console.log(`Responde responde lo que se te solicita`);
let arrRespuestasPreguntas=[];
let pregunta1 = String(prompt(`Eres mayor de edad? SI / NO`)).toLocaleLowerCase();
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
  ]; 
if(pregunta1 === 'si'){
  let preguntaEdad = Number(prompt('Que edad tienes?'));
  if(preguntaEdad >= 18){
    console.log(`Haz dicho que tu edad es ${preguntaEdad} y ahora podras acceder al mejor sitio de juegos hen que podras encontrar ;)`);
    console.log('Comencemos...');
    let preguntaAltura = Number(prompt('¿De qué altura sería tu chica ideal?'));
    console.log(preguntaAltura);

    function encontrarPersonajesPorAltura(alturaBuscada) {
      let personajesCoincidentes = personajes.filter(function(personaje) {
        let alturaPersonaje = parseInt(personaje.apariencia.altura);
        return alturaPersonaje === alturaBuscada;
      });
      return personajesCoincidentes;
    }

    let alturaBuscada = preguntaAltura;

    let personajesCoincidentes = encontrarPersonajesPorAltura(alturaBuscada);

    if (personajesCoincidentes.length > 0) {
      console.log(`Para esta altura, las coincidencias son:`);
      for (let i = 0; i < personajesCoincidentes.length; i += 1) {
        console.log(`- ${personajesCoincidentes[i].nombre}`);
      }
      console.log('Elige una de las chicas');
    
      function buscarChica(chicaElegida) {
        let chicaEncontrada = personajes.find(personaje => personaje.nombre.toLowerCase() === chicaElegida.toLowerCase());
        return chicaEncontrada;
      }
    
      let chicaElegida = prompt('¿Cuál chica elijes?');
      let chicaEncontrada = buscarChica(chicaElegida);
    
      if (chicaEncontrada) {
        console.log(`Elegiste a: ${chicaEncontrada.nombre}`);
        console.log('Cualidades de la chica:');
        
        for (let propiedad in chicaEncontrada) {
          if (typeof chicaEncontrada[propiedad] === 'object') {

            console.log(`${propiedad}:`);
            for (let subpropiedad in chicaEncontrada[propiedad]) {
              console.log(`  ${subpropiedad}: ${chicaEncontrada[propiedad][subpropiedad]}`);
            }
            console.log('Que comience el Juego...')
          } else {

            console.log(`${propiedad}: ${chicaEncontrada[propiedad]}`);
          }
        }
      } else {
        console.log('No se encontró a la chica.');
      }      
    
    } else {
      console.log(`No hay personajes con esa altura.`);
    }
    

  }else{
    console.log('tu no eres mayor de edad y no puedes acceder a este sitio')
  }


    
}
else{
    console.log(`Lo siento chiquitin eres un tanto pequeño pero no te preocupes podemos buscar algo para ti...`);
}

