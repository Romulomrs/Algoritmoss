let titulo = document.querySelector('h1')
titulo.innerHTML='Hora do Desafio';

function clicar(){
    console.log('O botão foi clicado')
}
function Amar(){
    alert('Eu amo JS')
}
function Cidade(){
    NomeCidade=prompt("nome de uma cidade do Brasil")
    alert(`Estive em ${NomeCidade} e lembrei de você.`)
}
function Soma(){
    Adicao=prompt("Diga um numero")
    Adicao2=prompt("Diga outro numero")
    let Numero1= parseInt(Adicao, 10);
    let Numero2= parseInt(Adicao2, 10);
    let total =Numero1 + Numero2
    alert(total)

     
}