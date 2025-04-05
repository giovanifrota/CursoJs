function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var resultado = document.getElementById("resultado")
    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Verifique os dados e Tente Novamente! ")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', '../bebe-m.jpg')
            }else if(idade >= 10 && idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
            }else if(idade >= 10 && idade < 21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        resultado.style.textAlign = 'Center'
        resultado.innerHTML = `Detectamos ${genero} que nasceu no ano ${idade}`
    }
}