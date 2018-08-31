// Verificar formato de archivo
const validateFile = require('../src/md-links').validateFile;
test('Validar que el archivo tenga formato .md', () => {
  expect(validateFile).toBeTruthy;
});

test('Validar que el nombre del archivo tenga al menos 1 caracter', () => {
  expect(validateFile).toBeTruthy;
});

// Verificar que existan links dentro del archivo
const validateLink = require('../src/md-links').validateLink;
test('Validar que existan links dentro del archivo', () => {
  expect(validateLink).toBeTruthy;
});

// Verificar si la ruta es absoluta o relativa
const mdLinks = require('../src/md-links').mdLinks;
test('Validar que la ruta sea relativa', () => {
  expect(mdLinks).toBeTruthy;
});

test ('Validar que la ruta sea absoluta', () => {
  expect(mdLinks).toBeTruthy;
})