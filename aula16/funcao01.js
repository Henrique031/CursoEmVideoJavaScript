function função(MeuParametro) {
   if (MeuParametro%2==0){
       return 'par'
   } else {
       return 'ímpar'
   }
}
let res = função(2); //( Esse 11 é MeuParametro, que vai ser jogado lá para cima (MeuParametro)) // chamando a function (lá em cima)(nome da função "função")
console.log(res);