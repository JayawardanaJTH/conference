import React,{useContext} from 'react'
import Moment from "react-moment"
import { EditContext } from '../../../context/editContext';

const HomeEvents = () => {
    const { approvedEvents } = useContext(EditContext)
    return ( 
        <>
          <div className="mt-2 events" id="events">
        <div className="event-topic">
            <h5 className="text-white">Events</h5>
        </div>
        <div className="row events-list text-white">
           {approvedEvents && approvedEvents.map((event) => (
            <div className="col-sm-4 event" key={event._id}>
                <div className="event-box">
                    <div className="time">
                        <span>Time</span>
                        <h5>Start : <Moment format="HH:mm">{event.start}</Moment></h5>
                        <h5>End : <Moment format="HH:mm">{event.end}</Moment></h5>
                    </div>
                    <div className="desc">
                        <span>Description</span>
                        <p>{event.description}
                        <br/>
                            <span className="speaker-name">Speaker: {event.speaker}</span>
                        </p>
                    </div>
                </div>
            </div>
           ))}
        </div>
    </div>
        </>
     );
}
 
export default HomeEvents;