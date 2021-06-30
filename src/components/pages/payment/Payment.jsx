import React from 'react'
import './Payment.css'
import PaymentForm from './PaymentForm'
import NavBars from '../../common/NavBars'
import Footers from '../../common/Footers'

const Payment = () => {
    return (
        <>
            <div className="payment-body">
                <NavBars />
                <div className="row justify-content-center mt-3" >
                    <h5 className="text-capitalize font-weight-bold text-white" >Payment details</h5>
                </div>
                <div className="container-payment">
                    <div className="row align-items-center justify-content-center">
                        <PaymentForm />
                    </div>
                </div>
            </div>
            <Footers />
        </>
    );
}

export default Payment;