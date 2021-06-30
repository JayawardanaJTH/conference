import React,{useState}  from 'react'
import LoginRegistrationCard from './LoginRegistrationCard'
import './LoginRegistration.css'
import SignIn from '../signIn/SignIn'
import SignUp from '../signUp/SignUp'
import NavBars from '../../common/NavBars'
import Footers from '../../common/Footers'

const LoginRegistration = () => {
    const [status, setStatus] = useState(false);

    const onStatus = (s) => {
        setStatus(s)
      };
  
    return ( 
        <>
        <NavBars />
            { !status ? (
                <div className="sign-body">
                    <div className="main">
                        <LoginRegistrationCard onClick = {() => onStatus(true)}/>
                    <div className="forms">
                        <SignIn />
                    </div>
                    </div>
                </div>
                ) : (
                <div className="sign-body active">
                    <div className="main">
                    <LoginRegistrationCard onClick = {() => onStatus(false)}/>
                <div className="forms active">
                    <SignUp />
                    </div>
                    </div>
                </div>
            ) }
             <Footers />
        </>
     );
}
 
export default LoginRegistration;