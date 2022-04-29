import React from 'react'
import { Link } from 'react-router-dom'
import { NavBarLinkProps } from '../../interfaces/components'
import { useDispatch } from 'react-redux'
import {
    show
} from '../../features/menu/menuHambSlice';
import { NavBarText } from '../../styles';

export const NavBarLink = ({route, title}:NavBarLinkProps) => {
    const dispatch = useDispatch();
    return (
        <Link to={route} style={{textDecoration: 'none'}} onClick={() => dispatch(show())}><NavBarText>{title}</NavBarText></Link>
    )
}
