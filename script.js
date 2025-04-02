function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 6 && hora < 12) {
        //Bom dia
        img.src = 'manha2.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tarde2.png'
        document.body.style.background = '#b9846f'
    } else if (hora >= 0 && hora <= 5){ // Fiz de boa madrugada para treinar msm 
        //Boa madrugada
        img.src = 'madrugada2.png'
        document.body.style.background = '#6D3806'
    } else {
        ////Boa noite
    img.src = 'noite2.png'
    document.body.style.background = '#515154'
    }
}
