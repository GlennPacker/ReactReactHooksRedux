import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/clients/";

export function getClients() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getClientById(id) {
  return fetch(baseUrl + "?id=" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((clients) => {
        if (clients.length !== 1)
          throw new Error("Client was not found: " + id);
        return clients[0];
      });
    })
    .catch(handleError);
}

export function saveClients(client) {
  return fetch(baseUrl + (client.id || ""), {
    method: client.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...client,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteClient(id) {
  return fetch(baseUrl + id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
