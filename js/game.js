/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/
/*global Phaser:true*/

var game = null;
var map = null;
var layers = {};
var gameState = {
    preload: function (game) {
        // Load the area01 map and its tiles
        game.load.tilemap('area01', 'data/map/area01.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('area01_level_tiles', 'data/img/map/area01_level_tiles.png');
    },
    create: function (game) {
        game.stage.backgroundColor = '#787878';
        
        // Create the map and associate the tiles with it
        map = game.add.tilemap('area01');
        map.addTilesetImage('area01_level_tiles', 'area01_level_tiles');
        
        // Create all of the layers from the tileset,
        // but set visible to false if the name has 'collision' in it.
        map.layers.forEach(function (layerData) {
            var layer = map.createLayer(layerData.name);
            layer.visible = !/collision/i.test(layerData.name);
            layers[layerData.name] = layer;
        });
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