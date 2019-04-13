import GameObject from './GameObject';
import Sprite from './Sprite';
import male from './assets/male.png'

export default class Player extends GameObject {
  constructor ({ name, x, y }) {
    super({ name, x, y });

    let playerSprite = new Sprite ({
      image: male,
      sliceWidth: 64,
      sliceHeight: 64,
      currentAnimation: 'Idle',
      animations: [
        { name: 'Idle', startX: 0, endX: 1, startY: 2, speed: 10, frame: 0, animationTime: new Date().getTime() },
        { name: 'UpWalk', startX: 1, endX: 8, startY: 0, speed: 10, frame: 0, animationTime: new Date().getTime() },
        { name: 'LeftWalk', startX: 1, endX: 8, startY: 1, speed: 10, frame: 0, animationTime: new Date().getTime() },
        { name: 'DownWalk', startX: 1, endX: 8, startY: 2, speed: 10, frame: 0, animationTime: new Date().getTime() },
        { name: 'RightWalk', startX: 1, endX: 8, startY: 3, speed: 10, frame: 0, animationTime: new Date().getTime() }
      ]
    });

    this.add(playerSprite);
  }
}