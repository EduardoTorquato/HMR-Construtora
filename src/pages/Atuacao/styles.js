import styled from 'styled-components';


export const Container = styled.div`
  max-width: 720px;
  margin: auto;
  
  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1rem;
  }

  .areas-list {
    list-style-type: disc;
  }

  @media (max-width: 768px) {
    .logo {
      min-width: 20%
  
    }
  }
`;
