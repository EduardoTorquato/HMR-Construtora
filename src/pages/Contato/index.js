import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo2 from '~/assets/logo-2.png'


class Contato extends Component {
  limpar = () => {
    document.getElementById("form-contato").reset();
  }

  render(){
    return (
        <Container className="px-4">
        <div className="row p-2">
          <div className="logo d-flex align-items-center col-1  p-2">
            <img src={Logo2} alt="Logo HMR-Construtora" />
          </div>
          <div className="col d-flex align-items-center pl-1">
          <h2 className="col pt-3 p-2 m-0 text-danger">CONTATO</h2>
          </div>
        </div>
        <div className="container">
            <form action="#" method="POST" id='form-contato'>
            <div className="form-group">
              <label for="nome">Nome:</label>
              <input type="text" className="form-control" id="nome" placeholder=""/>
            </div>
            <div className="form-group">
              <label for="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder=""/>
            </div>
            <div className="form-group">
              <label for="tel">Telefone:</label>
              <input type="tel" className="form-control" id="tel" placeholder=""/>
            </div>
            <div className="form-group">
              <label for="mensagem">Mensagem</label>
              <textarea className="form-control" id="mensagem" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Enviar</button>
            <button type="button" onClick={this.limpar}class="btn btn-light ml-2 mb-2">Limpar</button>
            </form>
        </div>
        </Container>
        
      
    );
  }
}

export default Contato;
