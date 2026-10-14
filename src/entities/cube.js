import * as THREE from 'three';

export function createCube() {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshNormalMaterial());

    function update(dt) {
        mesh.rotation.x += 0.6 * dt;
        mesh.rotation.y += 0.6 * dt;
    }

    return { mesh, update };
}
