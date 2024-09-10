// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

let frase = 'Exercicio de lógica de programação'
let letraProcurada = 'a'
contador = 0
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letraProcurada) {
    contador++
  }
}
console.log(`A letra "${letraProcurada}" aparece ${contador} vezes.`);




