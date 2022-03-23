function contar() { //Vai disparar o método contar.

    let inicio = window.document.getElementById('txti') //input number
    let fim = window.document.getElementById('txtf') //input number
    let passo = window.document.getElementById('txtp') //input number
    let res = window.document.getElementById('res') //res: Resultado
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //Se algum desses campos, não estiver com dados vai aparcer um alerta de errro
        window.alert('[ERRO] algum campo não preenchido!')
    } else {
        res.innerHTML = 'Contando: ' //Transformou o preparando a contagem... em contando:
        let i = Number(inicio.value) //Converter inicio para número //Vou pegar inicio e transformar para número
        let f = Number(fim.value) //Converter fim para número
        let p = Number(passo.value) //Converter passo para número
        if (i < f) {
            //Contagem crescente
            for(let contador = i; contador <= f; contador += p) { //entrar contador, recebede o valor digitado pelo usuário (início), aí vem o teste verdadeiro ou falso (c <= fim) se isso for verdadeiro, ele vai encrementar Mais a informação que o usuário comentou (passo)
                res.innerHTML += `${contador} \u{1F449}` //   U+1F911 do site veio assim
            } 
        } else {
            //Contagem regressiva
            for(let contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} \u{1F449}` // => emoj dedo apontando
            }
        }
        res.innerHTML += `\u{1F3C1}` // =>Bandeira no final de todas repetições
    }
}

//EXEMPLO=> for(let c= 1;c <= 10; c += 2) { console.log(c)}
// let contador = i // => i (inicio) é o valor que o usuário vai digitar 
// while (contador <= f) { // =>f (fiim) é informação que o usuario vai digitar 
//     contador += p // => p (passo) é a informão que o usuario vai digitar