import React from 'react'

const LoginButtons = ({setRightPanelActive}) => {
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h4 className='fs-1'>Welcome Back!</h4>
                    <p>To keep connected with us, please login with your personal info</p>
                    <button className="ghost" onClick={() => setRightPanelActive(false)}>
                        Sign In
                    </button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h4 className='fs-1'>Hello, Cartie!</h4>
                    <p>Enter your personal details and start your journey with us</p>
                    <button className="ghost" onClick={() => setRightPanelActive(true)}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginButtons
