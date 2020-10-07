/* Módulo 02
 * Resolução dos Exercícios 1 e 2
 */

//Função passada para geração aleatória de cor

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
   }

var btnElement = document.querySelector('.btn');

//Função que cria o Redbox

btnElement.onclick = () => {
    var boxElement = document.createElement("div");
    var containerElement = document.querySelector("body");

    boxElement.style.margin = "3px";
    boxElement.style.width = '10rem';
    boxElement.style.height = '10rem';
    boxElement.style.backgroundColor = '#f00';
    //Já faz parte do Exercício 2
    boxElement.setAttribute('class','')

//Função do Exercício 2, que muda cor aleatoriamente ao passar o mouse

    boxElement.onmouseover = () => {
        var newColor = getRandomColor();
        boxElement.style.backgroundColor = newColor;
    }

    containerElement.appendChild(boxElement);
    console.log("add redbox");
}