import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {syncUser} from './state/auth'
import store from './store'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'




firebase.initializeApp({
  apiKey: "AIzaSyB4JOcaAVWCNSMtoe9SGCPAJskYX9tFiz8",
  authDomain: "jfdd7-mk-app.firebaseapp.com",
  databaseURL: "https://jfdd7-mk-app.firebaseio.com",
  projectId: "jfdd7-mk-app",
  storageBucket: "jfdd7-mk-app.appspot.com",
  messagingSenderId: "350051798306"
})

firebase.auth().onAuthStateChanged(user => store.dispatch(syncUser(user)))

ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
