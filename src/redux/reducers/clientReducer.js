import * as Actions from "../actions/actions";
import initialState from "./initialState";

export default function clientReducer(state = initialState.clients, action) {
  switch (action.type) {
    case Actions.LOAD_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.clients,
      };
    default:
      return state;
  }
}
