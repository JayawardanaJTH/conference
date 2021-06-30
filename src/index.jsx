import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { EditProvider } from './context/editContext';
import { DocumentProvider } from './context/documentContext';
import { UserProvider } from './context/userContext';
import { PaymentProvider } from './context/paymentContext';

render(
            <UserProvider>
                <DocumentProvider>
                    <EditProvider>
                        <PaymentProvider>
                            <App/>
                        </PaymentProvider>
                    </EditProvider>
                </DocumentProvider>
             </UserProvider>
    , document.getElementById('root'));
