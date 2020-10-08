import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo2 from '~/assets/logo-2.png'

class Atuacao extends Component {
  render(){
    return (
        <Container className="px-4">
          <div className="row p-2">
            <div className="logo d-flex align-items-center col-1  p-2">
              <img src={Logo2} alt="Logo HMR-Construtora" />
            </div>
            <div className="col pl-1">
              <h2 className="col pt-3 p-2 m-0 text-danger">ATUAÇÃO</h2>
              <h3 className="col p-2 m-0 text-primary">A HMR atua na área de Construção Civil e de Segurança do Trabalho</h3>
            </div>
            </div>
            <div className="container">
              <div className="row p-2">
                <ul className=" ml-5 areas-list">
                  <li>Construções industriais, comerciais, bancárias, hospitalares e residenciais;</li>
                  <li>Manutenção predial e reformas em geral;</li>
                  <li>Reformas e adaptações de escritórios;</li>
                  <li>Projetos arquitetônicos e de layout;</li>
                  <li>Projetos de instalações, elétrica, hidráulica, telecomunicações e ar condicionado;</li>
                  <li>Implatações de redes de telecomunicações e informpatica;</li>
                  <li>Licenças e Regularizações junto aos órgãos competentes: CETESB, Bombeiros, Prefeituras, etc.;</li>
                  <li>Execução de Programas e Laudos de Segurança do Trabalho.</li>
                </ul>
              </div>
            </div>          
        </Container>
        
      
    );
  }
}

export default Atuacao;
