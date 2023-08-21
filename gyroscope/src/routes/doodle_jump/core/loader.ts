import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {Mesh} from "three";

// @ts-ignore
const loader = new GLTFLoader();

export function loadModel(path): Promise<Mesh> {
    return new Promise((res, rej) => {
        loader.load(path, function (gltf) {
            res(gltf.scene)
        }, undefined, function (error) {
            console.error(error);
            rej()
        });
    })
}
