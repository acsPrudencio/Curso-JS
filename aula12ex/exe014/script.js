function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var deta = new Date()
    var horas = deta.getHours()
    if(horas >= 0 && horas < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(horas >= 12 && horas < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#3f414e'
    }
    msg.innerHTML = `Agora são ${horas} horas.`
}