function tabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // Converteu num para uma variavel n com o valor agora de Number.
        let c = 1 
        tab.innerHTML = '' //Limpar a área de resultado após colocar um outro valor
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // Para o JS não tem inportancia, mais para o PHP
            tab.appendChild(item) //appenChild => Adicionar um elemento filho que vai ser o item
            c++
        }
    }
}

