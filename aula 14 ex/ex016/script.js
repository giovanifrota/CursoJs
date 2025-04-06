function contar(){
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if(ini.value.length <= 0 || fim.value.length <= 0 || passo.value.length <= 0){
        res.innerHTML ='Está faltando dados'
        alert('[ERRO] verifique se os campos foram preenchido corretamente!')
    }else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <=0 ){
            alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c}`
            }
        }else{
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `${c}`
            }
        }
    }
}