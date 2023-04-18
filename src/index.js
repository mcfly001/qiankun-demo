import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';
import { history } from './utils'
import './index.css';

registerMicroApps([
    {
      name: 'project-sub1', // app name registered
      entry: '//localhost:2001',
      container: '#root',
      activeRule: '/sub1',
      props: {
        history
      }
    },
    {
        name: 'project-sub2', // app name registered
        entry: '//localhost:2002',
        container: '#root',
        activeRule: '/sub2',
        props: {
          history
        }
      }
]);

start()

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
