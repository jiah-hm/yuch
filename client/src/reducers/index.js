import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
/* --- Components --- */
import modal from './modalReducer';
import httpHandler from './HTTPHandlerReducer';
import flashMessage from './flashMessageReducer';
import auth from './authReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    modal,
    httpHandler,
    flashMessage,
    auth,
  });
