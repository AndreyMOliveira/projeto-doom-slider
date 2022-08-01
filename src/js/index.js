
const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const btnSecret = document.getElementById('btn-secret')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0;
let cartaoSecret = 3;
let secretBack = 10;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
cartaoSelecionado.classList.remove('selecionado')
}
function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado')
}
function btnSecretReturn(){
    esconderCartaoSelecionado() 
    mostrarCartao(cartaoAtual)
    secretBack = 10
}
function functionSecretBack(){
    if(secretBack === 20) { return btnSecretReturn() }
}

btnAvancar.addEventListener('click', function (){
    functionSecretBack()

    if(cartaoAtual === cartoes.length - 2) return;

    esconderCartaoSelecionado()
    
    cartaoAtual++;
    mostrarCartao(cartaoAtual)
})

btnVoltar.addEventListener('click', function (){
    functionSecretBack()

    if(cartaoAtual === 0) return

    esconderCartaoSelecionado()

    cartaoAtual--;
    mostrarCartao(cartaoAtual)
})

btnSecret.addEventListener('click', function (){
    if(secretBack === 20) { return btnSecretReturn() }

    secretBack = 20

    esconderCartaoSelecionado()

    mostrarCartao(cartaoSecret)
})
