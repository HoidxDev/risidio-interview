import { ReactNode } from 'react'
import UserBar from './common/user-bar'
import Popup from './popup'
import UserInstructions from './user-instructions'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
            <UserBar />
            <Popup />
            <UserInstructions />
        </div>
    )
}
