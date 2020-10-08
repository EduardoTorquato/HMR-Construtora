import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo2 from '~/assets/logo-2.png'


class Engenheiros extends Component {
  render(){
    return (
        <Container className="px-4">
        <div className="row p-2">
          <div className="logo d-flex align-items-center col-1  p-2">
            <img src={Logo2} alt="Logo HMR-Construtora" />
          </div>
          <div className="col d-flex align-items-center pl-1">
            <h2 className="col pt-3 p-2 m-0 text-danger">ENGENHEIROS</h2>
          </div>
        </div>
        <div className="container">
          <div className="row pl-5 p-2">
            <div className="col-50 mt-4 pl-0 mr-5">
              <p className="mb-1 nome">Márcia Regina R. M. Martins</p>
              <p className="mb-1 info">CREA:060088493-4</p>
              <p className="mb-1 info">Email: marcia@hmrconstrutora.com.br</p>
              <p className="mb-1 info">Cel: 11 7876-9569</p>
              <p className="mb-1 info">ID: 84*90065</p>
            </div>
            <div className="col-50 mt-4">
              <p className="mb-1 nome">Sidnei Raphaelli</p>
              <p className="mb-1 info">CREA:060091900-0</p>
              <p className="mb-1 info">Email: sidnei@hmrconstrutora.com.br</p>
              <p className="mb-1 info">Cel: 11 7876-9568</p>
              <p className="mb-1 info">ID: 84*90066</p>
            </div>

          </div>
        </div>
        </Container>
        
      
    );
  }
}

export default Engenheiros;
