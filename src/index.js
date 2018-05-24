import React from 'react';
import ReactDom from 'react-dom';
import { App } from './components';
import './styles/style.sass';

const renderRootContainer = Root => {
  ReactDom.render(<Root />, document.getElementById('app'));
};
renderRootContainer(App);
if (module.hot) {
  module.hot.accept('./components/App', () => renderRootContainer(App));
}
