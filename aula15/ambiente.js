let num = [5, 8 , 2, 9, 3] //meu vetor ou array
num.push(1) // push => vai pegar o indece junto com o elemento e vai levalo para o final
num.sort() // sort=> Vai colocar em ordem os elementos

console.log(`Nosso vetor é o ${num}`)


console.log(`O vetor tem ${num.length} posições`) // length => Mostra a quantidade de elementos 

console.log(`O primeiro valor do vetor é ${num[0]}`) // Mostra a posição 0 que é o 5   

let pos = num.indexOf(5) // indexOf => Mostra em que chave está o valor
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
