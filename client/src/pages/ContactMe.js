import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import ThoughtHome from './ThoughtHome';

import Auth from '../utils/auth';

const ContactMe = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });

  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className='w-100'>
        <h1 style={{color: "white", fontSize: "35px", textShadow: "2px 2px teal"}}>Contact Me</h1><hr></hr>
        <div className='bg-dark flex-column justify-center align-center'>
          <h1 className='w-100 flex-row justify-left col-md-10 p-3'style={{color: "white", fontSize: "20px", textShadow: "2px 2px teal" }}><a href={"https://www.linkedin.com/in/landon-hinkle-51873b139/"}style={{color: "white"}}>LinkedIn: www.linkedin.com/in/landonh45</a></h1>
          <h1 className='w-100 flex-row justify-left col-md-10 p-3'style={{color: "white", fontSize: "20px", textShadow: "2px 2px teal" }}><a href={'https://github.com/llh9'} style={{color: "white"}}>GitHub: github.com/llh9</a></h1>
          <h1 className='w-100 flex-row justify-left col-md-10 p-3'style={{color: "white", fontSize: "20px", textShadow: "2px 2px teal" }}><a href={'https://llh9@yahoo.com'} style={{color: "white"}}>email: llh9@yahoo.com</a></h1>
        </div>
      </div> 
      <div className="col-12 col-lg-10">
        <div className="card">
          {/* <h4 className="card-header bg-dark text-light p-2">Choose the contact information you'd like to leave </h4> */}
          {/* <h4 className="card-header bg-dark text-light p-2">!The functionality for the form below is still in development! </h4> */}
          <h4 className="card-header bg-dark text-light p-2">Feel free to sign up for a contact accout! Click Signup in the upper-right corner</h4>
          <ThoughtHome />

          {/* <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              // <form onSubmit={handleFormSubmit}>
              //   <input
              //     className="form-input"
              //     placeholder="Your name"
              //     name="name"
              //     type="text"
              //     value={formState.name}
              //     onChange={handleChange}
              //   />
              //   <input
              //     className="form-input"
              //     placeholder="Your email"
              //     name="email"
              //     type="text"
              //     value={formState.email}
              //     onChange={handleChange}
              //   />
              //   <input
              //     className="form-input"
              //     placeholder="Your number"
              //     name="number"
              //     type="text"
              //     value={formState.password}
              //     onChange={handleChange}
              //   />
              //   <input
              //     className="form-input"
              //     placeholder="Comments"
              //     name="comment"
              //     type="text"
              //     value={formState.password}
              //     onChange={handleChange}
              //   />
              //   <button
              //     className="btn btn-block btn-primary"
              //     style={{ cursor: 'pointer' }}
              //     type="submit"
              //   >
              //     Submit
              //   </button>
              // </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default ContactMe;