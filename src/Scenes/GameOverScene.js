/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
import Phaser from 'phaser';
// import Player from '../Classes/Player';
import API from '../Objects/API';
import blue_button02 from '../Scenes/asset/blue_button02.png';
let spaceField

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  preload() {
    this.load.image('sky', 'assets/space.png');
    this.load.image('button', '../assets/ui/blue_button02.png');
  }

  create() {
    console.log('come on')
    this.spaceField = this.add.tileSprite(0, 0, 1600, 1400, 'sky')
    this.sys.game.globals.bgMusic.stop();
    // const user = this.sys.game.globals.model.userName;
    const user = 'Hillary';

    // const score = localStorage.getItem('score');
    const score = 120;

    localStorage.clear();
    // API.postScores(user, score);
    this.scoreText = this.add.text(
      200,
      250,
      `Hello ${user}, your score is: ${score}`,
      {
        fontFamily: 'monospace',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      },
    );

    // var style = {
    //   'background-color': 'white',
    //   'width': '220px',
    //   'height': '100px',
    //   'font': '48px Arial',
    //   'font-weight': 'bold'
    // };

    // let leaderBoard = this.add.image(270, 400, 'button');
    const style = `background: url(${blue_button02}); cursor:pointer; color: #fff;`;
    const leaderBoard = this.add.dom(270, 400, 'button', style, 'Scores');
    leaderBoard.scaleX = 3.5;
    leaderBoard.scaleY = 2;
    leaderBoard.addListener('click');

    leaderBoard.on('click', () => {
      // this.scene.start('LeaderBoard');
      console.log('leaderBoard')
    });

    const menu = this.add.dom(520, 400, 'button', style, 'Restart');
    menu.scaleX = 4;
    menu.scaleY = 2;
    menu.addListener('click');

    // menu.on('click', () => {
    //   this.scene.start('GameScene');
    // });
  }
}