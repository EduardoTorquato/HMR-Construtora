import styled from 'styled-components';
import FundoTopo from '~/assets/fundo-topo.png';

export const Container = styled.div`
  background-image: url(${FundoTopo});
  background-repeat: no-repeat;
  background-size: cover;
  
  .container {
    max-width: 720px !important;
  }
  .fundo-img {
    background-color: #fff;
  }

  .fundo {
    background: repeating-linear-gradient(
      64deg,
      #99999a,
      #99999a 14px,
      #ccc,
      #ccc 15px
    );
  }


`;
