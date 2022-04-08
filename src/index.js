import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import {ApolloClient,ApolloProvider,InMemoryCache } from '@apollo/client'
import{BrowserRouter} from 'react-router-dom'

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
});



ReactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);