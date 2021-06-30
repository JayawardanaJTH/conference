import React,{useContext} from 'react'
import { Buttons } from '../../common/Buttons'
import { EditContext } from '../../../context/editContext'
import Cards from '../../common/Cards'

const DetailsApprovals = () => {
    const { pendingDetails,approveDetails,rejectDetails } = useContext(EditContext)

    const columns = [
        { key: "1", path: "page_title", label: "Page title" },
        { key: "2", path: "sub_title", label: "Sub title" },
        { key: "3", path: "email", label: "E-mail" },
        { key: "4", path: "contact", label: "Contact" },
        { key: "5", path: "start", date: "Start" },
        { key: "6", path: "end", date: "End" },
        { key: "7", path: "venue", label: "Venue" },
        { key: "8", path: "description", label: "Description" },
        { key: "9", path: "edited_by.username", label: "Editor" },
        { key: "10",  label: "" , 
        content : (details) => (
        <>
          <Buttons 
          onSubmit={() => approveDetails(details)}
          value="Approve"
          variant="success"
          />
          <Buttons 
          onSubmit={() => rejectDetails(details)}
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
                <Cards data={pendingDetails} columns={columns}/>
            </main>
        </>
     );
}
 
export default DetailsApprovals;