import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo2 from '~/assets/logo-2.png'

class Projetos extends Component {
  render(){
    return (
        <Container className="px-4">
            <div className="row p-2">
              <div className="logo col-1 d-flex align-items-center p-2">
                <img src={Logo2} alt="Logo HMR-Construtora" />
              </div>
              <div className="col d-flex align-items-center pl-1">
                <h2 className="col pt-3 p-2 m-0 text-danger">PROJETOS</h2>
              </div>
            </div>
            <div className="container">
            <ul className="ml-4 projetos-list">
              <li className='my-5'><Link to='/projetos/residencias'>Residências na região de Alphaville, São Paulo, Campos de Jordão e Vinhedo</Link></li>
              <li className='my-5'><Link to='/projetos/escritorios'>Escritórios comerciais, cafés e restaurantes</Link></li>
              <li className='my-5'><Link to='/projetos/laboratorios'>Laboratórios, clinicas e hospitais</Link></li>
            </ul>
          </div>
        </Container>
    );
  }
}

export default Projetos;
