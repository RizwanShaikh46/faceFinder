import React from 'react'
import './ImageContainer.css'

var address = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
const ImageContainer = (props) => {
    return (
      <div className='image-container br2 ba dark-gray b--black-10 w-100 w-50-m  center shadow-5' style={{background:'white',borderRadius:'10px',padding:'5px',marginBottom:'10px'}}>
          <img src={address} alt='face'/>
          
      </div>
    )
}

export default ImageContainer