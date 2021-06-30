import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Payment from '../src/components/pages/payment/PaymentForm';

it('Checking the Text Elements', () => {
    render(<Payment/>);
    expect(screen.getByText(/form-group/i)).toBeInTheDocument();
})