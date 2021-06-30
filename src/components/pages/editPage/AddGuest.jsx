import React,{useContext,useState} from 'react'
import auth from '../../../services/authServices'
import { InputFields,Area } from '../../common/InputFields'
import {LButtons} from '../../common/Buttons'
import { EditContext } from '../../../context/editContext'
import { Alerts } from '../../common/Alerts'

const AddGuest = () => {
    const { AddGuests } = useContext(EditContext)
    const [name, setName] = useState("")
    const [designation, setDesignation] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [edited_by, setEdited] = useState(auth.getCurrentUserId)
    const [errors, setErrors] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();  
        const formData = new FormData()
            formData.append('name', name)
            formData.append('designation', designation)
            formData.append('image', image)
            formData.append('description', description)
            formData.append('edited_by', edited_by)
            
            const response = await AddGuests(formData) 
            console.log("🚀 ~ file: AddGuest.jsx ~ line 27 ~ onSubmit ~ response", response)
            if (response.status === 400 || response.status === 404)
                setErrors(response.data)
      };

    return ( 
        <>
            <main role="main" id="guest">
                <form onSubmit={onSubmit}>
                    <div className="row text-white" style={{display: 'flex'}}>
                    <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Name'
                            type = 'text'
                            placeholder = 'Name'
                           onChange = {(e) => setName(e.target.value)}
                        />
                            <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Designation'
                            type = 'text'
                            placeholder = 'Designation'
                            onChange = {(e) => setDesignation(e.target.value)}
                        />  
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'User Photo'
                            type = 'file'
                            placeholder = 'file'
                            onChange = {(e) => setImage(e.target.files[0])}
                        /> 
                         <Area
                            name = 'col-md-6 form-group'
                            label = 'Description'
                            type = 'text'
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
 
export default AddGuest;