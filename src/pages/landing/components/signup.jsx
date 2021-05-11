import React, { useRef } from 'react'
import '../../../App.css'

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
            <div className="card">
                <div className="cardBody">
                    <h2 className="text">Sign Up</h2>
                    <form action="">
                        <input className="signInput" placeholder="Email" type="email" ref={emailRef} required />
                        <input className="signInput" placeholder="Password" type="password" ref={passwordRef} required />
                        <input className="signInput" placeholder="Confirm password" type="password" ref={passwordConfirmRef} required />
                    </form>
                    <button className="signupButton" type="submit">Sign Up</button>
                </div>
            </div>
            <div>
                <h4 className="text">Already have an account? Log In</h4>
            </div>
        </>
    )
}

export default Signup;