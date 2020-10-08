/* eslint-disable func-names */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import {Nav,NavItem,NavDropdown,MenuItem, Navbar} from 'react-bootstrap';
import { Container } from './styles';

function Menu() {
  const [tipoDropdown, setTipoDropdown] = useState(1);
  function handleDropdown(tipo) {
    setTipoDropdown(tipo);
  }
  const [tipoMenu, setTipoMenu] = useState(0);
  function handleMenu(tipo) {
    setTipoMenu(tipo);
  }
  return (
    <Container className="col-md-8">
      <ul className="desk-only row nav nav-pills nav-justified pt-3 pb-2 ">
        <li className="nav-item pb-2">
          <Link className="nav-link desk-nav-link mr-2" to="/">HOME</Link>
        </li>
        <li className="nav-item pb-2">
          <Link className="nav-link desk-nav-link mx-2" to="/atuacao">ATUAÇÃO</Link>
        </li>
        <li className="nav-item pb-2">
          <Link className="nav-link desk-nav-link mx-2" to="/projetos">PROJETOS</Link>
        </li>
        <li className="nav-item pb-2">
          <Link className="nav-link desk-nav-link mx-2" to="/engenheiros">ENGENHEIROS</Link>
        </li>
        <li className="nav-item pb-2">
          <Link className="nav-link desk-nav-link ml-2" to="/contato">CONTATO</Link>
        </li>
      </ul>
      <div className="mobile-nav">
        <Navbar className="mobile-only d-flex justify-content-between navbar-dark"  expand="lg">
          <Navbar.Brand className="text-light"href="/">HMR-Construtora</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link link-mobile" to="/">HOME</Link>
              <Link className="nav-link link-mobile" to="/projetos">PROJETOS</Link>
              <Link className="nav-link link-mobile" to="/engenheiros">ENGENHEIROS</Link>
              <Link className="nav-link link-mobile" to="/contato">CONTATO</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
     
     
    </Container>
  );
}

export default Menu;
