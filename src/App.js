import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import ScrollToTop from '~/components/ScrollToTop';
import Menu from '~/components/Menu';
import Footer from '~/components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router
        basename="/httpdocs/cliente/site/bora-brasil-motoristas"
        history={history}
      >
        <ScrollToTop>
          <GlobalStyle />
          <Menu />
          <Routes />
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
