import * as THREE from 'three';

export default class ParticleMap {
  constructor() {
    //console.log(THREE);
    const {scene, camera, renderer} = this.generateContext();
    this.attachRenderer(renderer);
    this.attachCube(scene);
    this.initCamera(camera);

    const render = this.render.bind(this, scene, camera, renderer);

    render();
    this.render.call(this, scene, camera, renderer)
  }

  generateContext() {
    return {
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
      renderer: new THREE.WebGLRenderer()
    };
  }

  attachRenderer(renderer) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
  }

  attachCube(scene) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  }

  initCamera(camera) {
    camera.position.z = 5;
  }

  render(scene, camera, renderer) {
    requestAnimationFrame(this.render.bind(this, scene, camera, renderer));

    //cube.rotation.x += 0.05;
    //cube.rotation.y += 0.05;

    renderer.render(scene, camera);
  }

}

