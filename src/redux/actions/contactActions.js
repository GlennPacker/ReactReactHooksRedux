import * as Actions from "./actions";

export function sendContact(contact) {
  return function (dispatch) {
    // play with redux, react and react hooks project so no need to worry about sending email.
    dispatch(sendContactSuccess(contact));
  };
}

export function sendContactSuccess(contact) {
  return {
    type: Actions.SEND_CONTACT_SUCCESS,
    contact,
  };
}

export function clearContact() {
  return {
    type: Actions.SEND_CONTACT_SUCCESS,
    contact: null,
  };
}
