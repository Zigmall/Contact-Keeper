import React, { useState } from 'react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { email, name, phone, type } = contact;

  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input
        type="text"
        placeholder="Name"
        name="neme"
        value={neme}
        onChange={onChange }
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange }
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange }
      />
      <h5>Contact Type</h5>
      <input type='radio' neme='type' value='personal' checked={input === 'personal'} />
      personal{' '}
      <input type='radio' neme='type' value='professional' checked={input === 'professional'} /> Professional
      personal{' '}
      <div>
          <input type='submit' value='Add Contact' className='btn btn-primary btn-block' />
      </div>
    </form>
  );
};
export default ContactForm;
