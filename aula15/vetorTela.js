let valores = [8, 1 ,7, 4, 2 ,9]
valores.sort()
for(let pos=0; pos < valores.length; pos++) {
    console.log(`Á posição ${pos} tem o valor ${valores[pos]}`)
}


// Essa sintaxe só funciona em Arrys e objects
for(let pos in valores) { // Para(for) cada posição dentro(num) de num
    console.log()
}