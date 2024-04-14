import * as THREE from 'three'

export type PosterProps = {
    data: {
        material: string;
        name: string;
        position: THREE.Vector3 | undefined;
        rotation: THREE.Euler | undefined;
        scale: number;
    };
  };
  
  