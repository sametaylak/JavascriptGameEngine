import Sprite from './Sprite';

export default class GameObject {
  constructor ({ name, x, y }) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.childrens = [];
  }

  sprite () {
    return this.childrens.filter(child => child instanceof Sprite)[0];
  }

  translate ({ x, y }) {
    this.x += x;
    this.y += y;
  }

  add (children) {
    this.childrens.push(children);
  }

  draw ({ deltaTime, context }) {
    context.save();
    context.translate(this.x, this.y);

    for (let children of this.childrens) {
      children.draw({ deltaTime, context });
    }

    context.restore();
  }
}
