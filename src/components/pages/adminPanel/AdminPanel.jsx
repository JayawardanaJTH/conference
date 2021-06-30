import React,{useState} from 'react'
import PaymentDetails from './PaymentDetails'
import DetailsApprovals from './DetailsApprovals'
import UserDetails from './UserDetails'
import GuestApprovals from './GuestApprovals'
import EventApprovals from './EventApprovals'
import NavBars from '../../common/NavBars'
import Footers from '../../common/Footers'
import './AdminPanel.css'

const AdminPanel = () => {
    const [status, setStatus] = useState('payment');

    const navigateHandler = (data) => {
        setStatus(data)
    }
    return ( 
        <>
        <div className="admin-body">
        <NavBars/>
    <div className="row justify-content-center mt-3">
        <h5 className="
          col-12
          title
          text-center text-capitalize
          font-weight-bold
          text-white
        ">
            Admin Panel
        </h5>
    </div>
    {/* <!-- Content --> */}

    <div className="container-fluid p-2 mt-3">
        <div className="row">
            <div className="col-md-2 col-lg-2">
                <nav id="sidebarMenu" className="rounded-right d-md-block collapse">
                    <ul className="nav flex-column">
                    {/* <li className="nav-item" onClick={() => navigateHandler('dashboard')}>
                            <a className="nav-link" aria-current="page" ><i className="fas fa-money-bill-wave-alt"></i>Dashboard</a>
                        </li> */}
                        <li className="nav-item" onClick={() => navigateHandler('payment')}>
                            <a className="nav-link" aria-current="page" ><i className="fas fa-money-bill-wave-alt"></i>Payment Details</a>
                        </li>
                        <li className="nav-item" onClick={() => navigateHandler('users')}>
                            <a className="nav-link" ><i className="fas fa-users"></i> User Details</a>
                        </li>
                        <li className="nav-item" onClick={() => navigateHandler('details')}>
                            <a className="nav-link" ><i className="fas fa-file-alt"></i> Details Approvals</a>
                        </li>
                        <li className="nav-item" onClick={() => navigateHandler('event')}>
                            <a className="nav-link" ><i className="fas fa-file-alt"></i> Event Approvals</a>
                        </li>
                        <li className="nav-item" onClick={() => navigateHandler('guest')}>
                            <a className="nav-link" ><i className="fas fa-file-alt"></i> Guest Approvals</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-md-10 col-lg-10">
                {status === 'payment' && (
                    <PaymentDetails/>
                )}

                {status === 'users' && (
                    <UserDetails/>
                )}

                {status === 'details' && (
                    <DetailsApprovals/>
                )}

                {status === 'event' && (
                    <EventApprovals/>
                )}

                {status === 'guest' && (
                    <GuestApprovals/>
                )}

                
            </div>
        </div>
    </div>
</div>
<Footers />
        </>
     );
}
 
export default AdminPanel;