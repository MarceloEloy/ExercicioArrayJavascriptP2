notas = [1, 4, 6, 7, 8, 9, 10, 9,  10, 9,  10, 5]
const tudo = notas.push(10)
notas.shift(notas[0])
console.log(notas[0])
console.log(notas[notas.length - 1])
var z = 0
for (var x = 0; x < tudo;){
    var y = notas[x]
    z += y
    console.log(y)
    x += 1
    if ( x == tudo - 1){
        var media = z/x
        break
    }
}
const notas2 = [7, 7, 10, 2, 8 ,9, 10, 5, 4, 6, 7, 10];

const notasacima7 = notas2.filter(nota => nota > 7);

console.log(notas2);
console.log(notasacima7);

const listaorganizada = [9, 8, 1, 2, 5, 6.5, 6, 7, 8.0]
listaorganizada.sort()
console.log(listaorganizada)
console.log(listaorganizada.includes(6.5))
console.log(listaorganizada.indexOf(8.0))

function map(){
    const notas3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for(i in notas3){
        console.log(Math.pow(i, 2))
    }
}
map()