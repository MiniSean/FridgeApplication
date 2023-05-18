import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App from './ExploratoryUI/GPTUI1';
// import App from './ExploratoryUI/GPTUI2';
// import App from './ExploratoryUI/GPTUI3';
// import App from './ExploratoryUI/GPTUI4';
// import App from './ExploratoryUI/DryUI1';
// import App from './ExploratoryUI/GPTUI5';
// import App from './ExploratoryUI/GPTUI6';
// import App from './ExploratoryUI/FunctionalUI1';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
