import React,{useContext} from 'react'
import { EditContext } from '../../context/editContext';

const Footers = () => {
    const { approvedDetails } = useContext(EditContext)
    return ( 
        <>
            <footer className="bg-dark text-white-50">
                <div className="row no-gutters pt-5 pl-5 pr-5 mt-4 justify-content-center">
                    <div className="col-12 col-md-6">
                        {approvedDetails && approvedDetails.map((details) => (
                         <h8> <i className="fas fa-phone-square-alt" key={details._id}></i>&nbsp; Contact : {details.contact}</h8>
                        ))}
                    </div>
                    <div className="col-12 col-md-6">
                        <h8> <i className="fas fa-envelope"></i>&nbsp; Email : abhiru@gmail.com</h8>
                    </div>
                    <p className="mt-3">Developed by &copy; Team Abhiru</p>
                </div>
            </footer>
        </>
     );
}
 
export default Footers;