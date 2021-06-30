import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import React from 'react';
import Documents from '../src/components/pages/documents/Documents';

it('Checking the Text Elements', () => {
    render(<Documents/>);
    expect(screen.getByText(/columns/i)).toBeInTheDocument(); 
})