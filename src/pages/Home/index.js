import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo2 from '~/assets/logo-2.png'
import ControlledCarousel from '~/components/Carousel'

class Home extends Component {
  render(){
    return (
        <Container className="px-4">
            <div className="px-3">
              <div className="row">
                  <ControlledCarousel />
              </div>
              <div className="row mt-2 mb-0">
                <p className="col-md-10 p-3 mb-0 pb-0 text-white fundo">Atendimento personalizado. Este é o diferencial em trabalhar com uma empresa que conhece a 
                particularidade das pessoas, e busca nos detalhes a satisfação e realização dos projetos de seus clientes.<br/> 
                Na HMR os engenheiros responsáveis acompanham de perto o andamento de todos os processos 
                e garantem a pontualidade e eficácia da execução e entrega dos projetos.</p>
                <div className="col-md-2 justify-content-center text-center " dir="rtl">
                    <Link to="/clientes" className='border-bottom border-danger bold col-2 px-0 cliente'>
                      Clientes
                    </Link>
                  <img src={Logo2} alt="Logo HMR-Construtora" className="bg-white mt-1"/>
                </div>
              </div>
            </div>
        </Container>
        
      
    );
  }
}

export default Home;
