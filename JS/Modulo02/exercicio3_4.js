/* Módulo 02
 * Resolução dos Exercícios 3 e 4
 */

 //Lista que o exercício solicitou
var nomes = ["Diego", "Gabriel", "Lucas"];

//Solução do Exercício 03
var listElement = document.querySelector('.list-group');

for (i=0;i<nomes.length;i++) {
    
    var itemElement = document.createElement('li');
    itemElement.innerText = nomes[i];
    
    listElement.appendChild(itemElement);
}

//Solução do Exercício 04

function adicionar() {

    var inputNome = document.querySelector('input[name=nome]')
    var addElement = document.createElement('li')
    addElement.innerText = inputNome.value
    inputNome.value = ''
    listElement.append(addElement)

}
