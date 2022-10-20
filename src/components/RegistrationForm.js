import { useState } from "react";


const RegistrationForm = ({handleSubmit, handelChangeFName, handelChangeLName, firstName, lastName}) => {


  return(
    <>      
      <h1>Velkommen til vår matkasse!</h1>
      <p>Du kan registrere deg her:</p>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="firstName">Fornavn:
          <input
            name="firstName"
            id="firstName"
            type="text"
            value={firstName}
            onChange={handelChangeFName}
          >
          </input>
        </label>
        <label htmlFor="lastName">Etternavn:
          <input
            name="lastName"
            id="lastName"
            type="text"
            value={lastName}
            onChange={handelChangeLName}
          >
          </input>
        </label>
        {/* <label htmlFor="dob">Født:
          <input
            name="dob"
            id="dob"
            type="date"
            value="dob"
            // onChange={handelChangeDob}
          >
          </input>
        </label>
        <label htmlFor="typeKasse">Velg din variant:
          <select 
            name="choice"
            id="choice"
            value="choice"
            // onChange={handelChangeChoise}
          >
            <option value="ordinær">Ordinær</option>
            <option value="ordinær vegetar">Ordinær vegetar</option>
            <option value="ordinær kyllin og fisk">Ordinær kylling og fisk</option>
            <option value="barnevennlig">Barnevennlig</option>
          </select>
        </label> */}
        <button type="submit">Registrer din bestilling</button>
      </form>
    </>
);
};
export default RegistrationForm;
    

