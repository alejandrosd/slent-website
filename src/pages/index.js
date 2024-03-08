import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
// import SliderComponent from '../components/Slider Base';

import styled from 'styled-components';
// import SliderMonths from '../components/Slider Months';
import SimulationSection from '../components/SimulatorSection';
import { homeObjFour, homeObjFive } from '../components/SimulatorSection/Data';

const Home = () => {

  // const [value, setValue] = useState(500000);

  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    // const formatterPeso = new Intl.NumberFormat('es-CO', {
    //   style: 'currency',
    //   currency: 'COP',
    //   minimumFractionDigits: 0
    // })

  return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection></HeroSection>
        <InfoSection {...homeObjOne} />
        
        {/* 
        <InfoSection {...homeObjTwo} />

        <SliderContainer>
          
          <h3>Valor del prestamo:  {formatterPeso.format(value)}</h3>
          <SliderComponent value={value} handleChange={handleChange} min={200000} max={3000000} step={50000}/>

          <SliderMonths myFunc={value}/>
        </SliderContainer>
        */}
        <SimulationSection {...homeObjFour}/>
        <SimulationSection {...homeObjFive}/>
                
        <Services />
        <InfoSection {...homeObjThree} />
        <Footer />
    </div>
  )
}

export default Home;

// const SliderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
//   margin-top: 40px;
// `