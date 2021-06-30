import React, { Component } from "react"
import { insertPayment,getPayments,insertTicket } from '../services/paymentServices'

const PaymentContext = React.createContext();

class PaymentProvider extends Component {
    state = {
        payments: [],
    };

    async componentDidMount() {
        // try {
        await this.ViewPayment();
        // } catch (ex) {}
    };

    AddPayment = async (data) => {
        try {
            return await insertPayment(data);
        } catch (ex) {
            if (ex.response)
                return ex.response
        }
    }

    ViewPayment = async () => {

        try {
            const payment = await getPayments();
            this.setState({ payments :payment.data });
        } catch (ex) {
            if (ex.response && ex.response.status === 400)
                console.log('err',ex.response.data);
        }
    }

    addTicket = async (data) => {
        console.log("🚀 ~ file: paymentContext.js ~ line 38 ~ PaymentProvider ~ addTicket= ~ data", data)
        try {
            await insertTicket(data);
            ;
        } catch (ex) {
            if (ex.response && ex.response.status === 400)
                console.log('err',ex.response.data);
        }
    }

    render() {
        return (
            <PaymentContext.Provider
                value={{
                    ...this.state,
                    AddPayment: this.AddPayment,
                    ViewPayment: this.ViewPayment,
                    addTicket: this.addTicket
                }}
            >
                {this.props.children}
            </PaymentContext.Provider>
        );
    }
}

const PaymentConsumer = PaymentContext.Consumer;
export { PaymentProvider, PaymentConsumer, PaymentContext };
