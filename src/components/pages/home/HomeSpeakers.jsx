import React,{useContext} from 'react'
import { EditContext } from '../../../context/editContext';

const HomeSpeakers = () => {
    const { approvedGuests } = useContext(EditContext)
    return (  
        <>
        <div className="speakers mt-5 mb-5" id="speakers">
        <div className="speakers-topic">
            <h5 className="text-white">Who's speaking ?</h5>
        </div>
        <div className="row speakers-users p-4">
            {approvedGuests && approvedGuests.map((guest) => (
                <div className=" col-sm-4 mb-4" key={guest._id}>
                <div className="speaker-card speakers-user">
                    <img src={`http://localhost:4000/${guest.image}`} alt="speaker image" className="speaker-card-img-top" style={{}}/>
                    <div className="speaker-card-body p-1">
                        <h6 className="speaker-card-title">{guest.name}</h6>
                        <p className="speaker-card-text">{guest.designation}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
        </>
    );
}
 
export default HomeSpeakers;