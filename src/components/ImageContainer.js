import React from 'react'
import './ImageContainer.css'

var address = 'https://images.unsplash.com/photo-1519335337423-a3357c2cd12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
const ImageContainer = (props) => {
    return (
      <div className='image-container br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l center shadow-5' style={{background:'white',borderRadius:'10px',padding:'5px',marginBottom:'10px'}}>
          <img src={address} alt='face'/>
          
      </div>
    )
}

export default ImageContainer