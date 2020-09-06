import * as Actions from "./actions";
import * as clientApi from "../../api/clientApi";

export function loadClients() {
  return function (dispatch) {
    return clientApi
      .getClients()
      .then((clients) => {
        dispatch(loadClientsSuccess(clients));
      })
      .catch((error) => {
        // dispatch({ type: types.CLIENTS_LIST_LOADED_FAILED, error });
        throw error;
      });
  };
}

export function loadClientsSuccess(clients) {
  return {
    type: Actions.LOAD_CLIENTS_SUCCESS,
    clients,
  };
}
