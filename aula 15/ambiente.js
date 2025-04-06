let num = [5, 8, 3, 9, 2]
num.push(1)
num.push(7)
num.sort()
console.log(`Nosso veto é o ${num}`)
console.log(num.length)
let pos = num.indexOf(8)

if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 nestá na posição ${pos}`)
}