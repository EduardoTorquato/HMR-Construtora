/* eslint-disable func-names */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaSortDown } from 'react-icons/fa';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from './styles';
import Logo from '~/assets/logo.png';

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
    <Container className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-lg py-0">
          <div className="col-12">
            <ul className="nav navbar-nav">
              <li>
                <div className="row">
                  <div className="col-md-12 col-5">
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      <img src={Logo} className="py-3" alt="Logo" />
                    </Link>
                  </div>
                  <div className="col-7 text-right md-none">
                    <button
                      className={`${
                        tipoMenu === 2 ? 'is--active' : ''
                      } menu-btn my-5`}
                      aria-labelledby="sr-only"
                      type="button"
                      onClick={() =>
                        tipoMenu === 2 ? handleMenu(1) : handleMenu(2)
                      }
                    >
                      <span className="sr-only" id="sr-only">
                        Menu
                      </span>
                      <div className="menu-btn__icon" aria-hidden="true">
                        <span className="icon icon--menu">
                          <span />
                          <span />
                          <span />
                        </span>
                        <span className="icon icon--close">
                          <span />
                          <span />
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </li>
              <li className="py-5 ml-md-auto mr-4 nav-item sm-none">
                <Link to="/">Link</Link>
              </li>
              <li className="py-5 nav-item mx-4 sm-none">
                <AnchorLink href="#content" offset={130}>
                  AnchorLink
                </AnchorLink>
              </li>
              <li className="py-5 nav-item mx-4 sm-none">
                <button
                  type="button"
                  onClick={
                    tipoDropdown === 2
                      ? () => handleDropdown(1)
                      : () => handleDropdown(2)
                  }
                >
                  Dropdown <FaSortDown />
                </button>
                <div
                  className={`${
                    tipoDropdown === 2 ? '' : 'd-none'
                  } drop-content`}
                >
                  <ul>
                    <li className="py-2">
                      <Link to="/" onClick={() => handleDropdown(1)}>
                        Dropdown Item
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" onClick={() => handleDropdown(1)}>
                        Dropdown Item
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link to="/" onClick={() => handleDropdown(1)}>
                        Dropdown Item
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div
          className={` ${
            // eslint-disable-next-line no-nested-ternary
            tipoMenu === 0
              ? 'd-none'
              : tipoMenu === 1
              ? 'slide-out-left d-none'
              : 'slide-in-left'
          } vh-100 md-none`}
        >
          <ul>
            <li className="py-3">
              <Link
                to="/"
                onClick={() => (tipoMenu === 2 ? handleMenu(1) : handleMenu(2))}
              >
                Link
              </Link>
              <hr className="dropdown-divider" />
            </li>
            <li className="py-3">
              <AnchorLink
                href="#content"
                offset={130}
                onClick={() => (tipoMenu === 2 ? handleMenu(1) : handleMenu(2))}
              >
                AnchorLink
              </AnchorLink>
              <hr className="dropdown-divider" />
            </li>
            <li className="py-3">
              <button
                type="button"
                onClick={
                  tipoDropdown === 2
                    ? () => handleDropdown(1)
                    : () => handleDropdown(2)
                }
              >
                Dropdown <FaSortDown />
              </button>
              <div
                className={`${tipoDropdown === 2 ? '' : 'd-none'} drop-content`}
              >
                <ul>
                  <li className="py-2">
                    <Link
                      to="/"
                      onClick={() => {
                        handleDropdown(1);
                        handleMenu(1);
                      }}
                    >
                      Dropdown Item
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/"
                      onClick={() => {
                        handleDropdown(1);
                        handleMenu(1);
                      }}
                    >
                      Dropdown Item
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link
                      to="/"
                      onClick={() => {
                        handleDropdown(1);
                        handleMenu(1);
                      }}
                    >
                      Dropdown Item
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Menu;
