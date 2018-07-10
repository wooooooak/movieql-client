import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import aplloClient from './apolloClient';
import Home from './Home';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={aplloClient}>
          <Route exact={true} path={'/'} component={Home} />
          <Route path={'/details/:movieId'} component={Detail} />
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
