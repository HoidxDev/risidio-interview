import { useState } from "react"
import IconButton from "./icon-button"

const dummy = [{
    name: 'Elizabeth',
    level: 12,
    point: 430
}]

export default function UserBar() {
    const user = dummy[0]
    const [mobileModal, setMobileModal] = useState(false)

    return (
        <div className='absolute z-50 flex items-center justify-center w-full h-20 px-10 lg:px-32 font-poppins bottom-10'>
            <div className="w-280 h-full bg-white rounded-2.5xl flex items-center">
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
                <div className="flex items-center justify-end gap-2 pr-4 lg:gap-4 lg:pr-7 grow">
                    <div onClick={() => setMobileModal(!mobileModal)} className="relative flex-col items-center justify-center hidden w-12 h-12 gap-1 border border-opacity-50 rounded-full cursor-pointer max-md:flex border-secondary">
                        {mobileModal && <div className="absolute border border-opacity-50 border-secondary w-24 flex flex-col py-4 items-center justify-center gap-2 rounded-2.5xl bg-white h-72 sm:h-56 bottom-18">
                            <IconButton className="" src="/assets/user-bar-icons/chat.svg" />
                            <IconButton className="" imageClass="w-6" src="/assets/user-bar-icons/backpack.png" />
                            <IconButton className="" imageClass="w-6" src="/assets/user-bar-icons/friends.png" />
                            <IconButton className="" src="/assets/user-bar-icons/bell.svg" />
                            <button className="items-center justify-center hidden px-1.5 py-1.5 text-xs font-semibold border border-opacity-50 rounded-full max-sm:flex lg:w-52 text-secondary border-secondary">Fast <br /> Travel</button>
                        </div>}
                        <div className="w-7 h-0.5 bg-secondary" />
                        <div className="w-7 h-0.5 bg-secondary" />
                        <div className="w-7 h-0.5 bg-secondary" />
                    </div>
                    <IconButton className="max-md:hidden" src="/assets/user-bar-icons/chat.svg" />
                    <IconButton className="max-md:hidden" imageClass="w-6" src="/assets/user-bar-icons/backpack.png" />
                    <IconButton className="max-md:hidden" imageClass="w-6" src="/assets/user-bar-icons/friends.png" />
                    <IconButton className="max-md:hidden" src="/assets/user-bar-icons/bell.svg" />
                    <button className="w-40 h-12 text-sm font-semibold border border-opacity-50 rounded-full max-sm:hidden lg:w-52 text-secondary border-secondary">Fast Travel</button>
                </div>
            </div>
        </div>
    )
}
