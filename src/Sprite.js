export default class Sprite {
  constructor ({ image, sliceWidth = 64, sliceHeight = 64, currentAnimation = 'Idle', animations = [] }) {
    this.image = new Image();
    this.image.src = image;

    this.sliceWidth = sliceWidth;
    this.sliceHeight = sliceHeight;
    this.currentAnimation = currentAnimation;
    this.animations = animations;
  }

  changeAnimationTo (animation) {
    this.currentAnimation = animation;
  }

  draw ({ deltaTime, context }) {
    let t = new Date().getTime();
    let anim = this.animations.find(animation => animation.name === this.currentAnimation);

    if (t > anim.animationTime) {
      anim.frame++;
      anim.animationTime = t + 1000 / anim.speed;
    }

    if (anim.frame > anim.startX + anim.endX - 1) {
      anim.frame = anim.startX;
    }

    context.drawImage(
      this.image,
      anim.frame * this.sliceWidth, anim.startY * this.sliceHeight, this.sliceWidth, this.sliceHeight,
      0, 0, this.sliceWidth, this.sliceHeight
    );
  }
}
