
import "./Form.css"
import React, { useState } from 'react';
import './Form.css'; 


const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    
    <div className="form-container">
        {/* <h1>Want to leran more about MDS? Contact Us</h1> */}
      <div className="form-section">
      <h1>Want to leran more about MDS? Contact Us</h1>
        <input
          type="text"
          id="fullName"
          placeholder="Enter your full name*"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="input input1"
        />
      </div>

      <div className="form-section">
    
        <input
          type="email"
          id="email"
          placeholder="Enter your email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input2"
        />
      </div>

      <div className="form-section">
            <textarea
          id="message"
          placeholder="Write your message here...*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="textarea"
        />
      </div>

      <button className="submit-button">submit</button>
    </div>
  );
};

export default Form;
