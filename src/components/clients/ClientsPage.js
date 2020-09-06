import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Client from "../client/Client";

const ClientsPage = ({ clients, loadClients }) => {
  useEffect(() => {
    if (!clients || !clients.length) {
      loadClients();
    }
  });

  if (!clients || !clients.length) return <div>Loading...</div>;
  return (
    <div>
      <h2>Clients</h2>
      <div className="client-grid-container">
        {clients.map((item, index) => (
          <Client client={item} key={index} index={index}></Client>
        ))}
      </div>
      <p>...</p>
    </div>
  );
};

ClientsPage.propTypes = {
  clients: PropTypes.array,
  loadClients: PropTypes.func,
};
export default ClientsPage;
