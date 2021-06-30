import React from 'react'
import Button from 'react-bootstrap/Button'


export const Buttons = ({ value,variant,onSubmit }) => {
    return ( 
        <>  
            <Button style={{margin: '2%'}} variant={variant} onClick={onSubmit} >{value}</Button>
        </>
     );
}

export const LButtons = ({ type,value,name,onSubmit }) => {
    return ( 
        <>  
            <button type={type} onClick={onSubmit} className={name}>{value}</button>
        </>
     );
}
