function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'homem-crianca.png')
            }else if(idade > 10 && idade < 21){
                img.setAttribute('src', 'homem-adolescente.png')
            }else if(idade >=21 && idade <50){
                img.setAttribute('src', 'homem-adulto.png')
            }else{
                img.setAttribute('src', 'homem-idoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'mulher-crianca.png')
            }else if(idade > 10 && idade <21){
                img.setAttribute('src', 'mulher-adolescente.png')
            }else if(idade >=21 && idade <50){
                img.setAttribute('src', 'mulher-adulta.png')
            }else{
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.style.padding ="10px"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}