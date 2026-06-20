scene.onOverlapTile(SpriteKind.Player, assets.tile`win2`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
    game.setGameOverMessage(true, "YOU WON!!")
    game.setGameOverScoringType(game.ScoringType.None)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
    game.setGameOverMessage(false, "GAME OVER!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(58, 0))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverPlayable(false, music.melodyPlayable(music.powerDown), false)
    game.setGameOverMessage(false, "GAME OVER!")
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`Level1`)
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f d d d d d d f . . . . 
    . . . . d 1 f d d f 1 d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d f f f f d d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . 6 6 d d 6 6 . . . . . 
    . . . . 8 9 7 8 8 7 9 8 . . . . 
    . . . . d 9 8 7 7 8 9 d . . . . 
    . . . . d 9 8 6 6 8 9 d . . . . 
    . . . . . 7 6 7 7 6 7 . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . d d . . d d . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 12))
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 110), music.PlaybackMode.UntilDone)
})
