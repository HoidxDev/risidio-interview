import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { PosterProps } from './types'

type GLTFResult = GLTF & {
    nodes: {
        bohemianRhapsody_interaction_v1: THREE.Mesh
    }
    materials: {
        ['21jumpStreet_interaction_v1']: THREE.MeshStandardMaterial
        ['backToFuture_interaction_v1']: THREE.MeshStandardMaterial
        ['badBoys_interaction_v1']: THREE.MeshStandardMaterial
        ['bohemianRhapsody_interaction_v1']: THREE.MeshStandardMaterial
        ['fordVFerrari_interaction_v1']: THREE.MeshStandardMaterial
        ['gunShy_interaction_v1']: THREE.MeshStandardMaterial
        ['interstellar_interaction_v1']: THREE.MeshStandardMaterial
        ['kolya_interaction_v1']: THREE.MeshStandardMaterial
        ['lebanon_interaction_v1']: THREE.MeshStandardMaterial
        ['likeWater4Chocolate_interaction_v1']: THREE.MeshStandardMaterial
        ['madMaxFuryRoad_interaction_v1']: THREE.MeshStandardMaterial
        ['manOnFire_interaction_v1']: THREE.MeshStandardMaterial
        ['mr&MrsSmith_interaction_v1']: THREE.MeshStandardMaterial
        ['scriptBoard_interaction_v1']: THREE.MeshStandardMaterial
        ['theGodfather_interaction_v1']: THREE.MeshStandardMaterial
        ['theShining_interaction_v1']: THREE.MeshStandardMaterial
        ['Us movei poster']: THREE.MeshStandardMaterial
        ['blade runner']: THREE.MeshStandardMaterial
        ['the big lebowski']: THREE.MeshStandardMaterial
        ['planet of the apes']: THREE.MeshStandardMaterial
        ['empire strikes back']: THREE.MeshStandardMaterial
        ['fear & loathing']: THREE.MeshStandardMaterial
        ['21-Jump-Street interaction posters v1.002']: THREE.MeshStandardMaterial
        ['Back-To-The-Future interaction posters v1.002']: THREE.MeshStandardMaterial
        ['Bad-Boys interaction posters v1.002']: THREE.MeshStandardMaterial
        ['21jumpStreet_interaction_v1.001']: THREE.MeshStandardMaterial
        ['Ferrari interaction posters v1.002']: THREE.MeshStandardMaterial
        ['Gun-Shy interaction posters v1.002']: THREE.MeshStandardMaterial
        ['Koyla interaction posters v1.002']: THREE.MeshStandardMaterial
    }
}


export const Poster: React.FC<PosterProps> = ({ data: { material, name, position, scale, rotation } }) => {
    const { nodes, materials } = useGLTF('/models/lobby.glb') as unknown as GLTFResult;

    return (
        <mesh
            name={name}
            castShadow
            receiveShadow
            geometry={nodes.bohemianRhapsody_interaction_v1.geometry}
            material={materials[material as keyof typeof materials]}  // Type assertion
            position={position}
            rotation={rotation}
            scale={scale}
        />
    )
}
