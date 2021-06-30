import React from 'react'

export const InputFields = ({ name,label,type,placeholder,onChange }) => {
    return ( 
        <>
            <div className={name}>
                <label >{label}</label>
                <input type={type} className="form-control"  placeholder={placeholder} onChange={onChange}/>
            </div>   
        </>
     );
}

export const Area = ({ name,label,type,placeholder,onChange }) => {
    return ( 
        <>
            <div className={name}>
                <label >{label}</label>
                <textarea type={type} className="form-control"  placeholder={placeholder} onChange={onChange}></textarea>
            </div>   
        </>
     );
}

export const RadioButtons = ({ label,name,value,onChange }) => {
    return ( 
        <>  
            <div className="form-check">
                <input type="radio" className="form-check-input" name={name} value={value} onChange={onChange}/>
                <label htmlFor="researcher">{label}</label>
            </div>
        </>
     );
}