/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
/*global Phaser:true*/

var game = null;
var gameState = {
    preload: function (game) {
        //game.load.image('logo', 'phaser.png');
    },
    create: function (game) {
        //var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        //logo.anchor.setTo(0.5, 0.5);
    }
};

window.onload = function() {
    var transparent = false;
    var antialias = true;
    game = new Phaser.Game(
        640, 480,
        Phaser.AUTO,
        'game-div',
        gameState,
        transparent,
        antialias);
};