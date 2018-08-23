const validateFile = require('../src/md-links').validateFile;

test('Validar que el archivo tenga formato .md', () => {
  expect(validateFile).toBeTruthy;
});


const validateLink = require('../src/md-links').validateLink;

test('Validar que existan links dentro del archivo', () => {
  expect(validateLink).toBeTruthy;
});
