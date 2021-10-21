// const LibraryScene = require('LibraryScene.js').LibraryScene;
// const BootScene = require('BootScene.js').BootScene;
import { LibraryScene } from "./LibraryScene.js";
// import { BootScene } from "./BootScene.js";
import { StudyScene } from "./StudyScene.js";

class BootScene extends Phaser.Scene {
  constructor() {
    super();
  }
  
  init() {

  }

  preload() {

  }

  create(i) {
    console.log('Welcome to BootScene', i);
    this.socket = io();
    this.registry.set('socket', this.socket);    
    this.scene.add('Library', new LibraryScene(), true);
    this.scene.start('LibraryScene')
    // , { counter : counter, socket : socket, prevScene : 'Boot'});    
  }

  update() {

  }
}

var config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 1280,
  height: 720,
  zoom: 3,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      },
      debug: true // set to true to view zones
    }
  }
};

var game = new Phaser.Game(config);
var i = 0
game.scene.add('Boot', new BootScene(), true)
game.scene.start('Boot', i)