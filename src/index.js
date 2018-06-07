import React from "react";
import ReactDom from "react-dom";
import { App } from "./components";
// import './styles/style.sass';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore,applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducer from "./reducers/rootReducers";

const store = createStore(reducer,
  applyMiddleware(thunk));

const renderRootContainer = Root => {
  ReactDom.render(
    <Provider store={store}>
      <Router>
        <Root/>
      </Router>
    </Provider>,
    document.getElementById("app"));
};
renderRootContainer(App);
if (module.hot) {
  module.hot.accept("./components/App", () => renderRootContainer(App));
}
