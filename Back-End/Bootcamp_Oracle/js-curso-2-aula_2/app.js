let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa= `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor')
        }
        else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }

    }
tentativas++
LimparInput()
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
function LimparInput(){
    let limpar = document.querySelector('input')
    limpar.value='';

}
function novo(){
    numeroSecreto = gerarNumeroAleatorio();
    tentativas=1;
    LimparInput();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}











