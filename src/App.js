import RegistrationForm from "./components/RegistrationForm";
import { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const handelChangeFName = (event) => {
    setFirstName(event.currentTarget.value);
  }

  const handelChangeLName = (event) => {
    setLastName(event.currentTarget.value);
  }

  // const [form, setForm] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    setSubmitted(true);
  }

  return (
    <>
      <RegistrationForm 
        handleSubmit={handleSubmit} 
        handelChangeFName={handelChangeFName} 
        handelChangeLName={handelChangeLName} 
        firstName={firstName}
        lastName={lastName}
        />
      {isSubmitted? (
        <section>
          <h2>Bekreftet bestilling:</h2>
          <p>{firstName}, vi bekrefter å ha mottatt din bestilling.</p>
        </section>
      ): null }
    </>
  );
}

export default App;
