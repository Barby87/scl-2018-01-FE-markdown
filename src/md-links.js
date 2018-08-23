function validateFile (fileName) {
  if(fileName.indexOf('.md') < 0) {
    return false;
  }
}

function validateLink (link) {
  if(link.indexOf('http') > 0) {
    return true;
  }
}
 
module.exports = {
validateFile: validateFile,
validateLink: validateLink,
}