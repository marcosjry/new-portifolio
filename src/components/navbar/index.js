import React from 'react'
import './navbar.css';
import * as S from './styled'
import logo from '../../images/logo-marcos.png'
import {Link} from 'react-scroll'

export default function NavBar() {
    
    return (
        
        <nav className="Navbar">
            <div className="LogoNav">
                <img src={logo} alt="Logo" width="60" height="60"/>
                </div>
                <ul className="SpaceLi">
                <li><Link to="Section2" spy={true} smooth={true}><S.LinkMenu >Sobre Mim</S.LinkMenu></Link></li>
                </ul>
        </nav>
    )

}