import React from 'react'
import Alert from 'react-bootstrap/Alert'


export const Alerts = ({ error,variant }) => {
    return ( 
        <>  
           <br/>
           <Alert  variant={variant}>
                {error}
            </Alert>
        </>
     );
}