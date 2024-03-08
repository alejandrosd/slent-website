import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper,
    SidebarMenu,
    SidebarLink, 
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>Acerca de</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Simula tu Crédito</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Servicios</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Registrate</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="signin">Ingresar</SidebarRoute>  
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default Sidebar;