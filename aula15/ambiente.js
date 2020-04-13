let numero = [3,2,1]

console.log(`Nosso vetor tem: ${numero}`)

//Adicionando elemento em posição especifica
numero[3] = 4
console.log(`Nosso vetor tem: ${numero}`)

//Adiconando elemento no final do vetor
numero.push(5)
console.log(`Nosso vetor tem: ${numero}`)

//Retorna o valor do vetor
//numero.length
console.log(`O tamanho do vetor eh: ${numero.length}`)

//Organiza os elemento em ordem crescente
numero.sort()
console.log(`Nosso vetor tem: ${numero}`)

//Quebra de linha
console.log()

//Imprimindo valores na tela com "for"
for(let i=0; i<numero.length; i++){
    console.log(`A posição ${i} tem o valor ${numero[i]}`)
}

//Quebra de linha
console.log()

//Imprimindo valores na tela com "for in"
for(let i in numero){
    console.log(`A posição ${i} tem o valor ${numero[i]}`)
}

//Quebra de linha
console.log()

//Procura um elemento dentro de um vetor e retorna a posição do elemento, se não existir retorna -1
console.log(`O valor está na posição ${numero.indexOf(9)}`)