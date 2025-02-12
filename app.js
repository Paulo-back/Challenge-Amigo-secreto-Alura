let listaAmigos = [];


function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if(!amigo){
        alert('valor vazio');

    }else{
        listaAmigos.push(amigo);

        console.log(listaAmigos);
        for(let i = 0;i<listaAmigos.length;i++){
            exibirAmigos('#listaAmigos',`${listaAmigos}`);
            document.getElementById('sortearAmigo').disabled = false;


        }
        limparCampo();
    }
    
}
function exibirAmigos() {
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        listaHTML.appendChild(item);
    }
}
function exibeSorteado(tag,texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
     }

function sortearAmigo(){
        //Colocar um alert & if para senao tiver amigos adicionados errado
        let amigoSorteado = listaAmigos[Math.floor(Math.random()* listaAmigos.length)];
    console.log(amigoSorteado);
    exibeSorteado('#resultado',amigoSorteado);
     document.getElementById('sortearAmigo').setAttribute('disabled', true);
}
function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}