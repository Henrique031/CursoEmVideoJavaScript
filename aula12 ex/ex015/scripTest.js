function verificar() {
    var data = new Date() //pegar data atual do meu pc
    var ano = data.getFullYear() //pegar o ano atual com 4 digitos ex2001
    var fano = document.getElementById('txtano') //FormularioAno //meu id do HTML 'txtano'
    var res = document.querySelector('div#res')
    var imagem = document.querySelector('div#imagem')
    if (fano.value.length == 0 || Number(fano.value) > ano) { //se o usuario não digitar nada, vai
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //Formulário sexo //getElementsByName('radsex')[0]ou[1] vai deixar já selecionado homem[0] ou melher[0]
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        // img.setAttribute('id', 'foto') //eu mudei a 'img' para 'foto'
        if (fsex[0].checked) { //Verifivou se o sexo// se o que tiver marcado for o fsex[0] é sinal que ele é masculino
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
            img.setAttribute('src', 'fotoBebeMenino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoHomemJovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoHomemAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotoHomemIdoso.png')    
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'fotoBebeMenina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'fotoMulherJovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotoMulherAdulto.png')
            }   else {
                //Idoso    
                img.setAttribute('src', 'fotoMulherIdoso.png')
            }
        }   
        res.style.textAlign = 'center' //Vai centralizar o texto da div
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        imagem.appendChild(img) //appendChild "Vou adicionar um elemento, que é um elemento img"
        imagem.style.textAlign = 'center'
    }
}
    
    
