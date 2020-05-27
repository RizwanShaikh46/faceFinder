import React from 'react'
import './ImageContainer.css'


const ImageContainer = ({link, box}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={link} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default ImageContainer