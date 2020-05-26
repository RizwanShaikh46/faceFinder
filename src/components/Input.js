import React from 'react'
import './Input.scss'

const Input = (props) => {
    return (
        <div className='cool-input'>
            <input className="c-checkbox" type="checkbox" id="checkbox"/>
                <div className="c-formContainer">
                    <form className="c-form" action="">
                        <input className="c-form__input" placeholder="Enter url to detect face" type="text" />
                            <label className="c-form__buttonLabel" htmlFor="checkbox">
                                <button className="grow c-form__button" type="button"><span style={{color: 'white'}}>Send</span></button>
                            </label>
                            <label className="c-form__toggle" htmlFor="checkbox" data-title="Enter Url"></label>
  </form>
</div>
                </div>
    )
}

export default Input