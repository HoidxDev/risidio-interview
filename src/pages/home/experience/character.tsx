import { useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
    nodes: {
        OccupyGuy_Body_Mesh: THREE.SkinnedMesh
        OccupyGuy_BrowsAnimGeo: THREE.SkinnedMesh
        OccupyGuy_EyesAnimGeo: THREE.SkinnedMesh
        OccupyGuy_MouthAnimGeo: THREE.SkinnedMesh
        mixamorigHips: THREE.Bone
    }
    materials: {
        Character_Rasta_boy_body: THREE.MeshPhysicalMaterial
        Rasta_Brows_MAT1: THREE.MeshPhysicalMaterial
        Rasta_Eyes_MAT1: THREE.MeshPhysicalMaterial
        Rasta_Mouth_MAT1: THREE.MeshPhysicalMaterial
    }
}

export function Character(props: JSX.IntrinsicElements['group']) {
    const character = useRef<THREE.Group>(null)
    const { nodes, materials, animations } = useGLTF('/models/character.glb') as GLTFResult
    const { actions } = useAnimations(animations, character)

    useFrame(({ camera }) => {
        if (character.current) {
            const position = new THREE.Vector3();
            const quaternion = new THREE.Quaternion();

            // Decompose the character's world matrix to get global position and rotation
            character.current.matrixWorld.decompose(position, quaternion, new THREE.Vector3());

            // Calculate the backward direction from the character
            const backward = new THREE.Vector3(0, 0, 1); // Default backward direction
            backward.applyQuaternion(quaternion); // Rotate the backward vector by the character's rotation
            backward.normalize();

            // Position the camera behind the character
            const cameraDistance = 1.5; // Distance behind the character
            const cameraHeight = 2; // Height above the character's base position
            const cameraOffset = backward.multiplyScalar(cameraDistance).add(new THREE.Vector3(0, cameraHeight, 0));
            const cameraPosition = position.clone().add(cameraOffset);

            // Update camera position smoothly
            camera.position.lerp(cameraPosition, 0.05); // Use lerp for smoother transition

            // Make the camera look at the character slightly from above
            const lookAtPosition = position.clone().add(new THREE.Vector3(0, 1, 0)); // Adjust y value to offset the height
            camera.lookAt(lookAtPosition);
        }
    });

    useGSAP(() => {
        const walkingAnimation = actions['Armature|mixamo.com|Layer0.001'];

        if (character.current && walkingAnimation) {
            const tl = gsap.timeline()

            tl.call(() => {
                walkingAnimation.fadeIn(0.5).play();
                return;
            }, [], '+=0.5');
            tl.to(character.current.position, {
                x: 4.5,
                z: 8,
                duration: 5,
                ease: "none"
            })
                .to(character.current.rotation, {
                    y: -1.2,
                    duration: 1,
                    ease: "none"
                }, "<")
                .to(character.current.rotation, {
                    y: 0,
                    duration: 0.5,
                    ease: "none"
                }, "-=0.5")
                .to(character.current.position, {
                    z: 7,
                    duration: 1,
                    ease: "none"
                }, "<")
                .to(character.current.position, {
                    y: 2.65,
                    duration: 6,
                    ease: "none"
                })
                .to(character.current.position, {
                    z: 2,
                    duration: 7,
                    ease: "none"
                }, "<")
                .to(character.current.rotation, {
                    y: -1.5,
                    duration: 0.5,
                    ease: "none"
                },)
                .to(character.current.position, {
                    x: 7.5,
                    duration: 2,
                    ease: "none"
                }, "<")
                .to(character.current.rotation, {
                    y: -3.1,
                    duration: 0.5,
                    ease: "none"
                }, "-=0")
                .to(character.current.position, {
                    z: 9.25,
                    duration: 7.25,
                    ease: "none"
                }, "<")
                .to(character.current.rotation, {
                    y: -1.5,
                    duration: 0.5,
                    ease: "none"
                }, "-=0")
            tl.call(() => {
                walkingAnimation.paused = true;
                return;
            }, [], '+=0')
        }
    })

    return (
        <group scale={0.8} position={[0, -1.12, 10]} ref={character} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, Math.PI / 1

                ]} scale={0.01}>
                    <skinnedMesh
                        name="OccupyGuy_Body_Mesh"
                        geometry={nodes.OccupyGuy_Body_Mesh.geometry}
                        material={materials.Character_Rasta_boy_body}
                        skeleton={nodes.OccupyGuy_Body_Mesh.skeleton}
                    />
                    <skinnedMesh
                        name="OccupyGuy_BrowsAnimGeo"
                        geometry={nodes.OccupyGuy_BrowsAnimGeo.geometry}
                        material={materials.Rasta_Brows_MAT1}
                        skeleton={nodes.OccupyGuy_BrowsAnimGeo.skeleton}
                    />
                    <skinnedMesh
                        name="OccupyGuy_EyesAnimGeo"
                        geometry={nodes.OccupyGuy_EyesAnimGeo.geometry}
                        material={materials.Rasta_Eyes_MAT1}
                        skeleton={nodes.OccupyGuy_EyesAnimGeo.skeleton}
                    />
                    <skinnedMesh
                        name="OccupyGuy_MouthAnimGeo"
                        geometry={nodes.OccupyGuy_MouthAnimGeo.geometry}
                        material={materials.Rasta_Mouth_MAT1}
                        skeleton={nodes.OccupyGuy_MouthAnimGeo.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/character.glb')

