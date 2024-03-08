import React from 'react'
import styled from 'styled-components'

function SliderComponent ({value, handleChange, min, max, step}) {
  return (
    <Container>
        <Slider type="range" defaultValue={value} onChange={handleChange} min={min} max={max} step={step}/>
    </Container>
  )
}

export default SliderComponent;


  


const Container = styled.div `
    display: grid;
    place-items: center;
    margin-left: 10px;
    margin-top: 10px;
`

const Slider = styled.input`
    -webkit-appearence: none;
    width: 350px;
    height: 24px;
    border-radius: 4px;
    background-color: #e1e5e9;
    outline: none;
    opacity: 1;
    --webkit-transition: 0.2s;
    transition: opacity 0.2s;

    ::-webkit-slider-thumb { //boton del slider
        border-radius: 50%;
    }

    ::-moz-range-thumb { //linea del slider
        width: 300px;
    }
`