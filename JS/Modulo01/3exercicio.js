/* Forma primária de Resolver o 3 exercício 
*   
*   Como podemos perceber, indexOf é case sensitive, então precisa ser literalmente igual.
*   Ou seja, a skill precisa estar contida identicamente (===) na lista passada.
*/
function tH(lista, skill) {
    var result = (lista.indexOf(skill) != -1) ? console.log("true") : console.log("false");

   }

   var lista = ["Javascript", "ReactJS", "React Native"];

   //Resultado, "true" caso conste no vetor, "false" caso não conste no vetor.
   tH(lista, "Javascript"); 