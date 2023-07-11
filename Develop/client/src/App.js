import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
//import { RestLink } from 'apollo-link-rest';

import { setContext } from '@apollo/client/link/context';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
const httpLink = createHttpLink({
  uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
// const restLink = new RestLink({
//   uri: 'https://www.googleapis.com/books/v1/', //process.env.BASE_URL,
//   headers: { 
//       'Content-Type': 'application/json',
//       mode: 'cors',
//       credentials: 'include'
//   },
// });
const gqlLink = authLink.concat(httpLink)
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link:
   //ApolloLink.split(operation =>
    //operation.getContext().clientName === "rest",
    
    // The string "rest" and "clientName" can be anything you want
    //restLink, // Apollo will send to this if clientName is "rest"
    gqlLink, // Otherwise will send to this
  //),
  cache: new InMemoryCache(),
});

//stackoverflow.com/questions/64804893/apollo-client-how-to-query-rest-endpoint-with-query-string
function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route path = "*" element={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
    </Router>
      </ApolloProvider>
  );
}
export default App;


// App.js: Create an Apollo Provider to make every request work with the Apollo server.


