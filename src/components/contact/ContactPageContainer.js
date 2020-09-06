import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactPage from "./ContactPage";
import * as contactActions from "../../redux/actions/contactActions";
import { useHistory } from "react-router-dom";

const ContactPageContainer = () => {
  const sentContact = useSelector((state) => state.contact.contact);
  const dispatch = useDispatch();
  const history = useHistory();

  const sendContact = (contact) =>
    dispatch(contactActions.sendContact(contact));

  const contactComplete = () => {
    setTimeout(function () {
      dispatch(contactActions.clearContact());
      history.push("/");
    }, 500);
  };

  return (
    <ContactPage
      sendContact={sendContact}
      sentContact={sentContact}
      contactComplete={contactComplete}
    ></ContactPage>
  );
};

export default ContactPageContainer;
