import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        bohemianRhapsody_interaction_v1: THREE.Mesh
    }
}

interface PosterProps {
    material: THREE.MeshStandardMaterial,
    name: 'string',
    position: [0, 0, 0]
}

export const Poster = ({ material, name, position }: PosterProps) => {
    const { nodes } = useGLTF('/models/lobby.glb') as unknown as GLTFResult;

    return (
        <mesh
            name={name}
            castShadow
            receiveShadow
            geometry={nodes.bohemianRhapsody_interaction_v1.geometry}
            material={material}
            position={position}
            rotation={[1.572, 0, 1.573]}
            scale={0.29}
        />
    )
}
