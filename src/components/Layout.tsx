import React from 'react'
import Sidebar from './Sidebar'
interface Props {
    children: React.ReactNode
}
export default function Layout({ children }: Props) {
    return (
        <div className='flex flex-row mt-2'>
            <div className="w-1/4"><Sidebar /></div>
            <div className="w-3/4">{children}</div>
        </div>
    )
}
