import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavBarContainer,
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks, 
  NavBtn, 
  NavBtnLink
} from './navbarElements';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav); }, []);

const toggleHome = () => {
  scroll.scrollToTop();
}

  return (
    <> 
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogo to='/' onClick={toggleHome}>SLent</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to='about' 
                    smooth={true} duration={500} spy={true} 
                    exact='true' offset={-80} activeClass='active'
                    >Acerca de</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="discover"
                    smooth={true} duration={500} spy={true} 
                    exact='true' offset={-80} activeClass='active'
                    >Simula tu Crédito</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="services"
                    smooth={true} duration={500} spy={true} 
                    exact='true' offset={-80} activeClass='active'
                    >Servicios</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="signup"
                    smooth={true} duration={500} spy={true} 
                    exact='true' offset={-80} activeClass='active'
                    >Registrate</NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Ingresa</NavBtnLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
    
  )
}

export default NavBar