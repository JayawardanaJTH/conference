import React,{useContext} from 'react'
import { PaymentContext } from '../../../context/paymentContext'
import Tables from '../../common/Tables/Tables'

const PaymentDetails = () => {
    const { payments } = useContext(PaymentContext)

    const columns = [
        { key: "1", path: "payed_by.username", label: "Payment by" },
        { key: "2", path: "createdAt", date: "Date" },
        { key: "3", path: "payed_by.type", label: "User type" },
        { key: "4", path: "payed_by.email", label: "E-mail" },
        { key: "5", path: "amount", label: "Amount" },
        { key: "6", path: "reason", label: "Reason" }
      ]

    return ( 
        <>
          <main role="main" id="payment">
                    <div className="row justify-content-center">
                        <h5 className="text-white">Total Income : Rs. 1000.00</h5>
                    </div>
                <Tables columns ={columns} data={payments}/>
            </main>
        </>
     );
}
 
export default PaymentDetails;