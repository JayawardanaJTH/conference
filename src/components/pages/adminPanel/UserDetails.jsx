import React,{useContext} from 'react'
import Moment from "react-moment"
import { UserContext } from '../../../context/userContext';

const UserDetails = () => {
    const { users } = useContext(UserContext)
    
    return ( 
        <>
        <main role="main">
                    <div className="row justify-content-center">
                        <h5 className="text-white">Total registered : {users.length}</h5>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 justify-content-center">
                        {users.map((user) => (
                        <div className="col-md-4 col-6 mb-4">
                            <div className="card bg-secondary">
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">Name : {user.username}</li>
                                        <li className="list-group-item">Type : {user.type}</li>
                                        <li className="list-group-item">Email : {user.email}</li>
                                        <li className="list-group-item">Registered date : <Moment format="D MMM YYYY">{user.createdAt}</Moment></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        ))}  
                    </div>
                </main>
        </>
     );
}
 
export default UserDetails;