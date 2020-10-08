/* eslint-disable prettier/prettier */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '~/pages/Home/index';
import Clientes from '~/pages/Clientes/index';
import Atuacao from '~/pages/Atuacao/index';
import Projetos from '~/pages/Projetos/index';
import Engenheiros from '~/pages/Engenheiros/index';
import Contato from '~/pages/Contato/index';
import Residencias from '~/pages/Residencias';
import Laboratorios from '~/pages/Laboratorios';
import Escritorios from '~/pages/Escritorios';

// import Page404 from '~/pages/Page404/';

export default function Routes() {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
      <Route path={`${process.env.PUBLIC_URL}/clientes`} exact component={Clientes} />
      <Route path={`${process.env.PUBLIC_URL}/atuacao`} exact component={Atuacao} />
      <Route path={`${process.env.PUBLIC_URL}/projetos`} exact component={Projetos} />
      <Route path={`${process.env.PUBLIC_URL}/projetos/residencias`} exact component={Residencias} />
      <Route path={`${process.env.PUBLIC_URL}/projetos/laboratorios`} exact component={Laboratorios} />
      <Route path={`${process.env.PUBLIC_URL}/projetos/escritorios`} exact component={Escritorios} />
      <Route path={`${process.env.PUBLIC_URL}/engenheiros`} exact component={Engenheiros} />
      <Route path={`${process.env.PUBLIC_URL}/contato`} exact component={Contato} />
      {/* <Route path={`${process.env.PUBLIC_URL}/`} component={Page404} /> */}
    </Switch>
  );
}
