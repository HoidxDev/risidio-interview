import { ReactNode } from 'react'
import { UserBar } from './common/user-bar'

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
            <UserBar />
        </div>
    )
}
