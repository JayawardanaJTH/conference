import React  from 'react'

const LoginRegistrationCard = ({ onClick }) => {

    return ( 
        <>
            <div className="box">
                <div className="in-box signin-button">
                    <h5>Already have an account</h5>
                    <button onClick = {onClick}>Sign in</button>
                </div>
                        
                <div className="in-box signup-button">
                    <h5>Don't have an account</h5>
                    <button onClick = {onClick}>Sign up</button>
                </div>
            </div>
        </>
     );
}
 
export default LoginRegistrationCard;