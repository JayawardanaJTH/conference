import React,{useContext} from 'react'
import { DocumentContext } from '../../../context/documentContext'
import Items from '../../common/Items'
import NavBars from '../../common/NavBars'
import Footers from '../../common/Footers'
import './Research.css'

const Research = () => {
    const { approvedResearches } = useContext(DocumentContext)
    return ( 
        <>
            <div className="research-body">
            <NavBars/>
            <div className="row justify-content-center mt-3">
                <h5 className="col-12 title text-center text-capitalize font-weight-bold text-white">Research Papers</h5>
                <span>
                    <p className="text-white">This papers will discuss on the conference.</p>
                </span>  
            </div>
                <div className="container p-2">
                    <div className="row align-items-center justify-content-center p-5 p-md-3">
                        <Items data={approvedResearches} />
                    </div>
                </div>
            </div>
            <Footers />
        </>
     );
}
 
export default Research;