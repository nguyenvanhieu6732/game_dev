import * as THREE from 'three';
import { createEngine } from './core/engine.js';
import { createCube } from './entities/cube.js';
import './style.css';

const { scene, camera, renderer } = createEngine();

const entities = [createCube()];
entities.forEach((e) => scene.add(e.mesh));

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
    const dt = clock.getDelta();
    entities.forEach((e) => e.update(dt));
    renderer.render(scene, camera);
});
