alert("Boas vindas ao jogo do numero secreto");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt('Escolha um numero entre 1 e 30');

if(numeroSecreto == chute){
    alert('Isso ai voce acertou o numero secreto');
} else {
    alert("Voce errou :[");
}
