import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerFab } from '../styles'

export const FAB = () => {
    return (
        <ContainerFab>
            <Link to={"/"}>
                <svg width={50} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" fill='#d3e3f3' />
                    <path d="M 50 40 L 50 90" fill="none" stroke="white" strokeWidth={20} />
                    <circle cx="50" cy="20" r="5" fill='whiite' stroke="white" strokeWidth={10} />
                </svg>
            </Link>
        </ContainerFab>
    )
}
