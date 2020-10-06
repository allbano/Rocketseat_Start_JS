//Forma primária de Resolver o 2 Exercício
function expar(n1,n2) {
    for(var i = n1;i<=n2;i++) {
        if (i%2 === 0) {
            console.log(i)
        }
    }
    
}

expar(32,100)



/* Forma Atual de Fazer com Lista

function expar(n1,n2) {
    var lp = []
    while (n1<=n2) {
        if (n1%2 == 0) {
            lp.push(n1)
        }
    n1++
    }
    return lp
}

console.log(expar(32,100))
*/



