import IconButton from "./icon-button"

const dummy = [{
    name: 'Elizabeth',
    level: 12,
    point: 430
}]

export const UserBar = () => {
    const user = dummy[0]


    return (
        <div className='absolute flex items-center justify-center w-full h-20 font-poppins bottom-8'>
            <div className="w-7/12 h-full bg-white rounded-2.5xl flex items-center">
                <div className="relative flex items-center justify-center rounded-full right-4 w-28 h-28">
                    <div className="absolute z-50 w-6 h-6 border-4 rounded-full right-2 bottom-1 bg-online border-hite border-3" />
                    <img className="z-40 w-24 rounded-full" src="/assets/profile-picture/user-1.webp" />
                    <div className="absolute z-20 w-full h-full border-8 border-red-500 rounded-full"></div>
                    <div className="absolute z-30 w-full h-full rounded-full clip-path" style={{
                        clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 0% 100%)',
                        WebkitClipPath: 'polygon(50% 50%, 100% 35%, 100% 100%, 50% 100%)',
                        background: 'white',
                        transform: 'rotate(-72deg)',
                    }} />
                </div>
                <div>
                    <h4 className="font-semibold text-primary">Hi {user.name}</h4>
                    <h5 className="flex items-center gap-1 font-medium text-tertiary">Level {user.level} | <strong>{user.point}</strong> <img className="w-5 h-5" src="/assets/user-bar-icons/coin.png" /></h5>
                </div>
                <div className="flex justify-end gap-4 pr-7 grow">
                    <IconButton src="/assets/user-bar-icons/chat.svg" />
                    <IconButton imageClass="w-6" src="/assets/user-bar-icons/backpack.png" />
                    <IconButton imageClass="w-6" src="/assets/user-bar-icons/friends.png" />
                    <IconButton src="/assets/user-bar-icons/bell.svg" />
                    <button className="h-12 text-sm font-semibold border border-opacity-50 rounded-full w-52 text-secondary border-secondary">Fast Travel</button>
                </div>
            </div>
        </div>
    )
}
