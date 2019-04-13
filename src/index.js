import Engine from './Engine';
import GameObject from './GameObject';
import Sprite from './Sprite';
import male from './assets/male.png'

let engine;

window.onresize = () => {
  engine.resize();
}

window.onload = () => {
  engine = new Engine();

  let maleObject = new GameObject({
    name: 'Random Male Character',
    x: 32,
    y: 32
  });

  let maleSprite = new Sprite ({
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

  maleObject.add(maleSprite);
  engine.add(maleObject);

  engine.update = (deltaTime) => {
    if (engine.input.isKeyDown('KeyW')) {
      maleObject.translate({ x: 0, y: -50 * deltaTime });
      maleObject.sprite().changeAnimationTo('UpWalk');
    }
    else if (engine.input.isKeyDown('KeyA')) {
      maleObject.translate({ x: -50 * deltaTime, y: 0 });
      maleObject.sprite().changeAnimationTo('LeftWalk');
    }
    else if (engine.input.isKeyDown('KeyS')) {
      maleObject.translate({ x: 0, y: 50 * deltaTime });
      maleObject.sprite().changeAnimationTo('DownWalk');
    }
    else if (engine.input.isKeyDown('KeyD')) {
      maleObject.translate({ x: 50 * deltaTime, y: 0 });
      maleObject.sprite().changeAnimationTo('RightWalk');
    } else {
      maleObject.sprite().changeAnimationTo('Idle');
    }
  }
}
