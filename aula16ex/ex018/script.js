let num = document.getElementById('txtNumero')
let res = document.getElementById('res')
let resultadoFinal = document.getElementById('resultadoFinal')
let lista = []


function analisar(){
   
    //Area de validação
    let isTrue = lista.indexOf(Number(num.value))
    //res.innerHTML = `${num}`
   // teste.innerHTML = `${procurar}`
    if(Number(num.value) >= 1 && Number(num.value) <= 100 && isTrue == -1 && !(num.value.length == 0)){
        lista.push(Number(num.value))
        let resultado = document.createElement('option')
        resultado.text = `Valor ${Number(num.value)} adicionado`
        res.appendChild(resultado)
    }else{
        window.alert('Valor invalido')
    }
    console.log(lista)
}

function finalizar(){
    //Pega a quantidade de elementos no array
    let tNumCadastrados = lista.length
    //Busca o maior elemento no array
    //Primeiro ordeno a lista e depois pega o último elemento
    lista.sort()
    let maiorNumero = lista[tNumCadastrados-1]
    //Busca o menor elemento no array
    let menorNumero = lista[0]
    //A soma de todos os valores
    let somaNumeros = 0
        for(let i=0; i<tNumCadastrados; i++){
            somaNumeros += lista[i]
        }
    //A média dos valores
    let mediaNumeros = somaNumeros/(tNumCadastrados)

    resultadoFinal.innerHTML += `Ao todo temos ${tNumCadastrados} números cadastrados`
    //Quebra de linha
    resultadoFinal.innerHTML += '<br><br>'
    
    resultadoFinal.innerHTML += `O maior número informado foi ${maiorNumero}`
    //Quebra de linha
    resultadoFinal.innerHTML += '<br><br>'

    resultadoFinal.innerHTML += `O menor número informado foi ${menorNumero}`
    //Quebra de linha
    resultadoFinal.innerHTML += '<br><br>'

    resultadoFinal.innerHTML += `Somando todos os valores, temos ${somaNumeros}`
    //Quebra de linha
    resultadoFinal.innerHTML += '<br><br>'
    
    resultadoFinal.innerHTML += `A média dos valores dígitados é ${mediaNumeros}`

}