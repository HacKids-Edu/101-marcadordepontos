input.onButtonPressed(Button.A, function () {
    JogadorAVenceu += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Total de rodadas:")
    basic.showNumber(JogadorAVenceu + (JogadorBVenceu + EmpateAB))
    basic.showString("Jogadores:")
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showNumber(JogadorAVenceu)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.showNumber(JogadorBVenceu)
    basic.pause(1000)
    basic.showString("Empates:")
    basic.showNumber(EmpateAB)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    EmpateAB += 1
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # # # .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    JogadorBVenceu += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})
let EmpateAB = 0
let JogadorBVenceu = 0
let JogadorAVenceu = 0
basic.clearScreen()
JogadorAVenceu = 0
JogadorBVenceu = 0
EmpateAB = 0
