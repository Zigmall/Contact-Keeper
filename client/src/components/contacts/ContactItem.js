import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';


const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  }
  const { name, _id, email, phone, type } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type !== 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <FontAwesomeIcon icon='envelope-open' /> {email}
          </li>
        )}
          {phone && (
          <li>
            <FontAwesomeIcon icon='phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
          <button className='btn btn-dark btn-sm' onClick={() => setCurrent(contact)}>Edit</button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

ContactItem.prototype = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem;
