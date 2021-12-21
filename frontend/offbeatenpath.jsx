import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { postUser, postSession, deleteSession } from './util/session_api_util'
import { login } from './actions/session_actions'
import Root from './components/root'
import { fetchTrails, fetchTrail } from './actions/trail_actions'


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  // window.postUser = postUser
  // window.postSession = postSession
  // window.deleteSession = deleteSession
  // window.login = login

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // // window.fetchTrails = fetchTrails;
  // window.fetchTrail = fetchTrail;
});

// dispatch(fetchTrail()).then(console.log)