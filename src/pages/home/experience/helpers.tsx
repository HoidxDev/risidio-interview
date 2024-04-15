import { Environment, OrbitControls } from "@react-three/drei";

export default function Helpers() {
    return (
        <>
            <Environment preset='sunset' />
            <OrbitControls />
        </>
    )
}
