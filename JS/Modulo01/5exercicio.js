/*  Forma primária de Resolver o 5  exercício  
 *  
 *  Mostrar resultado:
 *  O Diego possui as habilidades: Javascript, ReactJS, Redux
 *  O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
 */

var users = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ]

    function mostrarPessoa(user) {
        for (let i of user) {
            console.log(`O ${i.nome} possui as habilidades: ${i.habilidades}`);
        }
   }
   mostrarPessoa(users);