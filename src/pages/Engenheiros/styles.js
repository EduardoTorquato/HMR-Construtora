import styled from 'styled-components';


export const Container = styled.div`
  max-width: 720px;
  margin: auto;

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-weight: 700;
  }
  .nome {
    color: #3f4096;
  }
  .info {
    color: #999;
  }

  @media (max-width: 768px) {
    .logo {
      min-width: 20%
  
    }
  }
`;
