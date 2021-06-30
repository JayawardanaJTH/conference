import React,{useContext} from 'react'
import { Buttons } from '../../common/Buttons'
import { EditContext } from '../../../context/editContext'
import Cards from '../../common/Cards'

const GuestApprovals = () => {
    const { pendingGuests,approveGuest,rejectGuest } = useContext(EditContext)
    console.log("🚀 ~ file: GuestApprovals.jsx ~ line 8 ~ GuestApprovals ~ pendingGuests", pendingGuests)

    const columns = [
        { key: "1", path: "name", label: "Guest" },
        { key: "2", path: "designation", label: "Designation" },
        { key: "3", path: "description", label: "Description" },
        { key: "4", path: "edited_by.username", label: "Editor" },
        { key: "5",  label: "" , 
        content : (guest) => (
        <>
          <Buttons 
          onSubmit={() => approveGuest(guest)}
          value="Approve"
          variant="success"
          />
          <Buttons 
          onSubmit={() => rejectGuest(guest)}
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
                  <h5 className="text-white">Pending Guests : {pendingGuests.length}</h5>
                </div>
                <Cards data={pendingGuests} columns={columns}/>
            </main>
        </>
     );
}
 
export default GuestApprovals;