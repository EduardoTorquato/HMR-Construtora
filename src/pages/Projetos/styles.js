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

  .projetos-list a {
    color: #3f4096;
    font-weight: 700;
    text-decoration: none;
  }

  .projetos-list li::before {
    content: '•';
    color: red;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }

  @media (max-width: 768px) {
    .logo {
      min-width: 20%
  
    }
  }

`;
