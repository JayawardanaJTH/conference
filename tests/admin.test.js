import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import AdminPanel from '../src/components/pages/adminPanel/AdminPanel';

it('Checking the Text Elements', () => {
    render(<AdminPanel/>);
    expect(screen.getByText(/page/i)).toBeInTheDocument(); 
})