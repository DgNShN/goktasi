input.onButtonPressed(Button.A, function () {
    gemi.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.B, function () {
    gemi.change(LedSpriteProperty.X, -1)
})
let gemi: game.LedSprite = null
gemi = game.createSprite(2, 4)
let göktası = game.createSprite(randint(0, 4), 0)
let hız = 200
basic.forever(function () {
    göktası.change(LedSpriteProperty.Y, 1)
    basic.pause(randint(900, hız))
    if (göktası.isTouching(gemi)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        game.gameOver()
    }
    if (göktası.get(LedSpriteProperty.Y) == 4) {
        game.addScore(1)
        göktası.set(LedSpriteProperty.Y, 0)
        göktası.set(LedSpriteProperty.X, randint(0, 4))
        music.playTone(523, music.beat(BeatFraction.Eighth))
    }
    if (game.score() == 5) {
        hız = 300
    } else if (game.score() == 10) {
        hız = 500
    } else if (game.score() == 15) {
        hız = 700
    }
})
