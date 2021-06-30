import React,{useState} from 'react'
import Footers from '../../common/Footers'
import NavBars from '../../common/NavBars'
import AddDetails from './AddDetails'
import AddEvent from './AddEvent'
import AddGuest from './AddGuest'
import './EditPage.css'

const EditPage = () => {
    const [status, setStatus] = useState('guest');

    const navigateHandler = (data) => {
        setStatus(data)
    }
    return ( 
        <>
        <div className='edit-body'>

        <NavBars/>
    <div className="row justify-content-center mt-3">
        <h5 className="
          col-12
          title
          text-center text-capitalize
          font-weight-bold
          text-white
        ">
            Page Editor
        </h5>
    </div>
    <div className="container-fluid p-2 mt-3">
        <div className="row">

            <div className="col-md-3 col-lg-3">
                <nav id="sidebarMenu" className="rounded-right d-md-block collapse">
                    <ul className="nav flex-column">
                        <li className="nav-item" onClick={() => navigateHandler('guest')}>
                            <a className="nav-link" aria-current="page" ><i className="fas fa-users"></i>
                                &nbsp; Add guest speakers</a>
                        </li>
                        <li className="nav-item" onClick={() => navigateHandler('event')}>
                            <a className="nav-link" href="#"><i className="fas fa-calendar-alt"></i> &nbsp; Add events</a>
                        </li>
                        <li className="nav-item" onClick={() => navigateHandler('details')}>
                            <a className="nav-link" href="#"><i className="fas fa-file-alt"></i> &nbsp; Add details of the
                                site</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="col-md-9 col-lg-9">
                {status === 'guest' && (
                    <AddGuest />
                )}
                {status === 'event' && (
                    <AddEvent />
                )}
               {status === 'details' && (
                    <AddDetails />
                )}
            </div>
        </div>
    </div>
</div>
<Footers />
        </>
     );
}
 
export default EditPage;