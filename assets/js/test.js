/* 
Este ejercicio consiste en convertir las expresiones camelCase en expresiones normales, con espacios:
"camelCase" => "camel Case"

"setIsLoading" => "set Is Loading"
Parámetros
string string en camel case a convertir. */

function camelCase(string) {
    return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
}
  // Your code here
    