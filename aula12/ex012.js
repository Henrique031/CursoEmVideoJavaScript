var agora = new Date()
var hora = agora.getHours()
if (hora < 12) {
    console.log('Está de dia!')
}else if  (hora < 17) { //Condição aninhada
    console.log('Está de tarde!')
}else  {
    console.log('Está de noite!')
}