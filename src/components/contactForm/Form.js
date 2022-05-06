import React, { useEffect } from 'react';
import InputField from './InputField';
import { useState} from 'react';
;
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import emailjs from '@emailjs/browser';

const Form = () => {
  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  console.log(values);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send('service_we95mvr', 'template_93r6dsl', values, 'fMCRMwFm2EOTlmTAu')
      .then(
        (response) => {
          console.log('SUCCESS', response);
          setValues({
            fullName: '',
            phone: '',
            service: '',
            message: '',
          });
          setStatus('SUCCESS');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  return (
    <div className="main-form">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="book-title">Book an appoitment</h3>
        <InputField
          handleChange={handleChange}
          label="Full Name"
          name="fullName"
          type="text"
          placeholder="enter your full name"
        />
        <InputField
          handleChange={handleChange}
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="enter phone number"
        />
        <SelectField
          handleChange={handleChange}
          name="service"
          label="Service"
        />
        <TextAreaField
          handleChange={handleChange}
          label="Enter date, and time of appoitment "
          name="message"
        />
        <button type="submit">Send </button>
      </form>
    </div>
  );
};

const renderAlert = () => (
  <div>
    <p>Your message has been sent successfully ! </p>
  </div>
);

export default Form;
