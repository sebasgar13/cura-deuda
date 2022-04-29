import React from 'react'
import { QuitButtonProps } from '../interfaces/components'

export const QuitButton = ({press}:QuitButtonProps) => {
    return (
        <div onClick={press}>
            <svg width={50} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill='#eca09b' />
                <path d="M 20 20 L 80 80" fill="none" stroke="white" strokeWidth={20} />
                <path d="M 20 80 L 80 20" fill="none" stroke="white" strokeWidth={20} />
            </svg>
        </div>
    )
}
