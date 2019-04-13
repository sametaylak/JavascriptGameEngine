import Input from './Input'

export default class Engine {
  constructor () {
    this.gameObjects = [];
    this.input = new Input();

    this.canvas = document.createElement('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    document.body.appendChild(this.canvas);

    this.canvasContext = this.canvas.getContext('2d');

    this.lastTime = new Date().getTime();
    this.loop();
  }

  add (object) {
    this.gameObjects.push(object);
  }

  resize () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  loop () {
    let time = new Date().getTime();
    let deltaTime = (time - this.lastTime) / 1000;

    // Clear canvas every-loop
    this.canvasContext.fillStyle = '#303030';
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Updates from main program
    if (this.update)
      this.update(deltaTime);

    // Draw game objects
    // DeltaTime and Context passing to objects
    for (let gameObject of this.gameObjects) {
      gameObject.draw({ deltaTime, context: this.canvasContext });
    }

    this.lastTime = time;
    requestAnimationFrame(this.loop.bind(this));
  }
}
