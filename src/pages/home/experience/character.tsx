import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
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

type MovementKeys = {
    forward: boolean;
    backward: boolean;
    left: boolean;
    right: boolean;
    upward: boolean;
    downward: boolean;
};

export function Character(props: JSX.IntrinsicElements['group']) {
    const character = useRef<THREE.Group>(null)
    const { nodes, materials, animations } = useGLTF('/models/character.glb') as GLTFResult
    const { actions } = useAnimations(animations, character)
    const [move, setMove] = useState<MovementKeys>({
        forward: false, backward: false, left: false, right: false, upward: false, downward: false
    });

    // Following camera to character
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

    // Key handling functions
    function handleKeyDown(e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
            case 'w': setMove(m => ({ ...m, forward: true })); break;
            case 's': setMove(m => ({ ...m, backward: true })); break;
            case 'a': setMove(m => ({ ...m, left: true })); break;
            case 'd': setMove(m => ({ ...m, right: true })); break;
            case 'e': setMove(m => ({ ...m, upward: true })); break;
            case 'r': setMove(m => ({ ...m, downward: true })); break;
        }
    }

    function handleKeyUp(e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
            case 'w': setMove(m => ({ ...m, forward: false })); break;
            case 's': setMove(m => ({ ...m, backward: false })); break;
            case 'a': setMove(m => ({ ...m, left: false })); break;
            case 'd': setMove(m => ({ ...m, right: false })); break;
            case 'e': setMove(m => ({ ...m, upward: false })); break;
            case 'r': setMove(m => ({ ...m, downward: false })); break;

        }
    }

    // Function to detect if any movement keys are pressed
    const isMoving = () => {
        return move.forward || move.backward || move.left || move.right || move.upward || move.downward;
    };

    // Setup and cleanup of event listeners
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);


    // Animation and movement logic within the frame loop
    useFrame((_, delta) => {
        if (character.current) {
            const speed = 2;

            if (move.forward) character.current.translateZ(-delta * speed);
            if (move.backward) character.current.translateZ(delta * speed);
            if (move.left) character.current.rotateY(delta * speed);
            if (move.right) character.current.rotateY(-delta * speed);
            if (move.upward) {
                character.current.position.y += delta * speed;
            }
            if (move.downward) {
                character.current.position.y -= delta * speed;
            }

            if (isMoving()) {
                // Start or resume the animation with fadeIn and play
                if (actions['Armature|mixamo.com|Layer0.001'] && !actions['Armature|mixamo.com|Layer0.001'].isRunning()) {
                    actions['Armature|mixamo.com|Layer0.001'].play();
                    actions['Armature|mixamo.com|Layer0.001'].paused = false
                }
            } else {
                // Pause the animation when the character is not moving
                if (actions['Armature|mixamo.com|Layer0.001'] && actions['Armature|mixamo.com|Layer0.001'].isRunning()) {
                    actions['Armature|mixamo.com|Layer0.001'].paused = true;
                }
            }
        }
    });

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

