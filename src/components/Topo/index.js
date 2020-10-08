/* eslint-disable func-names */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaSortDown } from 'react-icons/fa';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import Menu from '~/components/Menu';

import { Container } from './styles';
import Logo from '~/assets/logo.png';


function Topo() {
  return (
    <Container>
        <div className='container px-4 bg-white'>
          <div className="container pt-3 fundo">
            <div className="row py-5 justify-content-center fundo-img">
              <img className="col-md-8 px-0" src={Logo} alt="Logo HMR-Construtora"/>
            </div>
          </div>
        </div>
        <div className='container px-4'>
          <Menu />
        </div>
        
    </Container>
  );
}

export default Topo;
