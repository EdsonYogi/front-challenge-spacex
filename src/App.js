import React from 'react';
import './App.css';

import {ApolloProvider} from '@apollo/client'
import client from './services/apollo'

import Routes from './routes'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes/>
      </div>
    </ApolloProvider>
  );
}

export default App;