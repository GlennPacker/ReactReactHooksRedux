import * as Actions from "../actions/actions";
import initialState from "./initialState";

export default function contactReducer(state = initialState.contact, action) {
  switch (action.type) {
    case Actions.SEND_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.contact,
      };
    default:
      return state;
  }
}
