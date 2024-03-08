import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon,
    ServicesH2, 
    ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <div>
        <ServicesContainer id="services">
            <ServicesH1>Servicios</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2> Servicio 1</ServicesH2>
                    <ServicesP> Servicio a Servicio 3 Servicio 3</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2> Servicio 2 </ServicesH2>
                    <ServicesP> Servicio b Servicio 3 Servicio 3</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2> Servicio 3 </ServicesH2>
                    <ServicesP> Servicio c Servicio 3 Servicio 3</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    </div>
  )
}

export default Services