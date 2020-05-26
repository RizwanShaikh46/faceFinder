import React from 'react'
import './Nav.css'
const Nav = (props) => {
    return (
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
         <button style={{color: '#ff7b73'}} className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink ma3 shadow-2 bg-color'>Sign out</button>
        </div>

    )
}

export default Nav