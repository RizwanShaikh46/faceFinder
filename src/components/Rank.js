import React from 'react'

const Rank  = (props) => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'20px'}}>
        <p style={{fontWeight:'bold',fontSize:'20px'}}>{`${props.name}, your rank is `} <span style={{fontSize: '4rem'}}>{props.entries}</span></p>
        </div>
    )
}

export default Rank 