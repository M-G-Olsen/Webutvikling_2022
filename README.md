Jeg har ikke fått til denne:  fireEvent.click(screen.getByText(/Registrer din bestilling/));
Jeg har også prøvd på disse måtene:  fireEvent.click(screen.getByText('Registrer din bestilling'));
fireEvent.click(screen.getByText(/Registrer din bestilling/i));
fireEvent.click(button); fireEvent.click(submit);
fireEvent.click(document.querySelector(button));
fireEvent.click(document.querySelector(submit)); 

Jeg har forsøkt å ha den både i RegistrationForm.test.js og i App.test.js, men jeg får den ikke til å fungere.
#   W e b u t v i k l i n g _ 2 0 2 2  
 