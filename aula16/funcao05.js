// RECURSIVIDAE (Chamar uma função dentro de uma função)
function fatorial (n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 X 4 X 3 X 2 X 1 "5 fatorial é a maesma coisa que 5 x 4 x 3 x 2 x 1"
5! = 5 X 4!

n1 = n x (n-1)! "O fatorial de n é sempre n - 1 faltorial"
1! = 1 "forial de 1 é 1"
*/