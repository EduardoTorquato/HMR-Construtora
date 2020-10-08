import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

class FotoSlide extends Component {

  changeZIndex = () => {
    var zIndex = document.querySelectorAll('.zNext').length;
    document.querySelectorAll('.zNext').forEach( img => {
      img.style.zIndex = zIndex;
      zIndex--;
    });
    var zIndex = 0;
    document.querySelectorAll('.zPrev').forEach( img => {
      img.style.zIndex = zIndex;
      zIndex++;
    });
  }

  componentDidMount() {
    document.querySelectorAll(".galeria img")[0].setAttribute("class","atual");
    document.querySelectorAll(".galeria img")[0].click();
    this.changeZIndex();
  }

  selectImage = (e) => {
    var fotos = Array.from(document.querySelectorAll(".galeria img"));
    var indexFoto = fotos.indexOf(e.target);
    var lastIndex = fotos.length;
    fotos.forEach(foto => {
      foto.classList.add("show");
    })
    for(var i = 1; i < 5; i++){

      if((indexFoto+i) <  lastIndex){
        fotos[(indexFoto+i)].setAttribute("class","next zNext opacity-"+i);
        fotos[(indexFoto+i)].style.transform = "perspective(400px) rotateY(-50deg)";
        fotos[(indexFoto+i)].style.margin = "0  -260px 0 0 ";
        
      }

      
      fotos[indexFoto].setAttribute("class","atual");
      if(document.querySelector('html').offsetWidth < 769) {
        fotos[indexFoto].style.margin = "0 -200px";
      }else{
        fotos[indexFoto].style.margin = "0 -70px";
      }
      fotos[indexFoto].style.transform = "perspective(0px) rotateY(0deg)";
      fotos[indexFoto].style.zIndex = 200;

      if((indexFoto-i) >= 0){
        fotos[(indexFoto-i)].setAttribute("class","prev zPrev opacity-"+i);
        fotos[(indexFoto-i)].style.transform = "perspective(400px) rotateY(50deg)";
        fotos[(indexFoto-i)].style.margin = "0  0 0 -260px";
        
      }
    }
    this.changeZIndex();
  } 

  render(){
    const imgs = this.props.imgs;
    return (
      
        <Container className="px-4">
            <div className="container">
              <div className="row py-5">
                <div className="galeria col-md d-flex justify-content-center">
                
                  {
                    imgs.map( img => ( 
                        <img key={imgs.indexOf(img)} src={img} onClick={this.selectImage} alt="" className="show right next zNext"/>
                    ))
                  }
                </div>
              </div>
            </div>
        </Container>
    );
  }
}

export default FotoSlide;
