import React, {useState} from 'react'


const Register = (props) => {

    const [onSendEmail, setOnSendEmail] = useState('')
    const [onSendPassword, setOnSendPassword] = useState('')
    const [onSendName, setOnSendName] = useState('')

    const onNameChange = (event) => {
        setOnSendName(event.target.value)
    }
   const onEmailChange = (event) => {
     setOnSendEmail(event.target.value)
   } 
   
   const onPasswordChange = (event) => {
     setOnSendPassword(event.target.value)
   }
   
   const onSubmitButton = () => {
     fetch('http://localhost:3000/register',{
       method: 'post',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
         name: onSendName,    
         email: onSendEmail,
         password: onSendPassword
       })
     }).then(response => response.json()).then(user => {
       if (user) {
           props.loadUser(user)
         props.onRouteChange('home')
       }
     }) 
     
   }

    return (<div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={() => props.onRouteChange('signin')} style={{ color: '#ff7b73' }} className='f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hot-pink ma3 shadow-2 bg-color'>Sign In</button>
        </div>
          
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input
                                onChange={onNameChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="text"
                                name="name"
                                id="name"

                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                onChange={onEmailChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"

                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                onChange={onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"

                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={onSubmitButton}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Register"
                        />
                    </div>
                </div>
            </main>
        </article>

    </div>
    )
}

export default Register