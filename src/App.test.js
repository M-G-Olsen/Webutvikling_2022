import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('renders welcome text', () => {
    render(<App />);
    const linkElement = screen.getByText(/Velkommen til vår matkasse!/i);
    expect(linkElement).toBeInTheDocument;
});





