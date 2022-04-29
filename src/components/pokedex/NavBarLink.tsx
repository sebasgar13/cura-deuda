import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarLinkProps } from '../../interfaces/components'

export const NavBarLink = ({route, title}:NavBarLinkProps) => {
    return (
        <Link to={route}><p style={{color: 'white', textDecoration: 'none', textAlign: 'right'}}>{title}</p></Link>
    )
}
