function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
  

    if(hora >=0 && hora < 12){
        //Bom dia
        img.src = 'assets/manha.jpg'
    }else if(hora >=12 && hora <= 18){
        //BOA Tarde
        document.body.style.background = '#EA9C5E'
        img.src = 'assets/tarde.jpg'
    }else{
        //Boa noite
        img.src = 'assets/Noite.jpg'
        document.body.style.background = '#061631'
    }
}
