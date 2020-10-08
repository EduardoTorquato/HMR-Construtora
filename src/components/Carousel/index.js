import React, {useState} from 'react';
import { Container } from './styles';
import { imgs } from '~/assets';
import Carousel from 'react-bootstrap/Carousel'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Container className="pt-2">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
              imgs.map( img => (
                <Carousel.Item key={imgs.indexOf(img)}>
                  <img 
                    className="d-block w-100 img-carousel"
                    src={img}
                    alt="..."
                  />
                </Carousel.Item>
              ))
            }
        </Carousel>
      </Container>
     
    </>
  );
}

export default ControlledCarousel;
