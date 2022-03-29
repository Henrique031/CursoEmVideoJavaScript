// Maneira tradicional
function nomefunção(numeroRecebido) {
    let fatorial = 1
    for(let contador = numeroRecebido; contador > 1; contador-- ) { //(meu contador começando em número(5); enquanto o contador for maior que 1; ele vai perder 1--)
        fatorial *= contador // Meu fotorial =1  vai receber fatorial *(vezes) contador
    }
    return fatorial
}
console.log(nomefunção(5))

// 5!("5 fatorial é") = 5 x 4 x 3 x 2 x 1 = 120 (o fatorial de 5 é 120)