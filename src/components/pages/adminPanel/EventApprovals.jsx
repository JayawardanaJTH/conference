import React,{useContext} from 'react'
import { Buttons } from '../../common/Buttons'
import { EditContext } from '../../../context/editContext'
import Cards from '../../common/Cards'

const EventApprovals = () => {
    const { pendingEvents,approveEvent,rejectEvent } = useContext(EditContext)

    const columns = [
        { key: "1", path: "speaker", label: "Speaker" },
        { key: "2", path: "topic", label: "Topic" },
        { key: "3", path: "start", date: "Start" },
        { key: "4", path: "end", date: "End" },
        { key: "5", path: "description", label: "Description" },
        { key: "6", path: "edited_by.username", label: "Editor" },
        { key: "7",  label: "" , 
        content : (event) => (
        <>
          <Buttons
          onSubmit={() => approveEvent(event)}
          value="Approve"
          variant="success"
          />
          <Buttons 
          onSubmit={() => rejectEvent(event)}
          value="Reject"
          variant="danger"
          />
        </>
        ),
      },
      ]

    return ( 
        <>
            <main role="main">
                <div className="row justify-content-center">
                  <h5 className="text-white">Pending Events : {pendingEvents.length}</h5>
                </div>
                <Cards data={pendingEvents} columns={columns}/>
            </main>
        </>
     );
}
 
export default EventApprovals;