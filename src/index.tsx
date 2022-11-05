import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router basename="/ol4ik88-REACT2022Q3">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
