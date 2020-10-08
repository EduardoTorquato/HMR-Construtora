import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import ScrollToTop from '~/components/ScrollToTop';
import Topo from '~/components/Topo';
import Footer from '~/components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Router
        basename="/httpdocs/cliente/site/hmr-construtora"
        history={history}
      >
        <ScrollToTop>
          <GlobalStyle />
          
          <Topo />
          
          <Routes />
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
