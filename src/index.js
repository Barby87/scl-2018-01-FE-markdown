#! / usr / bin / env node

const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const markdownLinkExtractor = require('./linkExtractor').markdownLinkExtractor;

const [, , ...argUser] = process.argv;

// Variable que guarda el primer string que escribe el usuario en la consola
let fileName = argUser[0];


// Validando que el usuario ingrese el nombre del archivo
if (path.isAbsolute(fileName)) {
  console.log('esta es una ruta absoluta, ingrese sólo el nombre del archivo');
} else {
  markdownLinkExtractor();
}

// El método path.join() une todos los segmentos de ruta dados. 
// El método process.cwd() devuelve el directorio de trabajo actual.
let joiningPath = path.join(process.cwd(), fileName);
markdownLinkExtractor(joiningPath).then((values) => {
      console.log(values);
});


    // Función que lee un archivo y retorna promesa con el contenido del archivo
    function markdownLinkExtractor(filePath) {
      return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
          if (error) {
            return reject(error); // Sabemos que hay un error, así que rechazamos la promesa
            // Si hay error, nos aseguramos con return de no seguir ejecutando nada más en esta función
          }
          return resolve(data).then((data) => {
            linkExtractor(data); // Función que extrae los links
          });
        });
      });
    };

    // Función que recorre los links que están dentro del arreglo
    function linkExtractor(data) {
      let links = markdownLinkExtractor(data);
      let arrLinks = [];
      links.forEach(function (url) {
          arrLinks.push(fetch(url.href)
            .then(function (response) {
              url.file = filePath,
                url.status = `${response.statusText} ${response.status}`; // Status 200
              return url;
            }))
        })
        .catch(function (err) {
          console.log(err);
          url.status = 'fail'; // Si el link está roto
          return url;
        })
    };
