import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as clientActions from "../../redux/actions/clientActions";
import ClientsPage from "./ClientsPage";

const ClientsPageContainer = () => {
  const clients = useSelector((state) => state.client.clients);
  const dispatch = useDispatch();
  const loadClients = () => dispatch(clientActions.loadClients());

  return (
    <ClientsPage clients={clients} loadClients={loadClients}></ClientsPage>
  );
};

export default ClientsPageContainer;
