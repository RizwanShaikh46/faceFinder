import React from 'react'
import Tilt from 'react-tilt'
import face from './assets/Logo/joke.png'
const Logo = (props) => {

    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}
    }>
        <Tilt className="Tilt tc shadow-5 br2"   options={{ max: 55 }} style={{ height: 160, width: 160, borderRadius: '20px' }} >
            <img className="Tilt-inner" src={face} alt='smiley-face'/>
        </Tilt>
        </div>
    )
}

export default Logo