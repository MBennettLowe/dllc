import React, { useState } from 'react';

    
 const SignUpForm = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [course, setCourse] = useState('');
   const [message, setMessage] = useState('');
  //  const [count, setCount] = useState(0);

  //  const handleVisits = () => {
  //   setCount({count} + 1);
  //  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  };

  const handleLastName = (e) => {
    setLastName(e.target.value)
  };

  const handleCourse = (e) => {
    setCourse(e.target.value)
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Welcome ${firstName} ${lastName} 👋 , thanks for enrolling in: ${course} ⚛️!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="FirstName">First Name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        onChange={handleFirstName} 
      />

      <br />
      <br />

      <label htmlFor="LastName">Last Name: </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        onChange={handleLastName}
      />

      <br />
      <br />

      <label htmlFor="Course">Course: </label>
      <input
        type="select"
        id="course"
        name="course"
        value={course}
        onChange={handleCourse}
      />

      <br />
      <br />

      <button type="submit">Submit</button>

      <br />
      <br />

      <h2>{message}</h2>
      {/* <p>{handleVisits}</p> */}
    </form>

  )
 }

export default SignUpForm;