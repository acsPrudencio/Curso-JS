function gerarTabuada(){
    var num = document.getElementById('txtNumero')
    var res = document.getElementById('res')
    var numero = Number(num.value)

    

    if(num.value.length == 0){
        window.alert('Digite um valor valido')
    }else{

        //Limpando a tela
        res.innerHTML = ''

        for(let i=1; i<=10; i++){
            let resultado = document.createElement('option')
            resultado.text = `${numero} x ${i} = ${numero*i}`
            res.appendChild(resultado)
        }
    }
    

}