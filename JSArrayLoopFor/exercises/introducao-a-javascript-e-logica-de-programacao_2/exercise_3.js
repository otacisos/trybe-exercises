let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(let index = 1; index <= numbers.length; index ++ ) {
    soma += numbers[index -1];

}

console.log('\nValor total da média aritmética é: ' + (soma / numbers.length)+ '!!');