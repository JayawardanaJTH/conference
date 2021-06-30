import React,{useState,useContext} from 'react'
import { PaymentContext } from '../../../context/paymentContext'
import auth from '../../../services/authServices'
import { InputFields } from '../../common/InputFields'
import { LButtons } from '../../common/Buttons'
import { Alerts } from '../../common/Alerts'

const PaymentForm = () => {
    const { AddPayment,addTicket } = useContext(PaymentContext)
    const [amount, setAmount] = useState(5000)
    const [reason, setReason] = useState("")
    const [payed_by, setPayedBy] = useState(auth.getCurrentUserId)
    const [errors, setErrors] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await AddPayment({amount,reason,payed_by});
        if (response.status === 200 ){
            await addTicket({
                price : amount,
                ref_no: payed_by,
                user: payed_by
            })
            window.location =  "/signin-signup";
        }
        else if (response.status === 400 || response.status === 404)
            setErrors(response.data)
    };
    return (
        <>
            <div className="col-6 bg-dark text-white-50 align-self-center mt-5" >
                <form onSubmit={onSubmit} className="m-3" >
                    <div>
                        <h5 className="text-white" style={{fontSize: '2rem'}}>Total: 5000/=</h5>
                    </div>

                    <hr className="bg-white" />

                    <div className="row" style={{display: 'flex'}}>
                        <div className="col-md-6 form-group">
                            <InputFields
                                name = 'form-group'
                                label = 'Card Number'
                                type = 'number'
                                placeholder = 'xxxx xxxx xxxx'
                            />

                        </div>
                        <div className="col-md-3 form-group">
                            <InputFields
                                name = 'form-group'
                                label = 'Exp. Date'
                                type = 'text'
                                placeholder = 'MM/YY'
                            />

                        </div>
                        <div className="col-md-3 form-group">
                            <InputFields
                                name = 'form-group'
                                label = 'CVV'
                                type = 'number'
                                placeholder = 'xxx'
                            />

                        </div>
                        <div className="col-md-12 form-group">
                            <InputFields
                                name = 'form-group'
                                label = 'Card Holder Name'
                                type = 'text'
                                placeholder = 'Card Holder Name'
                            />

                        </div>
                        <div className="col-md-12 form-group">
                            <InputFields
                                name = 'form-group'
                                label = 'Reason'
                                type = 'text'
                                placeholder = 'Reason for the payment'
                                onChange = {(e) => setReason(e.target.value)}
                            />

                        </div>
                        {errors && (
                            <Alerts  variant='danger' error={errors} />
                        )}
                    </div>
                    <br/>
                    <LButtons type='submit' name='btn btn-success font-weight-bolder w-100' value='Pay' />
                </form>
            </div>
        </>
    );
}

export default PaymentForm;