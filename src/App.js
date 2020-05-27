import React, {useState} from 'react';
import './App.css';
import Particles from 'react-particles-js'
import Nav from './components/Nav'
import Logo from './components/Logo'
import Rank from './components/Rank'
import Input from './components/Input'
import ImageContainer from './components/ImageContainer'
import Clarifai from 'clarifai'


const app = new Clarifai.App({
    apiKey: 'b50e63c45dfd40a2bda482b60a244e4a'
})


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
const [link, setLink] = useState('')
const [box, setBox] = useState({})

const onInputChange = (event) => {
      setLink(event.target.value)
  }

  const CalculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
        
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  const displayFaceBox = (box) => {
      setBox(box)
  }
const onPress = (event) => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", link).then(
    function(response) {
      displayFaceBox(CalculateFaceLocation(response))
     
    },
    function(err) {
      // there was an error
    }
  );
}
     
    if (link.length === 0 ) {
    return (<div>
     <Particles params = {particlesOptions} className='particles'/>
     <Nav/>
     <Logo/>
     <Rank/>
     <Input onInputChange={onInputChange} onPress={onPress}/>
     </div>)
     }else {

      return (
          <div>
         <Particles params = {particlesOptions} className='particles'/>
         <Nav/>
         <Logo/>
         <Rank/>
         <Input onInputChange={onInputChange} onPress={onPress}/>
         <ImageContainer link = {link} box={box}/>
         </div> )
     }

      
    
    
}
export default App