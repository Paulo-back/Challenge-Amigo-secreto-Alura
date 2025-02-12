//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];




function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if(!amigo){
        alert('valor vazio');

    }else{
        listaAmigos.push(amigo);
        console.log(listaAmigos);
    }
    
}
function sortearAmigo(){

}