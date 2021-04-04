const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}` || prompt("What is your username?") ,
  selectedChannel: 'general'
};

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger'
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
