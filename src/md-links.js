function validateFile (file) {
  if (file.indexOf ('.md') < 0) {
    return false;
  }

  const name = file.split('.');
  if (name.length < 1) { //Verifica que el largo del nombre tenga al menos 1 caracter.
      return false; // Si es menor a 1, será false.
  }
}

function validateLink (link) {
  if (link.indexOf ('http') > 0) {
    return true;
  }
}

function mdLinks (path) {
  if (path.indexOf ('/', 0)) {
    console.log ('Esta es una ruta absoluta');
  }

  if (path.indexOf ('/' > 1)) {
    console.log ('Esta es una ruta relativa');
  }
  return true;
}


module.exports = {
  validateFile: validateFile,
  validateLink: validateLink,
  mdLinks: mdLinks
}

// process.cwd