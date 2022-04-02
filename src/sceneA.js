import SceneC from './sceneC.js';
export default class SceneA extends Phaser.Scene {
  constructor() {
    super({
      key: 'SceneA',
    });
  }
  preload() {}
  create() {
    let graphics = this.add.graphics();
    graphics.fillStyle(0xff3300, 1);
    graphics.fillRect(100, 200, 600, 300);
    graphics.fillRect(100, 100, 100, 100);

    this.add.text(120, 110, 'A', { font: '96px Courier', fill: '#000000' });

    this.scene.add('SceneC', new SceneC());

    /*
      this.scene.bringToTop('Scene?') *Encima de todo*
      this.scene.sendToBack('Scene?'); *Atras de todo*
      this.scene.moveUp('Scene?'); *un paso arriba*
      this.scene.bringToTop('Scene?'); *un paso atras*
      this.scene.moveBelow('SceneB', 'SceneC'); *Encima de una Scena*
      this.scene.moveBelow('SceneB', 'SceneC'); *Abajo de una Scena*
    */
  }
  update(time, delta) {}
}
