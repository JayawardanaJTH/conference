import React,{useContext,useState} from 'react'
import auth from '../../../services/authServices'
import { InputFields,Area } from '../../common/InputFields'
import {LButtons} from '../../common/Buttons'
import { EditContext } from '../../../context/editContext'
import { Alerts } from '../../common/Alerts'

const AddDetails = () => {
    const { details,EditDetails } = useContext(EditContext)
    const [page_title, setTitle] = useState(details[0].page_title)
    const [sub_title, setSubTitle] = useState(details[0].sub_title)
    const [email, setEmail] = useState(details[0].email)
    const [contact, setContact] = useState(details[0].contact)
    const [cover, setCover] = useState(details[0].cover)
    const [start, setStart] = useState(details[0].start)
    const [end, setEnd] = useState(details[0].end)
    const [venue, setVenue] = useState(details[0].venue)
    const [description, setDescription] = useState(details[0].description)
    const [approval, setApproval] = useState("pending")
    const [edited_by, setEdited] = useState(auth.getCurrentUserId)
    const [errors, setErrors] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();  
        const formData = new FormData()
            formData.append('page_title', page_title)
            formData.append('sub_title', sub_title)
            formData.append('email', email)
            formData.append('contact', contact)
            formData.append('cover', cover)
            formData.append('start', start)
            formData.append('end', end)
            formData.append('venue', venue)
            formData.append('description', description)
            formData.append('approval', approval)
            formData.append('edited_by', edited_by)
            const response = await EditDetails(formData,details[0]._id) 
            if (response.status === 400 || response.status === 404)
                setErrors(response.data)
      };
    return ( 
        <>
        <main role="main" id="about">
                    <form onSubmit={onSubmit}>
                        <div className="row text-white" style={{display: 'flex'}}>
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Page Title'
                            type = 'text'
                            value = {page_title}
                            placeholder = 'Page Title'
                           onChange = {(e) => setTitle(e.target.value)}
                        />
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Topic of the about section'
                            type = 'text'
                            value = {sub_title}
                            placeholder = 'Topic of the about section'
                            onChange = {(e) => setSubTitle(e.target.value)}
                        />   
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Email'
                            type = 'email'
                            value = {email}
                            placeholder = 'user@email.com'
                            onChange = {(e) => setEmail(e.target.value)}
                    />
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Contact'
                            type = 'number'
                            value = {contact}
                            placeholder = '0791234567'
                           onChange = {(e) => setContact(e.target.value)}
                        />
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Cover Image'
                            type = 'file'
                            placeholder = 'file'
                            onChange = {(e) => setCover(e.target.files[0])}
                        />   
                         
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Where'
                            type = 'text'
                            value = {venue}
                            placeholder = 'Where'
                            onChange = {(e) => setVenue(e.target.value)}
                        />         
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Start'
                            type = 'datetime-local'
                            value = {start}
                            placeholder = 'Start'
                            onChange = {(e) => setStart(e.target.value)}
                        />  
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'End'
                            type = 'datetime-local'
                            value = {end}
                            placeholder = 'End'
                            onChange = {(e) => setEnd(e.target.value)}
                        /> 
                         <Area
                            name = 'col-md-12 form-group'
                            label = 'Description'
                            type = 'text'
                            value = {description}
                            placeholder = 'Description'
                            onChange = {(e) => setDescription(e.target.value)}
                        />  
                        {errors && (
                        <Alerts  variant='danger' error={errors} />
                    )}   
                            <div className="col-md-6 form-group">
                                <br/>
                                <LButtons type='submit' name='btn btn-success' value='Save' />  
                            </div>

                        </div>
                    </form>
                </main>
        </>
     );
}
 
export default AddDetails;