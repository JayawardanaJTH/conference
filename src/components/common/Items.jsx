import React from 'react'
import LButtons from './Buttons'

const Items = ({data}) => {
console.log(" data", data)
    return ( 
        <>
        {data && data.map((item) => {
            <div className=" item row bg-dark rounded col-md-5 text-white align-self-center m-1 p-2">
                <div className="col-md-6 text-center text-md-left">
                    <h6>{item.topic}</h6>
                </div>
                <div className="col text-center text-md-right">
                    {/* <button type="button" className="btn btn-light font-weight-bold">View</button> */}
                    <LButtons type='button' name='btn btn-light font-weight-bold' value='View' />
                </div>
            </div>
        })}
        </>
     );
}
 
export default Items;