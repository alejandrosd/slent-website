import React, {useState} from 'react';
import { Button } from '../ButtonElement';
import SliderComponent from '../Slider Base';

import styled from 'styled-components';
import SliderMonths from '../Slider Months';

import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2,
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img //,Button
} from './InfoElements'

const SimulationSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,
description, buttonLabel, img, alt, primary, dark,dark2,lightColor}) => {

    const [value, setValue] = useState(500000);

  const handleChange = (event) => {
    setValue(event.target.value)
  }


    const formatterPeso = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })
  return (
    <div>
     <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart = {imgStart}>
            <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description} </Subtitle>
                    <BtnWrap>
                        <Button to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
            </Column1>
            <Column2 lightColor={lightColor}>
                <ImgWrap>
                <SliderContainer>
                    <h3>Valor del prestamo:  {formatterPeso.format(value)}</h3>
                    <SliderComponent value={value} handleChange={handleChange} min={200000} max={3000000} step={50000}/>

                    <SliderMonths myFunc={value}/>
                    </SliderContainer>
                </ImgWrap>
            </Column2>
        </InfoRow>
       </InfoWrapper>  
      </InfoContainer>   
    </div>
  )
}

export default SimulationSection

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`