import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo2 from '~/assets/logo-2.png'
import { imgs } from '~/assets/projetos/escritorios';
import FotoSlide from '~/components/FotoSlide';
class Escritorios extends Component {
  render(){
    return (
        <Container className="px-4">
            <div className="row p-2">
              <div className="logo d-flex align-items-center col-1  p-2">
                <img src={Logo2} alt="Logo HMR-Construtora" />
              </div>
              <div className="col d-flex align-items-center pl-1">
                <h2 className="col pt-3 p-2 m-0 text-danger">Escritórios comerciais, cafés e restaurantes</h2>
              </div>
              <div className=" d-flex align-items-center pl-1">
                <Link to="/projetos" className="btn btn-light">Voltar</Link>
              </div>
            </div>
            <FotoSlide imgs={imgs} />
        </Container>
    );
  }
}

export default Escritorios;
