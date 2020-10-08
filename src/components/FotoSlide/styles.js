import styled from 'styled-components';

export const Container = styled.div`
    
  .prev {
    transform: perspective(400px) rotateY(50deg);
    display: none;
  }

  .next {
    transform: perspective(400px) rotateY(-50deg);
    display: none;
  }

  .left{
    margin: 0 0 0 -260px;

  }

  .right{
    margin: 0 -260px 0 0 ;
    
  }

  .atual {
    margin: 0 -70px;
    display: block;
    
  }

  .galeria img {
    transition: 0.5s ease;
    
  }
  .opacity-1 {
    display: block ;
  }
  .opacity-2, .right:nth-child(2) {
    opacity: 0.6;
    display: block ;
  }
  .opacity-3, .right:nth-child(3) {
    opacity: 0.4;
    display: block ;
  }
  .opacity-4, .right:nth-child(4)  {
    opacity: 0.2 ;
    display: none !important;
  }

  .show {
      display: none;
  }

  
  @media (max-width: 768px) {
    .opacity-3, .right:nth-child(3) {
        opacity: 0.4;
        display: none ;
      }
      .atual {
        margin: 0 -200px;
        display: block;
        z-index: 200;
      }
      
    
  }
  
  }

  @media (max-width: 425px) {
    .opacity-2, .right:nth-child(2) {
        opacity: 0.6;
        display: none ;
    }
`;
