import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import firebaseConfig from './firebase.config';
import "slick-carousel/slick/slick.css";
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<PersistGate loading={"loading"} persistor={persistor}>

<App />
</PersistGate>
  </Provider>,
);


