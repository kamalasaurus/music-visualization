import * as THREE from 'three';

export default class ParticleMap {
  constructor(scene, camera, renderer) {
    //console.log(THREE);
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);

    this.camera.position.z = 5;

    this.render = () => {
      requestAnimationFrame(this.render);

      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;

      this.renderer.render(this.scene, this.camera);
    };

    this.render();
  }
}

