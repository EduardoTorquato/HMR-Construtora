import styled from 'styled-components';

import Banner from '~/assets/banner.png';

export const Container = styled.div`
  .banner {
    background-size: cover;
    background-image: url(${Banner});
    background-position: top center;
    background-repeat: no-repeat;
    padding: 25% 0;
    height: 650px;
  }
  .btn-details {
    background-color: gray;
    color: #fff !important;
  }
`;
