import React from 'react';
import { connect } from 'react-redux';
/* --- Components --- */
import Nav from './src/components/nav/navContainer';
import Loader from './src/shared/loader';
import './styles/main.scss';

const FlashMessagesContainer = Loader({
  loader: () =>
    import('./src/shared/flassMessagesContainer' /* webpackChunkName: 'FlashMessagesContainer' */),
});

const App = (props, { isOnModal }) => (
  <div id="app">
    <Nav />
    {!isOnModal && (
      <div className="flex justify-center">
        <FlashMessagesContainer />
      </div>
    )}
    {props.children}
  </div>
);

const mapPropsToState = state => ({
  isOnModal: state.modal.show,
});

export default connect(
  mapPropsToState,
  null,
)(App);
