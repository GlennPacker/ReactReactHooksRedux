import React, { useState } from "react";
import PropTypes from "prop-types";

const ContactPage = ({ sendContact, contactComplete, sentContact }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [canSend, setCanSend] = useState(true);

  let showMessage = false;
  if (sentContact && sentContact.email) {
    showMessage = true;
    contactComplete();
  }

  const handleChange = (event) => {
    const contact = {
      ...contactForm,
      [event.target.name]: event.target.value,
    };

    setContactForm(contact);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCanSend(false);
    sendContact(contactForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Contact GlennPacker.net</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            defaultValue={contactForm.name}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            defaultValue={contactForm.email}
          />
        </div>
        <div>
          <label>Message:</label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            defaultValue={contactForm.message}
          />
        </div>
        {canSend ? <input type="submit" vlaue="Send" /> : null}
      </form>
      {showMessage ? <div>Message Sent</div> : null}
    </div>
  );
};

ContactPage.propTypes = {
  sendContact: PropTypes.func,
  sentContact: PropTypes.object,
  contactComplete: PropTypes.func,
};

export default ContactPage;
