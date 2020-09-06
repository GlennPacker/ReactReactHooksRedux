import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/contact/";

export function sendContact(contact) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...contact,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}
