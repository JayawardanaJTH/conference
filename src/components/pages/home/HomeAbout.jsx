import React,{useContext} from 'react'
import Moment from "react-moment"
import { EditContext } from '../../../context/editContext';

const HomeAbout = () => {
    const { approvedDetails } = useContext(EditContext)
    console.log("🚀 ~ file: HomeAbout.jsx ~ line 6 ~ HomeAbout ~ approvedDetails", approvedDetails)
    return ( 
        <>
        <div className="container-fluid about" id="about">
        <div className="about-topic">
            <h5>What is <span>Conferancy 2021 ?</span></h5>
        </div>
        <div className="about-desc">
            <p>
                Description......
            </p>
        </div>
        {approvedDetails && approvedDetails.map((details) => (
            <div className="row about-box" key={details._id}>
            <div className="col-sm-6 about-where">
                <span>Where:</span>
                <p>
                    <span className="where">{details.venue}</span><br/>
                  
                </p>
            </div>
            <div className="col-sm-6 about-when">
                <span>When:</span>
                <p>
                    <span className="when"> start :<Moment format="HH:mm">{details.start}</Moment></span><br/>
                    <span className="when"> End :<Moment format="HH:mm">{details.end}</Moment></span><br/>
                </p>
            </div>
                <p>{details.description}</p>
        </div>
        ))}
        
    </div>
        </>
     );
}
 
export default HomeAbout;