import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Container, CssBaseline } from '@material-ui/core';
import Navbar from './Navbar';
import Routes from './Routes';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes />
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
