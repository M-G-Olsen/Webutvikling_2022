import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import RegistrationForm from '../RegistrationForm';

test('test', () => {
    expect(true).toBe(true);
})

test('should confirm the right name', () => {
    render(<RegistrationForm firstName={'Marianne'} lastName={'Olsen'}/>)
    render(<App/>)
    
    fireEvent.click(document.querySelector(submit));
    const linkElement = screen.getByText(/Marianne, vi bekrefter å ha mottatt din bestilling./i);
    expect(linkElement).toBeInTheDocument;
})