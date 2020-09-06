import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import HistoryPage from "./history/HistoryPage";
import { VsStudioShortCuts } from "./react/vsStudioShortcuts/VsStudioShortCuts";
import { InitialReduxSetup } from "./react/redux/initialSetup/InitialReduxSetup";
import ContactPageContainer from "./contact/ContactPageContainer";
import UseReducerPage from "./react/hooks/useReducerPage";
import ClientsPageContainer from "./clients/ClientsPageContainer";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/clients" component={ClientsPageContainer} />
        <Route path="/react/redux/initial" component={InitialReduxSetup} />
        <Route path="/react/shortcuts" component={VsStudioShortCuts} />
        <Route path="/hooks/use-reducer" component={UseReducerPage} />
        <Route path="/contact" component={ContactPageContainer} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
