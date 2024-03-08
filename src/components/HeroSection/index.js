import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight
} from './HeroElements'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <div>
        <HeroContainer id="home">
            <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
              <HeroH1>Préstamos e inversiones entre personas a tasas justas</HeroH1>
              <HeroP>Registrate para obtener todos los beneficios</HeroP>
            <HeroBtnWrapper>
              <Button 
              to='signup' 
              onMouseEnter={onHover} 
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              
              smooth={true} duration={500} spy={true} 
              exact='true' offset={-80} activeClass='active'
              >¡Comienza Ahora! {hover ? <ArrowForward /> : <ArrowRight/> }
              </Button>
            </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </div>
  )
}

export default HeroSection;