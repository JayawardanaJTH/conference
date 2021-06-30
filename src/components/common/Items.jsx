import React from 'react'
import {LButtons} from './Buttons'

const Items = ({data}) => {
console.log(" data", data)
    return ( 
        <>
        {data && data.map((item,index) => (
            <div className=" item row bg-dark rounded col-md-5 text-white align-self-center m-1 p-2" key={index}>
                <div className="col-md-6 text-center text-md-left">
                    <h6>{item.topic}</h6>
                </div>
                <div className="col text-center text-md-right">
                <a href={`http://localhost:4000/${item.file}`} target="_blank"> 
                    <LButtons type='button' name='btn btn-light font-weight-bold' value='View' />
                </a>
                </div>
            </div>
        ))}
        </>
     );
}
 
export default Items;