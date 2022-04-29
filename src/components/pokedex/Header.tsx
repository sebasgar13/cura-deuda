import { Link } from "react-router-dom";
import { MenuHamb } from "./MenuHamb"

interface Props {
    showMenu: () => void;
}

export const Header = ({showMenu}:Props) => {
    return (
        <>
            <Link to={'search'}>
                <svg width={50} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" fill='#71c55b' />
                    <path d="M 50 50 L 90 90" fill="none" stroke="white" strokeWidth={20} />
                    <circle cx="50" cy="50" r="30" fill='#71c55b' stroke="white" strokeWidth={10} />
                </svg>
            </Link>
            <MenuHamb showMenu={showMenu} />
            <svg style={{width: '100%', height: '20px'}} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0 95 H 40 L 60 5 H 100 " fill="none"  stroke='#222' strokeWidth={6} />
            </svg>
        </>
    )
}
