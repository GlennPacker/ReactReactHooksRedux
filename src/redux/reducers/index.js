import { combineReducers } from "redux";
import contact from "./contactReducer";
import client from "./clientReducer";

const rootReducer = combineReducers({
  contact,
  client,
});

export default rootReducer;
