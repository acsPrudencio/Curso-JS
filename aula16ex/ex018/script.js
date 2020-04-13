function analisar(){
    var numero = document.getElementById('txtNumero')
    var res = document.getElementById('res')
    var num = Number(numero.value)
    var lista = []

    //Area de testes
    var teste = document.getElementById('teste')

    

    //Area de validação
    var procurar = lista.indexOf(num)

    teste.innerHTML = `${procurar}`
    if(num >= 1 && num <=100 && procurar == -1){
        lista.push(num)
        let resultado = document.createElement('option')
        resultado.text = `Valor ${num} adicionado`
        res.appendChild(resultado)
    }else{
        window.alert('Valor invalido')
    }
    console.log(lista)
}


function finalizar(){

    
}