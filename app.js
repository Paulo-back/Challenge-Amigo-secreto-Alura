let listaAmigos = [];


function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if(!amigo){
        Swal.fire({
            title: "Erro ao inserir nome!",
            text: "Por favor insira um nome válido.",
            icon: "error",
            confirmButtonText: "OK",
            timer: 3000
          });
          

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
    let amigoSorteado = listaAmigos[Math.floor(Math.random()* listaAmigos.length)];
    console.log(amigoSorteado);
    exibeSorteado('#resultado',`O amigo sorteado é: ${amigoSorteado} `);
     document.getElementById('sortearAmigo').setAttribute('disabled', true);
}
function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}
function repetir(){
    
}