import * as THREE from 'three';
import FrequencyMap from './components/FrequencyMap';
import ParticleMap from './components/ParticleMap';

void function init() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const frequencyMap = new FrequencyMap();

  return new ParticleMap(scene, camera, renderer);
}();

