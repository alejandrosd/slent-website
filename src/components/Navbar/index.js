import React from 'react'
import {Nav, NavBarContainer, NavLogo} from './navbarElements'

const NavBar = () => {
  return (
    <div>
        <Nav>
            <NavBarContainer>
                <NavLogo to='/'>Slent</NavLogo>
            </NavBarContainer>
        </Nav>
    </div>
    
  )
}

export default NavBar