function contador(){
    //Capture the values that were passed by the user
    var inicio = document.getElementById('btnInicio')
    var fim = document.getElementById('btnFim')
    var passo = document.getElementById('btnPasso')
    var res = document.getElementById('res')
    //Limpando a tela
    res.innerHTML = ''

    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = ''
        window.alert('Dados incompletos')
    }else{
        res.innerHTML = '<strong>Contador:</strong> <br>'
        if(Number(passo.value) <= 0){
            window.alert('Considerando passo 1')
            passo.value = 1
        }
        //Conta do inicio ao fim
        if(fim.value>inicio.value){
            for(let i=Number(inicio.value); i<=Number(fim.value); i+=Number(passo.value)){
                res.innerHTML += `${i} 👈`
            }
        //Conta do fim ao inicio
        }else{
            for(let i=Number(inicio.value); i>=Number(fim.value); i-=Number(passo.value)){
                res.innerHTML += ` ${i}👈`
            }
        }
        res.innerHTML += `🏳`
        

    }

}
    
   