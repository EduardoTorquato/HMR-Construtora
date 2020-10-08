import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo2 from '~/assets/logo-2.png'
import catho from '~/assets/clientes/catho.PNG'
import klabin from '~/assets/clientes/klabin.PNG'
import medial from '~/assets/clientes/medial.PNG'
import porte from '~/assets/clientes/porte.PNG'
import rma from '~/assets/clientes/rma.PNG'

class Clientes extends Component {
  render(){
    return (
        <Container className="px-4">
          <div className="row p-2">
            <div className="logo d-flex align-items-center col-1  p-2">
              <img src={Logo2} alt="Logo HMR-Construtora" />
            </div>
            <div className="col d-flex align-items-center pl-1">
              <h2 className="col pt-3 p-2 m-0 text-danger">PRINCIPAIS CLIENTES</h2>
            </div>
          </div>
            <div className="container">
              <div className="row p-2">
                <div className="col-md border-clientes pb-3 mb-3">
                  <div className='row d-flex justify-content-center'>
                    <img src={medial} alt="" className="px-2"/>
                    <img src={catho} alt="" className="px-2"/>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <img src={klabin} alt="" className="mx-4" />
                    <img src={porte} alt="" className="mx-4"/>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <img src={rma} alt="" className="px-2"/>
                  </div>
                </div>
                <div className="col-md">
                  <ul className=" ml-4 clientes-list">
                    <li>Condominio Blue Office Tower</li>
                    <li>Condominio Paulista de Seguros III</li>
                    <li>Científica Lab</li>
                    <li>Luiggi Contini</li>
                    <li>Intermédica Sistema de Saúde</li>
                    <li>PLC Engenharia</li>
                    <li>St. Nicholas School</li>
                    <li>Cel Lep - Unidade Alphaville</li>
                    <li>Flat Parthenon Central Tower</li>
                  </ul>
                </div>
              </div>
            </div> 
        </Container>
        
      
    );
  }
}

export default Clientes;
