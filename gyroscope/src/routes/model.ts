import * as THREE from 'three';

let ballMesh: THREE.Mesh;
let ballSpeed: number = 0;

let rotOffset = {
    alpha: 0,
    beta: 0,
    gamma: 0
}

export function initWebgl(canvas: HTMLCanvasElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true, canvas });
    renderer.setSize(400, 400);

    // const geometry = new THREE.BoxGeometry(0.14, 0.3, 0.02);
    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x67B7D1 });
    ballMesh = new THREE.Mesh(geometry, material);
    scene.add(ballMesh);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 2);
    scene.add(light);

    camera.position.z = 0.5;

    const animate = () => {
        ballMesh.position.setX(ballMesh.position.x + ballSpeed);
        renderer.render(scene, camera);

        requestAnimationFrame(animate);
    };

    animate();
}

function setOffset(alpha: number, beta: number, gamma: number) {
    rotOffset.alpha = alpha;

    rotOffset.beta = beta;

    rotOffset.gamma = gamma;

//    180 -180 -90
}

function computeObjectiveTilt(alpha: number, beta: number, gamma: number): number {
    // Convert degrees to radians
    const gammaRad = THREE.MathUtils.degToRad(gamma);

    // Compute the weighted combination of beta and alpha based on gamma
    const objectiveTilt = Math.cos(gammaRad) * beta + Math.sin(gammaRad) * alpha;
    return objectiveTilt;
}


function animateBall() {
    ballMesh.position.setY(ballMesh.position.y + ballSpeed);
}

let allowMove = false;

export function setRotation(alpha: number, beta: number, gamma: number, reset: boolean, orientation: number | undefined) {
    // if (reset) setOffset(alpha, beta, gamma);

    // alpha = alpha - rotOffset.alpha;
    // beta = beta - rotOffset.beta;
    // gamma = gamma - rotOffset.gamma;
    //
    // // Convert degrees to radians
    // const alphaRad = THREE.MathUtils.degToRad(alpha);
    // const gammaRad = THREE.MathUtils.degToRad(-gamma);
    if (orientation === undefined && !allowMove) {
        ballSpeed = 0;
    } else {
        allowMove = true;
        const betaRad = THREE.MathUtils.degToRad(Math.min(Math.max(-90, beta), 90));

        ballSpeed = betaRad / 40
    }

    // Convert Euler angles to quaternion and set to the mesh
    // const euler = new THREE.Euler(0, betaRad, 0, 'YXZ');
    // const quaternion = new THREE.Quaternion().setFromEuler(euler);
    // phoneMesh.quaternion.copy(quaternion);
}

