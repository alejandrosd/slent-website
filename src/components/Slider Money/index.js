import React, {useState} from 'react'
import styled from 'styled-components';
import SliderComponent from '../Slider Base';

const SliderMoney = () => {

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
        <SliderContainer>
        <h2>Valor del prestamo: {formatterPeso.format(value)}</h2>
          <SliderComponent value={value} handleChange={handleChange} min={200000} max={3000000} step={50000}/>
        </SliderContainer>
    </div>
  )
}

export default SliderMoney

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`