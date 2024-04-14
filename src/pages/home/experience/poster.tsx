import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { PosterProps } from '../../../types/poster'
import { useEffect, useRef, useState } from 'react'
import store from '../../../store'

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
    const posterRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
    }, [hovered]);

    return (
        <group>
            <mesh
                ref={posterRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                onClick={() => store.popupOpen = true}
                name={name}
                castShadow
                receiveShadow
                geometry={nodes.bohemianRhapsody_interaction_v1.geometry}
                material={materials[material as keyof typeof materials]}
                position={position}
                rotation={rotation}
                scale={scale}
            >
                {hovered && <meshBasicMaterial map={materials[material as keyof typeof materials].map} color={[3, 1, 3]} side={THREE.DoubleSide} toneMapped={false} />}
                <mesh scale={[2.4, 2.9, 2]} position={[0.01, 0.05, 0]} rotation-x={Math.PI * 0.5} >
                    <ringGeometry args={[0.95, 1.07, 4, 5, 2.36]} />
                    <meshBasicMaterial side={THREE.DoubleSide} color={'#B59B84'} toneMapped={false} />
                </mesh>
                {hovered &&
                    <mesh scale={[2.4, 2.9, 1]} position={[0.01, 0.1, 0]} rotation-x={Math.PI * 0.5} >
                        <ringGeometry args={[0.98, 1.03, 4, 5, 2.36]} />
                        <meshStandardMaterial emissiveIntensity={hovered ? 5 : 0} side={THREE.DoubleSide} color={[1, 1, 3]} emissive={[1, 1, 3]} toneMapped={false} />
                    </mesh>
                }
            </mesh>
        </group>
    )
}
