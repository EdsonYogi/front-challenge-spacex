import React from 'react';
import './App.css';
import Routes from './routes'
import {ApolloProvider} from '@apollo/client'
import client from './services/apollo'

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