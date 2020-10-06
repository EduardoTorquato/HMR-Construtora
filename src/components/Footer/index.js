import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from './styles';

function Footer() {
  return (
    <>
      <Container>
        <div className="bg-footer pb-5 pt-5 mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-6">
                <h3>Header</h3>
                <ul>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-6">
                <h3>Header</h3>
                <ul>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-6">
                <h3>Header</h3>
                <ul>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                  <li>
                    <Link to="/">Contato</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <p className="text-center my-2">Copyright © 2020 criação: amz|mp</p>
    </>
  );
}

export default Footer;
