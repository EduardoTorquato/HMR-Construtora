import styled from 'styled-components';


export const Container = styled.div`
  max-width: 720px;
  margin: auto;

  h2 {
    font-size: 1.5rem;
  }

  .clientes-list li{
    color: #3f4096;
    font-weight: 700;
    text-decoration: none;
  }

  .clientes-list li::before {
    content: '•';
    color: red;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }

  @media (max-width: 767px) {
    .border-clientes {
      border-bottom: 1px solid #ccc;
    }
  }

  @media (min-width: 768px) {
    .border-clientes {
      border-right: 1px solid #ccc;
    }
  }

  @media (max-width: 768px) {
    .logo {
      min-width: 20%
  
    }
  }
`;
