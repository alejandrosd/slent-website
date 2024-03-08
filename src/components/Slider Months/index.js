import React, {useState} from 'react'
import styled from 'styled-components';
import SliderComponent from '../Slider Base';

const SliderMonths = (props) => {

    const [value, setValue] = useState(6);

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    var interesEA=33;
    var administracion=15500;
    var iva_value=19;

    function iva(a){
      return ((a*iva_value)/100);
    }
    function interes(a,b){
      return (a/b);
    }

    function cuota(a,b){
      var mensual=Math.round(a/b);
      mensual = mensual + administracion + iva(administracion);
      return mensual;
    }

    const formatterPeso = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })

  return (
    <div>
        <SliderContainer>
          <h3>Numero de Cuotas: {value} meses</h3>
          <SliderComponent value={value} handleChange={handleChange} min={1} max={12} step={1}
          />
        </SliderContainer>
        <PanelContainer>
        <h1>Cuanto vas a Pagar?</h1>
          <PanelItem>
            <h3>Valor a desembolsar : </h3>
            <div>__  {formatterPeso.format(props.myFunc)}</div>
          </PanelItem>
          <PanelItem>
            <h3>Tasa de interés : </h3>
            <div>__  {interesEA}% EA - {interes(interesEA,12)}% EM</div>
          </PanelItem>

          <PanelItem>
            <h3>Valor Administración: </h3>
            <div>__ {formatterPeso.format(administracion)}</div>
          </PanelItem>

          <PanelItem>
            <h3>IVA (19%): </h3>
            <div>__ {formatterPeso.format(iva(administracion))}</div>
          </PanelItem>

          <PanelItem>
            <h3>Valor cuota : </h3>
            </PanelItem>
          <PanelItemCuota>
            <h1> {formatterPeso.format(cuota(props.myFunc,value))}</h1>
          </PanelItemCuota>
        </PanelContainer>
        
        

        
        
    </div>
  )
}

export default SliderMonths

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`
const PanelContainer = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 80px;
`
const PanelItem = styled.div`
display: flex;
align-items: left;
flex-direction: row;
justify-content: left;
margin-top: 20px;
`

const PanelItemCuota = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 15px;
`