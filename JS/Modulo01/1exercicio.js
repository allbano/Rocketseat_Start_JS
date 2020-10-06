var endereco = {
    rua: "\"Rua dos pinheiros\"",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP" 
}

//Modo primário de resolver o problema
console.log("O usuário  mora em " + endereco.cidade + " / " + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua+ " nº " + endereco.numero + ".")

//Moro atual, usando Template String
console.log(`O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, no endereço ${endereco.rua} nº. ${endereco.numero}.`)