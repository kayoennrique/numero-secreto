/**  alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativas = 1;

//enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    // chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            // alert(`O numero secreto é menor que ${chute}`);
        } else {
            // alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
//alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
console.log(numeroSecreto)
// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);    
// }
*/