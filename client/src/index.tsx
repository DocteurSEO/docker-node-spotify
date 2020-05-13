import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import { App } from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
