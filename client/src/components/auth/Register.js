import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const onSubmit = e => {
      e.preventDefault();
      console.log('Register submit');
  }
  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <lanel htmlFor='name'>Name</lanel>
          <input
            type='text'
            name='name'
            value={name}
            onChange={onChange}
          ></input>
        </div>
        <div className='form-group'>
          <lanel htmlFor='email'>Email Adress</lanel>
          <input
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          ></input>
        </div>
        <div className='form-group'>
          <lanel htmlFor='passowrd'>Password</lanel>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          ></input>
        </div>
        <div className='form-group'>
          <lanel htmlFor='password2'>Confirm Password</lanel>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
          ></input>
        </div>
        <input type='submit' value='Register' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default Register;
