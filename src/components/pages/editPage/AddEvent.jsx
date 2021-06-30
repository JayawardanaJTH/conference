import React,{useContext,useState} from 'react'
import { ToastStore } from 'react-toasts'
import auth from '../../../services/authServices'
import { InputFields,Area } from '../../common/InputFields'
import {LButtons} from '../../common/Buttons'
import { EditContext } from '../../../context/editContext'
import { Alerts } from '../../common/Alerts'

const AddEvent = () => {
    const { AddEvents } = useContext(EditContext)
    const [speaker, setSpeaker] = useState("")
    const [topic, setTopic] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [description, setDescription] = useState("")
    const [edited_by, setEdited] = useState(auth.getCurrentUserId)
    const [errors, setErrors] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();  
        const response = await AddEvents({ speaker,topic,start,end,description,edited_by }) 
        console.log("🚀 ~ file: AddEvent.jsx ~ line 22 ~ onSubmit ~ response", response)

        if(response.status === 200 )
        ToastStore.success("Event add Successfully");
        else if (response.status === 400 || response.status === 404)
            setErrors(response.data)
      };
    return ( 
        <>
        <main role="main" id="event">
                <form onSubmit={onSubmit}>
                        <div className="row text-white" style={{display: 'flex'}}>
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Speaker Name'
                            type = 'text'
                            placeholder = 'Speaker Name'
                           onChange = {(e) => setSpeaker(e.target.value)}
                        />
                         <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Topic'
                            type = 'text'
                            placeholder = 'Topic'
                           onChange = {(e) => setTopic(e.target.value)}
                        />
                            <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'Start'
                            type = 'datetime-local'
                            placeholder = 'Start'
                            onChange = {(e) => setStart(e.target.value)}
                        />  
                        <InputFields 
                            name = 'col-md-6 form-group'
                            label = 'End'
                            type = 'datetime-local'
                            placeholder = 'End'
                            onChange = {(e) => setEnd(e.target.value)}
                        /> 
                         <Area
                            name = 'col-md-12 form-group'
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
 
export default AddEvent;