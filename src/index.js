import Engine from './Engine';
import Player from './Player';

let engine;

window.onresize = () => {
  engine.resize();
}

window.onload = () => {
  engine = new Engine();

  let player = new Player({
    name: 'Player #1',
    x: 32,
    y: 32
  });

  engine.add(player);
  engine.update = (deltaTime) => {
    if (engine.input.isKeyDown('KeyW')) {
      player.translate({ x: 0, y: -50 * deltaTime });
      player.sprite().changeAnimationTo('UpWalk');
    }
    else if (engine.input.isKeyDown('KeyA')) {
      player.translate({ x: -50 * deltaTime, y: 0 });
      player.sprite().changeAnimationTo('LeftWalk');
    }
    else if (engine.input.isKeyDown('KeyS')) {
      player.translate({ x: 0, y: 50 * deltaTime });
      player.sprite().changeAnimationTo('DownWalk');
    }
    else if (engine.input.isKeyDown('KeyD')) {
      player.translate({ x: 50 * deltaTime, y: 0 });
      player.sprite().changeAnimationTo('RightWalk');
    } else {
      player.sprite().changeAnimationTo('Idle');
    }
  }
}
