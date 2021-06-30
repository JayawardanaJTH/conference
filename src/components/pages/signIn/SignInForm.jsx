import React,{useState,useContext}  from 'react'
import { UserContext } from '../../../context/userContext';
import { InputFields } from '../../common/InputFields';
import { LButtons } from '../../common/Buttons';
import { Alerts } from '../../common/Alerts';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    const { userSignIn } = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();  
        const response = await userSignIn({email,password})
        if (response.status === 400 || response.status === 404)
            setErrors(response.data.error)
        if(response.status === 400 || response.status === 404 && response.data.error === 'Please make your payment before login')
            localStorage.setItem('id', response.data._id)
        if(response.type === 'reviewer' && response.token)
            window.location =  "/documents"
        if(response.type === 'editor'  && response.token)
            window.location =  "/edit"
        if(response.type === 'admin'  && response.token)
            window.location =  "/admin"
        if(response.role === 'user'  && response.token)
            window.location =  "/workshop"
      };
    return ( 
        <>
            <div className="form signin">
                <form onSubmit={onSubmit}>
                    <h5>Sign In</h5>
                    <InputFields 
                        name = 'form-group'
                       label = 'Email'
                       type = 'email'
                       placeholder = 'user@email.com'
                       onChange = {(e) => setEmail(e.target.value)}
                    />
                    <InputFields 
                    name = 'form-group'
                        label = 'Password'
                        type = 'password'
                        placeholder = 'password'
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    {errors && (
                        <Alerts  variant='danger' error={errors} />
                        )}
                        { errors && errors === 'Please make your payment before login' && (
                                 window.location =  "/payment"
                        ) }
                    <br/>
                    <LButtons type='submit' name='btn btn-dark' value='Login' />
                    <a href="#" className="form-text text-dark">Forgot Password</a>
                </form>
            </div>
        </>
     );
}
 
export default SignInForm;