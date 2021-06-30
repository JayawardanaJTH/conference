import React,{useState,useContext}  from 'react'
import { UserContext } from '../../../context/userContext'
import { InputFields,RadioButtons } from '../../common/InputFields'
import { LButtons } from '../../common/Buttons'
import { Alerts } from '../../common/Alerts'
import { DocumentContext } from '../../../context/documentContext'

const SignUpForm = () => {
    const { userSignUp } = useContext(UserContext)
    const { AddDocument } = useContext(DocumentContext)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [type, setType] = useState("")
    const [topic, setTopic] = useState("")
    const [file, setFile] = useState("")
    const [errors, setErrors] = useState("")

    const  onSubmit = async (e) => {
        e.preventDefault()
        const user = await userSignUp({ username,email,password,type })
        if(user.data.type === 'attendee' && user.status === 200 ){
            localStorage.setItem('id', user.data._id);
            window.location =  "/payment";
        }
        else if( user.data.type != 'attendee' && user.status === 200 ){
            const formData = new FormData()
            formData.append('file', file)
            formData.append('topic', topic)
            if(type === 'researcher') formData.append('type', 'research-paper')
            if(type === 'presenter') formData.append('type', 'workshop-proposal')
            formData.append('upload_by', user.data._id)
            AddDocument(formData) 
        }
        
        else if (user.status === 400 || user.status === 404)
        setErrors(user.data)
      };

    return ( 
        <>
            <div className="form signup">
                <form onSubmit={onSubmit}>
                    <h5>Sign Up</h5>
                     <InputFields 
                     name = 'form-group'
                       label = 'Username'
                       type = 'text'
                       placeholder = 'Username'
                       onChange = {(e) => setUsername(e.target.value)}
                    />

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
                       placeholder = 'Password'
                       onChange = {(e) => setPassword(e.target.value)}
                    />
                    <InputFields 
                    name = 'form-group'
                       label = 'Re-Password'
                       type = 'password'
                       placeholder = 'Re-enter Password'
                       onChange = {(e) => setRePassword(e.target.value)}
                    />

                    <RadioButtons
                        label = 'Attendee'
                        name ='radioOption'
                        value = 'attendee'
                        onChange = {(e) => setType(e.target.value)}
                    />

                    <RadioButtons
                        label = 'Workshop Presenter'
                        name ='radioOption'
                        value = 'presenter'
                        onChange = {(e) => setType(e.target.value)}
                    />

                    <RadioButtons
                        label = 'Researcher'
                        name ='radioOption'
                        value = 'researcher'
                        onChange = {(e) => setType(e.target.value)}
                    />

                    {type != 'attendee' && (
                        <>
                            <InputFields 
                            name = 'form-group'
                            label = 'Topic'
                            type = 'text'
                            placeholder = 'Topic'
                            onChange = {(e) => setTopic(e.target.value)}
                            />
        
                            <InputFields 
                            name = 'form-group'
                            label = 'File'
                            type = 'file'
                            placeholder = 'File'
                            onChange = {(e) => setFile(e.target.files[0])}
                            />
                        </>
                    )}
                    
                    {errors && (
                        <Alerts  variant='danger' error={errors} />
                    )}
                   
                    <LButtons type='submit' name='btn btn-info' value='Register' /> 
                </form>
            </div>
        </>
     );
}
 
export default SignUpForm;                            