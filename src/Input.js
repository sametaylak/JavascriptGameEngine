export default class Input {
  constructor () {
    this.downKeys = [];

    document.onkeydown = (e) => {
      this.downKeys[e.code] = true;
    }

    document.onkeyup = (e) => {
      this.downKeys[e.code] = false;
    }
  }

  isKeyDown (key) {
    return this.downKeys[key];
  }
}
