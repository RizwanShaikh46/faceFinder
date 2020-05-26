import React from 'react';
import './App.css';
import Particles from 'react-particles-js'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Rank from './components/Rank'
import Input from './components/Input'
import ImageContainer from './components/ImageContainer'

const particlesOptions = {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}




function App() {
    return ( <div>
     <Particles params = {particlesOptions} className='particles'/>
     <Nav/>
     <Logo/>
     <Rank/>
     <Input/>
      <ImageContainer/> 
    </div>
    )
}
export default App