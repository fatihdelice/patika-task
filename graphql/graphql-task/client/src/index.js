import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import client from './apollo'
import 'antd/dist/antd.css'
import { BrowserRouter as Router } from 'react-router-dom';

import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <React.StrictMode>
     <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
     </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);