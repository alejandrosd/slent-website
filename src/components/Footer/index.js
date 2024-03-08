import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterLinksWraper,
    FooterLink,
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    SocialIconLink, 
    SocialIcons, 
    WebsiteRights } from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
  return (
    <div>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWraper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Acerca de </FooterLinkTitle>
                                <FooterLink to="/signin">Acerca de nosotros</FooterLink>
                                <FooterLink to="/signin">Como funciona</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Trabaja con nosotros</FooterLink>
                                <FooterLink to="/signin">Aliados</FooterLink>
                                <FooterLink to="/signin">Términos de Servicio</FooterLink>                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Acerca de </FooterLinkTitle>
                                <FooterLink to="/signin">Acerca de</FooterLink>
                                <FooterLink to="/signin">Como funciona</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Trabaja con nosotros</FooterLink>
                                <FooterLink to="/signin">Aliados</FooterLink>
                                <FooterLink to="/signin">Términos de Servicio</FooterLink>                            
                        </FooterLinkItems>
                    </FooterLinksWraper>

                    <FooterLinksWraper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Acerca de </FooterLinkTitle>
                                <FooterLink to="/signin">Acerca de</FooterLink>
                                <FooterLink to="/signin">Como funciona</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Trabaja con nosotros</FooterLink>
                                <FooterLink to="/signin">Aliados</FooterLink>
                                <FooterLink to="/signin">Términos de Servicio</FooterLink>                            
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Acerca de </FooterLinkTitle>
                                <FooterLink to="/signin">Acerca de</FooterLink>
                                <FooterLink to="/signin">Como funciona</FooterLink>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Trabaja con nosotros</FooterLink>
                                <FooterLink to="/signin">Aliados</FooterLink>
                                <FooterLink to="/signin">Términos de Servicio</FooterLink>                            
                        </FooterLinkItems>
                    </FooterLinksWraper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>SLent</SocialLogo>
                        <WebsiteRights>SLent © {new Date().getFullYear()} Todos los derechos reservados.</WebsiteRights>
                        <SocialIcons>

                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    </div>
  )
}

export default Footer