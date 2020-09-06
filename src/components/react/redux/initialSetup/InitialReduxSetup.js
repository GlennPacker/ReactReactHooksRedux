import React from "react";

export function InitialReduxSetup() {
  return (
    <div>
      <h2>Initial Redux Setup</h2>

      <h3>Create Folder Structure</h3>
      <img src="/public/folderstructure.png" />

      <h3>Create Action Type Constant</h3>
      <p>
        If this is an api call may also want to create the updated and error
        actions at the same time
      </p>
      <img src="/public/action-types.png" />

      <h3>Create action</h3>
      <p>Create the first action.</p>
      <img src="/public/create-action.png" />

      <h3>Create reducer</h3>
      <p>Create reducer to handle the first action.</p>
      <img src="/public/first-reducer-method.png" />

      <h3>Create root reducer</h3>
      <p>Create root reducer importing the new reducer.</p>
      <img src="/public/root-reducer.png" />

      <h3>Configure store</h3>
      <img src="/public/configure-store.png" />

      <h3>Inital State</h3>
      <p>A simple Json Object representing the inital state</p>
      <img src="/public/initial-state.png" />

      <h3>Instantiate store</h3>
      <img src="/public/instantiate-store.png" />

      <h3>Connect component</h3>
      <img src="/public/connect-component.png" />

      <h3>Pass props via connect</h3>
      <img src="/public/map-state-to-props.png" />

      <h3>Dispatch action</h3>
    </div>
  );
}
