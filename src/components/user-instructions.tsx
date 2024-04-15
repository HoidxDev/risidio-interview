export default function UserInstructions() {
    return (
        <div className='absolute hidden md:flex flex-col gap-2 px-5 py-5 bg-white rounded-2.5xl text-tertiary left-20vw bg-opacity-85 backdrop-blur-3xl font-poppins bottom-40'>
            <span>W : Forward</span>
            <span>S : Backward</span>
            <span>A : Turn Left</span>
            <span>D : Turn Right</span>
            <span>E : Upward</span>
            <span>R : Downward</span>
        </div>
    )
}
