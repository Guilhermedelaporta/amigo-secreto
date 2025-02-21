//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let input = document.getElementById("amigo");
let amigoDigitado = document.querySelector('input');


function adicionarAmigo() {
    amigoDigitado = document.querySelector('input').value;

    if (amigoDigitado != ""){
        amigos.push(amigoDigitado);
        limparCampo();
    }else{
        alert('Por favor insira um nome válido')
    }
};

function limparCampo(){
    input = document.querySelector('input');
    input.value = "";
};

function atualizarLista(){
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
    };


    function sortearAmigo(){
        if(amigos != ""){
            let indiceSorteado = Math.floor(Math.random() * amigos.length);
            let amigoSorteado = amigos[indiceSorteado];
            document.getElementById('resultado').innerHTML = `amigo sorteado: <strong>${amigoSorteado}</strong>`;
        } else{
           alert("Por favor adicione amigos na sua lista");
        }
    }
